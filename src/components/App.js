import React, { useState, useEffect } from "react";

import "./App.css";

import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

import { v4 as uuidv4 } from "uuid";

function App() {
  const LOCAL_STORE_KEY = "contacts";

  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([
      ...contacts,
      {
        id: uuidv4(),
        ...contact,
      },
    ]);
  };

  const removeContactHandler = (id) => {
    const updatedContactList = contacts.filter((contact) => contact.id !== id);

    setContacts(updatedContactList);
  };

  useEffect(() => {
    const storedContacts = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY));

    if (storedContacts) {
      setContacts(storedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="app">
      <Header />

      <main className="app__container">
        <section className="app__left">
          <AddContact addContactHandler={addContactHandler} />
        </section>

        <section className="app__right">
          <ContactList
            contacts={contacts}
            getContactId={removeContactHandler}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
