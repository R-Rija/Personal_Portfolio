"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _bs = require("react-icons/bs");
var _constants = require("../constants");
var _ai = require("react-icons/ai");
var _fa = require("react-icons/fa");
var _ti = require("react-icons/ti");
var _style = _interopRequireDefault(require("../style"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Achievements = function Achievements() {
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    currentIndex = _useState2[0],
    setCurrentIndex = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isMediumScreen = _useState4[0],
    setIsMediumScreen = _useState4[1];
  (0, _react.useEffect)(function () {
    var mediaQuery = window.matchMedia("(min-width: 768px)");
    var handleMediaQueryChange = function handleMediaQueryChange(e) {
      return setIsMediumScreen(e.matches);
    };
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return function () {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  var handleNext = function handleNext() {
    if (currentIndex < _constants.achievements.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  var handlePrev = function handlePrev() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  var isNextDisabled = isMediumScreen ? currentIndex === Math.floor((_constants.achievements.length - 1) / 3) : currentIndex === _constants.achievements.length - 1;
  return /*#__PURE__*/_react["default"].createElement("section", {
    className: "bg-primary overflow-hidden text-white mt-5 md:mt-10 relative",
    id: "achievements"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-primary ".concat(_style["default"].flexCenter, " ").concat(_style["default"].paddingX)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_style["default"].boxWidth)
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Achievements"))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "bg-primary ".concat(_style["default"].flexCenter, " ").concat(_style["default"].paddingX)
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_style["default"].boxWidth, " overflow-hidden")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "my-20"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex transition-transform duration-500 ease-in-out",
    style: {
      transform: "translateX(-".concat(currentIndex / _constants.achievements.length * 100, "%)"),
      width: "".concat(_constants.achievements.length * 100, "%")
    }
  }, _constants.achievements.map(function (achievement, index) {
    return /*#__PURE__*/_react["default"].createElement(AchievementCard, _extends({
      key: index
    }, achievement));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-end mb-4"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handlePrev,
    disabled: currentIndex === 0,
    className: "p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2"
  }, "<"), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleNext,
    disabled: isNextDisabled,
    className: "p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2"
  }, ">"))))));
};
var AchievementCard = function AchievementCard(props) {
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex-shrink-0 flex flex-col md:w-[400px] w-[320px] justify-around px-6 py-4 rounded-[20px] md:mr-10 mr-6 mr-0 my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: props.icon,
    alt: props.event,
    className: "w-[45px] h-[45px] rounded-full mt-1 mb-1"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col justify-end mt-4 mb-1"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins font-normal text-xl text-white leading-[24px] mb-2"
  }, props.event), /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins italic font-normal text-lg text-gradient mb-3"
  }, props.position), props.content1 && /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins font-normal text-dimWhite text-sm mb-1"
  }, "\uD83D\uDE80 ", props.content1), props.content2 && /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins font-normal text-dimWhite text-sm mb-1"
  }, "\u26A1 ", props.content2), props.content3 && /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins font-normal text-dimWhite text-sm mb-4"
  }, "\uD83D\uDD25 ", props.content3)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row mb-2 font-poppins font-normal text-dimWhite"
  }, props.article && /*#__PURE__*/_react["default"].createElement("a", {
    className: "inline-flex items-center mr-2 hover:text-teal-200",
    href: props.article,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_ti.TiNews, {
    size: "1.5rem",
    className: "inline"
  })), props.youtube && /*#__PURE__*/_react["default"].createElement("a", {
    className: "inline-flex items-center mr-2 hover:text-teal-200",
    href: props.youtube,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_fa.FaYoutube, {
    size: "1.5rem",
    className: "inline"
  })), props.github && /*#__PURE__*/_react["default"].createElement("a", {
    className: "inline-flex items-center mr-2 hover:text-teal-200",
    href: props.github,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_ai.AiFillGithub, {
    size: "1.5rem",
    className: "inline"
  })), props.project && /*#__PURE__*/_react["default"].createElement("a", {
    className: " inline-flex items-center hover:text-teal-200",
    href: props.project,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/_react["default"].createElement(_bs.BsLink45Deg, {
    size: "1.5rem",
    className: "inline"
  }))));
};
var _default = exports["default"] = Achievements;