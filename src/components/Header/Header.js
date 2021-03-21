import React from "react";
import Button from "../Button/Button";
import SocialMedia from "../../components/SocialMedia/SocialMedia";

import "./Header.scss";

import marshmelloImage from "../../assets/marshmello.png";
import marshmelloOutfitImage from "../../assets/marshmelloOutfit.png";

const Header = props => (
  <header className="header">
    <div className="header__left">
      <div className="header__info">
        <div className="header__name">
          <img className="header__name-image" src={marshmelloImage} alt="marshmello" />
          <div className="header__play header__play--mobile">
            <button className="header__play-button"></button>
          </div>
        </div>
        <div className="header__text">
          <p className="header__address">
            Allstate Arena <br /> 6920 N Mannheim Rd, Rosemont, IL 60018
          </p>
          <p className="header__date">Saturday, December 7th, 2019</p>
          <p className="header__description">
            Find out about the hottest underground parties & festivals
            <span className="header__text-break"></span> at The DJ List. Let the music take you away….
          </p>
        </div>
      </div>

      <div className="header__social-media">
        <SocialMedia />
      </div>

      <div className="header__cta">
        <Button spaceRight>Get Tickets</Button>
        <Button white>More</Button>
      </div>
    </div>

    <div className="header__right">
      <div className="header__play">
        <p className="header__play-caption">Play Songs</p>
        <button className="header__play-button"></button>
      </div>
      <img className="header__marshmallow" src={marshmelloOutfitImage} alt="marshmallow outfit" />
    </div>
  </header>
);

export default Header;
