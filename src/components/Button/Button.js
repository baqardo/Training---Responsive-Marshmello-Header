import React from "react";
import "./Button.scss";

const Button = props => {
  let additionalClasses = "";
  if (props.white) additionalClasses += " btn--white";
  if (props.spaceRight) additionalClasses += " btn--space-right";

  return <button className={`btn ${additionalClasses}`}>{props.children}</button>;
};

export default Button;
