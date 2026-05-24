import React from "react";
import ContactCard from "./ContactCard";

import "./ContactList.css";

const ContactList = ({ contacts, getContactId }) => {
  const deleteContactHandler = (id) => {
    getContactId(id);
  };

  const renderContactList = contacts.map((contact) => (
    <ContactCard
      key={contact.id}
      contact={contact}
      clickHandler={deleteContactHandler}
    />
  ));

  return (
    <div className="contact-list">
      <div className="contact-list__header">
        <h2 className="contact-list__title">Contact List</h2>

        <p className="contact-list__count">{contacts.length} Contacts</p>
      </div>

      <div className="contact-list__container">
        {contacts.length > 0 ? (
          renderContactList
        ) : (
          <div className="contact-list__empty">No contacts available</div>
        )}
      </div>
    </div>
  );
};

export default ContactList;
