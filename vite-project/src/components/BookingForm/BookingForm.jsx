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
    <div>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label htmlFor={nameId}>
            <Field
              type="text"
              name="name"
              id={nameId}
              placeholder="Name" // Плейсхолдер для имени
            />
          </label>
          <label htmlFor={emailId}>
            <Field
              type="text"
              name="email"
              id={emailId}
              placeholder="Enter your email" // Плейсхолдер для email
            />
          </label>
          <label htmlFor={dateId}>
            <Field
              type="date"
              id={dateId}
              name="date"
              values={initialValues.date}
              placeholder="Select a date" // Плейсхолдер для даты (может не отображаться в большинстве браузеров для поля даты)
            />
          </label>
          <label htmlFor={textareaId}>
            <Field
              className={css.textarea}
              component="textarea"
              id={textareaId}
              name="message"
              placeholder="Write your message here" // Плейсхолдер для текстового поля
            />
          </label>
          <button type="submit">Send</button>
        </Form>
      </Formik>
    </div>
  );
}
