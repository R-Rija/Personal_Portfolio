"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _style = _interopRequireDefault(require("../style"));
var _framerMotion = require("framer-motion");
var _assets = require("../assets");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Loading = function Loading(_ref) {
  var isLoading = _ref.isLoading;
  return /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    id: "loading",
    className: "w-[100vw] h-[100vh] flex \"".concat(_style["default"].flexCenter),
    initial: {
      scale: 1.0,
      opacity: 0.25
    },
    animate: {
      scale: 2.0,
      opacity: 0.75
    },
    transition: {
      yoyo: Infinity,
      duration: 1.0,
      ease: "easeIn"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets.rlogo,
    alt: "Rija",
    className: "w-[150px] h-[150px]"
  }));
};
var _default = exports["default"] = Loading;