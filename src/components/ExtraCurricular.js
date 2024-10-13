"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _style = _interopRequireDefault(require("../style"));
var _constants = require("../constants");
var _bs = require("react-icons/bs");
var _framerMotion = require("framer-motion");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Content = function Content(_ref) {
  var text = _ref.text,
    link = _ref.link;
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins font-normal text-[14px] text-dimWhite my-4 leading-[32px]"
  }, "\u25CF ", text, " ", link ? /*#__PURE__*/_react["default"].createElement("a", {
    href: link,
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_bs.BsLink45Deg, {
    size: "1rem",
    className: "inline hover:text-teal-200"
  })) : ""));
};
var ExtraCurricularCard = function ExtraCurricularCard(props) {
  return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "flex flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card",
    whileInView: {
      y: [-30, 0],
      opacity: [0, 1]
    },
    transition: {
      duration: 1
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    src: props.logo,
    alt: props.organisation,
    className: "w-[52px] h-[52px] rounded-full"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col ml-4"
  }, /*#__PURE__*/_react["default"].createElement("h4", {
    className: "font-poppins font-semibold text-[20px] text-gradient leading-[32px]"
  }, props.organisation), /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins font-normal text-[16px] text-white my-1 leading-[24px]"
  }, props.title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins italic font-normal text-[14px] text-dimWhite my-1"
  }, props.duration))), /*#__PURE__*/_react["default"].createElement("div", null, props.content.map(function (info) {
    return /*#__PURE__*/_react["default"].createElement(Content, info);
  })));
};
var ExtraCurricular = function ExtraCurricular() {
  return /*#__PURE__*/_react["default"].createElement("section", {
    id: "extraCurricular"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Extra Curricular"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "".concat(_style["default"].flexCenter, " flex-col relative mb-4 mt-8")
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 md:mt-16 md:grid-cols-3"
  }, _constants.extraCurricular.map(function (card) {
    return /*#__PURE__*/_react["default"].createElement(ExtraCurricularCard, _extends({
      key: card.id
    }, card));
  }))));
};
var _default = exports["default"] = ExtraCurricular;