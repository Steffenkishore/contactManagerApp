import React from "react";


const ContactCard = (props) => {
    const {id,name,email} = props.contact;
    return (
      <div>
        <div>
          <div>
            <p>{name}</p>
            <p>{email}</p>
            <button onClick={() => props.clickHandler(id)}>delete</button>
          </div>
        </div>
      </div>
    );
}

export default ContactCard;