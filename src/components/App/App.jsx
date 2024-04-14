// Import components
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";

// Import hook
import { useState } from "react";

// Import json
import initialContacts from "../../contacts.json";

// Import className
import css from "./App.module.css";

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [search, setSearch] = useState("");

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </div>
  );
}
