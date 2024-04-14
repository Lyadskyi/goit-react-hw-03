import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

export default function ContactForm({ onAdd }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd({
      id: nanoid(),
      name: e.target.elements.text.value,
      number: e.target.elements.number.value,
    });
    e.target.reset();
  };
  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input} type="text" name="text" />
      <input className={css.input} type="number" name="number" />
      <button className={css.btn} type="submit">
        Add contact
      </button>
    </form>
  );
}
