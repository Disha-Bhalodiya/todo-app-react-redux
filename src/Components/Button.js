import React from "react";
import styles from "../Styles/Modules/button.module.scss";
import { getClasses } from "../Utils/Getclasses";

const buttonTypes = {
  primary: "primary",
  secondary: "secondary",
};


//here create a add task button for add task in todo

function Button({ type, variant = "primary", children, ...rest }) {
  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={getClasses([
        styles.button,
        styles[`button--${buttonTypes[variant]}`],
      ])}
      {...rest}
    >
      {children}{" "}
    </button>
  );
}

//here create a select button for select dropdown list 
function SelectButton({ children, id, ...rest }) {
  return (
    <select
      id={id}
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}{" "}
    </select>
  );
}

export { SelectButton };
export default Button;
