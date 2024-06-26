import React from "react";
import "./Button.scss";
const Button = ({ text, type }) => {
  return <button className={`btn ${type}`}>{text}</button>;
};

export default Button;
