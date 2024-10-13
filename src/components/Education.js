"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _style = _interopRequireWildcard(require("../style"));
var _constants = require("../constants");
var _reactLottiePlayer = _interopRequireDefault(require("react-lottie-player"));
var _quizModeTealDark = _interopRequireDefault(require("../lotties/quiz-mode-teal-dark.json"));
var _framerMotion = require("framer-motion");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// lottie config
var defaultOptions = {
  loop: true,
  play: true,
  animationData: _quizModeTealDark["default"],
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
var FeatureCard = function FeatureCard(_ref) {
  var icon = _ref.icon,
    title = _ref.title,
    degree = _ref.degree,
    duration = _ref.duration,
    content1 = _ref.content1,
    content2 = _ref.content2,
    index = _ref.index;
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row p-6 rounded-[20px]\n\t".concat(index === _constants.educationList.length - 1 ? "mb-0" : "mb-6", " feature-card")
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[64px] h-[64px] rounded-full ".concat(_style["default"].flexCenter, " bg-dimBlue")
  }, /*#__PURE__*/React.createElement("img", {
    src: icon,
    alt: "icon",
    className: "w-[80%] h-[80%] object-contain"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex-1 flex flex-col ml-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-poppins font-semibold text-white text-[20px] leading-[30px] mb-1 text-gradient"
  }, title), /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-white text-[16px] leading-[30px] mb-1 "
  }, degree), /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-dimWhite text-[14px] leading-[30px] mb-1"
  }, duration), /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1"
  }, "\u25CF ", content1), content2 && /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1"
  }, "\u25CF ", content2)));
};
var Education = function Education() {
  return /*#__PURE__*/React.createElement("section", {
    id: "education"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Education"), /*#__PURE__*/React.createElement(_framerMotion.motion.div, {
    className: _style.layout.sectionReverse,
    whileInView: {
      x: [-60, 0],
      opacity: [0, 1]
    },
    transition: {
      duration: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: _style.layout.sectionImgReverse
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[80%] h-[80%] relative z-[5]"
  }, /*#__PURE__*/React.createElement(_reactLottiePlayer["default"], defaultOptions)), /*#__PURE__*/React.createElement("div", {
    className: "absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"
  })), /*#__PURE__*/React.createElement("div", {
    className: "".concat(_style.layout.sectionInfo, " flex-col")
  }, _constants.educationList.map(function (feature, index) {
    return /*#__PURE__*/React.createElement(FeatureCard, _extends({
      key: feature.id,
      index: index
    }, feature));
  }))));
};
var _default = exports["default"] = Education;