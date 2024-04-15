import { IoIosContact } from "react-icons/io";
import { AiTwotonePhone } from "react-icons/ai";
import css from "./Contact.module.css";

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.container}>
      <div>
        <div className={css.userData}>
          <IoIosContact size={40} />
          <p className={css.desc}>{name}</p>
        </div>
        <div className={css.userData}>
          <AiTwotonePhone size={40} />
          <p className={css.desc}>{number}</p>
        </div>
      </div>
      <button className={css.btn} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}
