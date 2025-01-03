import { useId } from "react";
import css from "./BookingForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";

const initialValues = { name: "", email: "", message: "", date: "" };

export default function BookingForm() {
  const nameId = useId();
  const emailId = useId();
  const textareaId = useId();
  const dateId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    toast.success("Your request has been sent!");
    actions.resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className={css.form}>
            <label htmlFor={nameId}>
              <Field
                type="text"
                name="name"
                id={nameId}
                placeholder="Name"
                className={css.input}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </label>
            <label htmlFor={emailId}>
              <Field
                type="text"
                name="email"
                id={emailId}
                placeholder="Enter your email"
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </label>
            <label htmlFor={dateId}>
              <Field
                type="text"
                id={dateId}
                name="date"
                placeholder="Booking date* "
                className={css.input}
              />
              <ErrorMessage name="date" component="div" className={css.error} />
            </label>
            <label htmlFor={textareaId}>
              <Field
                className={css.textarea}
                component="textarea"
                id={textareaId}
                name="message"
                placeholder="Comment"
              />
            </label>
            <button type="submit" className={css.btn}>
              Send
            </button>
          </Form>
        )}
      </Formik>
      <Toaster />
    </div>
  );
}
