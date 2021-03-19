import React from "react";

import "./SocialMedia.scss";

const SocialMedia = props => (
  <div className="social-media">
    <a className="social-media__link" href="#self">
      <img className="social-media__icon" src="" alt="facebook link" />
      <span className="social-media__name">Facebook</span>
    </a>
    <a className="social-media__link" href="#self">
      <img className="social-media__icon" src="" alt="facebook link" />
      <span className="social-media__name">Instagram</span>
    </a>
    <a className="social-media__link" href="#self">
      <img className="social-media__icon" src="" alt="facebook link" />
      <span className="social-media__name">Twitter</span>
    </a>
    <a className="social-media__link" href="#self">
      <img className="social-media__icon" src="" alt="facebook link" />
      <span className="social-media__name">Youtube</span>
    </a>
  </div>
);

export default SocialMedia;
