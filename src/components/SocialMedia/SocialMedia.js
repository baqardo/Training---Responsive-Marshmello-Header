import React from "react";

import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";
import instagramIcon from "../../assets/instagram.png";
import youtubeIcon from "../../assets/youtube.png";

import "./SocialMedia.scss";

const SocialMedia = props => (
  <div className="social-media">
    <a className="social-media__link" href="#self">
      <img className="social-media__icon" src={facebookIcon} alt="facebook link" />
      <span className="social-media__name">Facebook</span>
    </a>
    <a className="social-media__link" href="#self">
      <img className="social-media__icon" src={instagramIcon} alt="facebook link" />
      <span className="social-media__name">Instagram</span>
    </a>
    <a className="social-media__link" href="#self">
      <img className="social-media__icon" src={twitterIcon} alt="facebook link" />
      <span className="social-media__name">Twitter</span>
    </a>
    <a className="social-media__link" href="#self">
      <img className="social-media__icon" src={youtubeIcon} alt="facebook link" />
      <span className="social-media__name">Youtube</span>
    </a>
  </div>
);

export default SocialMedia;
