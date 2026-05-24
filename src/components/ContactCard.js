import React from "react";
import { FaTrash, FaUserCircle, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import "./ContactCard.css";

const ContactCard = ({ contact, clickHandler }) => {
  const { id, name, email, phone } = contact;

  return (
    <div className="contact-card">
      <div className="contact-card__left">
        <FaUserCircle className="contact-card__avatar" />
      </div>

      <div className="contact-card__content">
        <h3 className="contact-card__name">{name}</h3>

        <div className="contact-card__info">
          <MdEmail className="contact-card__icon" />
          <p>{email}</p>
        </div>

        <div className="contact-card__info">
          <FaPhoneAlt className="contact-card__icon" />
          <p>{phone}</p>
        </div>
      </div>

      <button className="contact-card__delete" onClick={() => clickHandler(id)}>
        <FaTrash />
      </button>
    </div>
  );
};

export default ContactCard;
