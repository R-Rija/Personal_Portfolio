// styles is a prop
import React from "react";
const Button = ({
  styles,
  text,
  icon
}) => {
  const classNames = `py-3 px-4 bg-blue-gradient font-poppins font-medium text-[12px] text-primary outline-none ${styles ?? ''} rounded`;
  return icon ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: classNames
  }, /*#__PURE__*/React.createElement(icon), "\xA0", text) : /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: classNames
  }, text);
};
export default Button;