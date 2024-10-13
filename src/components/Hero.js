"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _style = _interopRequireDefault(require("../style"));
var _LetsConnect = _interopRequireDefault(require("./LetsConnect"));
var _reactLottiePlayer = _interopRequireDefault(require("react-lottie-player"));
var _personCoding = _interopRequireDefault(require("../lotties/person-coding.json"));
var _constants = require("../constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// lottie config
var defaultOptions = {
  loop: true,
  play: true,
  animationData: _personCoding["default"],
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
var Hero = function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: "flex md:flex-row flex-col ".concat(_style["default"].paddingY)
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex-1 ".concat(_style["default"].flexStart, " flex-col xl:px-0 sm:px-16 px-6")
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between items-center w-full text-white"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]"
  }, "Hi there!", /*#__PURE__*/React.createElement("br", {
    className: "sm:block hidden"
  }), " I am"), /*#__PURE__*/React.createElement("div", {
    className: "ss:flex hidden md:mr-4 mr-0"
  }, /*#__PURE__*/React.createElement(_LetsConnect["default"], null))), /*#__PURE__*/React.createElement("h1", {
    className: "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gradient"
  }, _constants.aboutMe.name)), /*#__PURE__*/React.createElement("p", {
    className: "".concat(_style["default"].paragraph, " max-w-[470px] mt-5")
  }, _constants.aboutMe.intro)), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex ".concat(_style["default"].flexCenter, " md:my-0 my-10 relative")
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative z-index-[5] h-[90%] w-[85%]"
  }, /*#__PURE__*/React.createElement(_reactLottiePlayer["default"], defaultOptions)), /*#__PURE__*/React.createElement("div", {
    className: "absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"
  })), /*#__PURE__*/React.createElement("div", {
    className: "ss:hidden ".concat(_style["default"].flexCenter)
  }, /*#__PURE__*/React.createElement(_LetsConnect["default"], null)));
};
var _default = exports["default"] = Hero;