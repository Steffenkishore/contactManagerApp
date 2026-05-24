import React, {useState,useEffect} from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import { v4 as uuidv4 } from "uuid";




function App() {

  const [contacts,setContacts] = useState([]);

  const LOCAL_STORE_KEY = "contacts"
  const addContactHandler = (contact) => {
    console.log(contact)
    setContacts([...contacts,{id: uuidv4(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContastList = contacts.filter((contact) => {
      return contact.id != id;
    })
    setContacts(newContastList);
  }

  useEffect(() => {
    const receivedContacts = JSON.parse(localStorage.getItem(LOCAL_STORE_KEY));
    if (receivedContacts) setContacts(receivedContacts);
  },[]);

  useEffect(() => {
    if (contacts.length > 0) {
      localStorage.setItem(LOCAL_STORE_KEY, JSON.stringify(contacts));
    }
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
