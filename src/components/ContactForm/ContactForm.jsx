import { nanoid } from "nanoid";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Невірний формат номера телефону")
    .required("Required"),
});

export default function ContactForm({ onAdd }) {
  const contactId = useId();

  const handleSubmit = (values, actions) => {
    console.log("handleSubmit", values);

    onAdd({
      id: nanoid(),
      name: values.target.elements.text.value,
      number: values.target.elements.number.value,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={ContactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor={contactId}>Name</label>
        <Field className={css.input} type="text" name="text" id={contactId} />
        <ErrorMessage className={css.error} name="text" component="span" />
        <label>Number</label>
        <Field className={css.input} type="number" name="number" />
        <ErrorMessage className={css.error} name="number" component="span" />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
