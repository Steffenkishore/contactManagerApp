import React from "react";
import user from "../images/user.avif";
import "./AddContact.css";

class AddContact extends React.Component {
  state = {
    name: "",
    email: "",
    phone: null,
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  addContact = (e) => {
    e.preventDefault();

    const { name, email, phone } = this.state;

    if (name.trim() === "" || email.trim() === "" || phone.trim() === "") {
      alert("All fields are mandatory");
      return;
    }

    if (phone.trim().length !== 10 ) {
      alert("Enter valid phone number ! Don't add any country code");
      return;
    }

    this.props.addContactHandler(this.state);

    this.setState({
      name: "",
      email: "",
      phone: "",
    });
  };

  render() {
    return (
      <div className="add-contact">
        <h2 className="add-contact__title">Add Contact</h2>

        <img src={user} alt="user" className="add-contact__image" />

        <form className="add-contact__form" onSubmit={this.addContact}>
          <div className="add-contact__group">
            <label className="add-contact__label">Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter full name"
              value={this.state.name}
              onChange={this.handleChange}
              className="add-contact__input"
            />
          </div>

          <div className="add-contact__group">
            <label className="add-contact__label">Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email address"
              value={this.state.email}
              onChange={this.handleChange}
              className="add-contact__input"
            />
          </div>

          <div className="add-contact__group">
            <label className="add-contact__label">Phone Number</label>

            <input
              type="number"
              name="phone"
              placeholder="Enter phone number"
              value={this.state.phone}
              onChange={this.handleChange}
              className="add-contact__input"
            />
          </div>

          <button type="submit" className="add-contact__button">
            Add Contact
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
