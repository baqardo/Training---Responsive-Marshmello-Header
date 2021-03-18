import React from "react";

import logo from "../../assets/logo.png";

import "./Navigation.scss";

const Navigation = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item nav__item--logo">
        <a href="#self">
          <img className="nav__logo" src={logo} alt="logo" width="40px" height="33px" />
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link nav__link--current-page" href="#self">
          Upcoming show
        </a>
      </li>
      <li className="nav__item">
        <a hre className="nav__link" href="#self">
          Media
        </a>
      </li>
      <li className="nav__item">
        <a hre className="nav__link" href="#self">
          Songs
        </a>
      </li>
      <li className="nav__item">
        <a className="nav__link" href="#self">
          Merchandise
        </a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
