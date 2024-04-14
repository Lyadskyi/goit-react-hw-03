import { IoIosContact } from "react-icons/io";
import { HiOutlinePhone } from "react-icons/hi";
import css from "./Contact.module.css";

export default function Contact({ data: { name, number } }) {
  return (
    <div className={css.container}>
      <div>
        <div className={css.userData}>
          <IoIosContact size={40} />
          <p className={css.desc}>{name}</p>
        </div>
        <div className={css.userData}>
          <HiOutlinePhone size={40} />
          <p className={css.desc}>{number}</p>
        </div>
      </div>
      <button className={css.btn}>Delete</button>
    </div>
  );
}
