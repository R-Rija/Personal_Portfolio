"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _style = _interopRequireDefault(require("../style"));
var _assets = require("../assets");
var _constants = require("../constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var LetsConnect = function LetsConnect() {
  return /*#__PURE__*/React.createElement("div", {
    className: "".concat(_style["default"].flexCenter, " w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer"),
    onClick: function onClick() {
      return window.open(_constants.callToAction);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_style["default"].flexCenter, " flex-col bg-primary w-[100%] h-[100%] rounded-full")
  }, /*#__PURE__*/React.createElement("div", {
    className: "".concat(_style["default"].flexStart, " flex-row")
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-medium text-[18px] leading-[23px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gradient"
  }, "Let's")), /*#__PURE__*/React.createElement("img", {
    src: _assets.arrowUp,
    alt: "arrowUp",
    className: "w-[23px] h-[23px] "
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_style["default"].flexStart, " flex-row")
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-medium text-[18px] leading-[23px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gradient"
  }, "Connect")))));
};
var _default = exports["default"] = LetsConnect;