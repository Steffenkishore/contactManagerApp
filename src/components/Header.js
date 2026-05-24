import React from "react";
import { FaAddressBook } from "react-icons/fa";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__branding">
          <FaAddressBook className="header__icon" />

          <div>
            <h1 className="header__title">Contact Manager</h1>

            <p className="header__subtitle">Manage your contacts efficiently</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
