// import { useId } from "react";
// import css from "./BookingForm.module.css";
// import { Formik, Form, Field } from "formik";
// export default function BookingForm() {
//   const nameId = useId();
//   const emailId = useId();
//   const textareaId = useId();
//   const dateId = useId();
//   const initialValues = { name: " ", email: "", message: "", date: "" };
//   const handleSubmit = (values, action) => {
//     console.log(values);
//     action.resetForm();
//   };
//   return (
//     <Formik initialValues={initialValues} onSubmit={handleSubmit}>
//       <Form>
//         <label htmlFor={nameId}>
//           <Field type="text" name="name" id={nameId} placeholder="Name" />
//         </label>
//         <label htmlFor={emailId}>
//           <Field type="text" name="email" id={emailId} />
//         </label>
//         <label htmlFor={dateId}>
//           <Field type="date" id={dateId} name="date" />
//         </label>
//         <label htmlFor={textareaId}>
//           <Field
//             className={css.textarea}
//             component="textarea"
//             id={textareaId}
//             name="message"
//           />
//         </label>
//         <button type="submit">Send</button>
//       </Form>
//     </Formik>
//   );
// }

import { useId } from "react";
import css from "./BookingForm.module.css";
import { Formik, Form, Field } from "formik";

export default function BookingForm() {
  const nameId = useId();
  const emailId = useId();
  const textareaId = useId();
  const dateId = useId();

  const initialValues = { name: "", email: "", message: "", date: "" };

  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={css.form}>
          <label htmlFor={nameId}>
            <Field
              type="text"
              name="name"
              id={nameId}
              placeholder="Name"
              className={css.input}
            />
          </label>
          <label htmlFor={emailId}>
            <Field
              type="text"
              name="email"
              id={emailId}
              placeholder="Enter your email"
              className={css.input}
            />
          </label>
          <label htmlFor={dateId}>
            <Field
              type="text"
              id={dateId}
              name="date"
              initialValues={initialValues.date}
              placeholder="Booking date*"
              className={css.input}
            />
          </label>
          <label htmlFor={textareaId}>
            <Field
              className={css.textarea}
              component="textarea"
              id={textareaId}
              name="message"
              placeholder="Comment" // Плейсхолдер для текстового поля
            />
          </label>
          <button type="submit" className={css.btn}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
