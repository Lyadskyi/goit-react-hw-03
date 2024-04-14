// Import components
import ContactList from "../ContactList/ContactList";

// Import hook
import { useState } from "react";

// Import json
import initialContacts from "../../contacts.json";

// Import className
import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactList contacts={contacts} />
    </div>
  );
}
