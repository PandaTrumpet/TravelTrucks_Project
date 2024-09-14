import { useId } from "react";
import css from "./BookingForm.module.css";
import { Formik, Form, Field } from "formik";
export default function BookingForm() {
  const nameId = useId();
  const emailId = useId();
  const initialValues = { name: " ", email: "" };
  const handleSubmit = (values, action) => {
    console.log(values);
    action.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form>
        <label htmlFor={nameId}>
          <Field type="text" name="name" id={nameId} />
        </label>
        <label htmlFor={emailId}>
          <Field type="text" name="email" id={emailId} />
        </label>

        <button type="submit">Send</button>
      </Form>
    </Formik>
  );
}
