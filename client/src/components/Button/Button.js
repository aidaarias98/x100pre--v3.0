import React from "react";
import "./Button.css";

//styles and sizes
//css classes
const STYLES = ["btn--primary", "btn--outline", "btn--test"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = ({
  //passing props
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  //button style function
  //w/ conditional if style is included set it to the style created for it
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]; //if not true set it to the first in STYLES array

  //same logic here
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <div className="btn-mobile">
      {/* btn is default style */}
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};
