"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("./Button"));
var _constants = require("../constants");
var _assets = require("../assets");
var _style = require("../style");
var _ai = require("react-icons/ai");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Footer = function Footer() {
  return /*#__PURE__*/_react["default"].createElement("footer", {
    id: "contactMe",
    className: "bg-gray-900 sm:px-16 px-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_style.layout.sectionReverse, " xl:max-w-[1280px] w-full mx-auto gap-y-4 ")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: " ".concat(_style.layout.sectionInfo)
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    className: "text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
  }, _constants.aboutMe.name), /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5"
  }, _constants.aboutMe.tagLine), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row mt-4"
  }, _constants.socialMedia.map(function (social, index) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      href: social.link,
      target: "_blank",
      key: social.id,
      index: index,
      className: "text-white mr-5 text-[25px] hover:text-teal-200"
    }, /*#__PURE__*/_react["default"].createElement(social.icon));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-2"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: _constants.resumeLink,
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    styles: "mt-10 mr-3",
    text: "Resume",
    icon: "AiFillGithub"
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4"
  }, /*#__PURE__*/_react["default"].createElement("p", null, "Made with \uD83D\uDC99 by Rija")));
};
var _default = exports["default"] = Footer;