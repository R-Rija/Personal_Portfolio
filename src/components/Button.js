"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// styles is a prop

var Button = function Button(_ref) {
  var styles = _ref.styles,
    text = _ref.text,
    icon = _ref.icon;
  var classNames = "py-3 px-4 bg-blue-gradient font-poppins font-medium text-[12px] text-primary outline-none ".concat(styles !== null && styles !== void 0 ? styles : '', " rounded");
  return icon ? /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: classNames
  }, /*#__PURE__*/_react["default"].createElement(icon), "\xA0", text) : /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    className: classNames
  }, text);
};
var _default = exports["default"] = Button;