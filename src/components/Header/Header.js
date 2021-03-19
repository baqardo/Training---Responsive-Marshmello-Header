import React from "react";
import Button from "../Button/Button";

import "./Header.scss";

import marshmelloImage from "../../assets/marshmello.png";

const Header = props => (
  <header className="header">
    <div className="header__info">
      <div className="header__name">
        <img className="header__name-image" src={marshmelloImage} alt="marshmello" />
      </div>
      <p className="header__address">
        Allstate Arena <br /> 6920 N Mannheim Rd, Rosemont, IL 60018
      </p>
      <p className="header__date">Saturday, December 7th, 2019</p>
      <p className="header__description">
        Find out about the hottest underground parties & festivals at The DJ List. Let the music take you away….
      </p>
    </div>

    <div className="header__cta">
      <Button spaceRight>Get Tickets</Button>
      <Button white>More</Button>
    </div>
  </header>
);

export default Header;
