"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _constants = require("../constants");
var _di = require("react-icons/di");
var _vsc = require("react-icons/vsc");
var _framerMotion = require("framer-motion");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Contribution = function Contribution(props) {
  return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "flex flex-col justify-between px-6 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent",
    whileInView: {
      x: [-40, 0],
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
    className: "w-[30px] h-[30px] rounded-full mt-2"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col ml-4"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "font-poppins font-normal text-[16px] text-white my-1 leading-[24px] hover:text-teal-200",
    href: props.link,
    target: "_blank"
  }, props.title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins italic font-normal text-[14px] text-dimWhite my-1"
  }, props.organisation, "/", props.repo))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-row ".concat(props.linesAdded ? "justify-around ml-2" : "ml-10", " mt-4")
  }, /*#__PURE__*/_react["default"].createElement("a", {
    className: "font-poppins font-normal text-[12px] text-dimWhite inline",
    href: props.link,
    target: "_blank"
  }, props.type === "pull-request" ? props.status === "merged" ? /*#__PURE__*/_react["default"].createElement(_di.DiGitMerge, {
    size: "1.5rem",
    className: "text-violet-700 inline"
  }) : /*#__PURE__*/_react["default"].createElement(_di.DiGitPullRequest, {
    size: "1.5rem",
    className: "text-green-600 inline"
  }) : props.status === "open" ? /*#__PURE__*/_react["default"].createElement(_vsc.VscIssues, {
    size: "1.5rem",
    className: "text-green-600 inline"
  }) : /*#__PURE__*/_react["default"].createElement(_vsc.VscIssues, {
    size: "1.5rem",
    className: "text-violet-700 inline"
  }), " ", props.number), props.linesAdded ? /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins font-normal text-[14px]"
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-green-600"
  }, "+", props.linesAdded, " "), /*#__PURE__*/_react["default"].createElement("span", {
    className: "text-red-700"
  }, "-", props.linesDeleted)) : ""));
};
var OpenSource = function OpenSource() {
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    contributions = _useState2[0],
    setContributions = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    filterContribution = _useState4[0],
    setFilterContribution = _useState4[1];
  var _useState5 = (0, _react.useState)("All"),
    _useState6 = _slicedToArray(_useState5, 2),
    activeFilter = _useState6[0],
    setActiveFilter = _useState6[1];
  (0, _react.useEffect)(function () {
    setContributions(_constants.openSourceContributions);
    setFilterContribution(_constants.openSourceContributions);
  }, []);
  var handleContributionFilter = function handleContributionFilter(item) {
    setActiveFilter(item);
    setTimeout(function () {
      if (item === "All") {
        setFilterContribution(contributions);
      } else {
        setFilterContribution(contributions.filter(function (contribution) {
          return contribution.organisation == item;
        }));
      }
    }, 500);
  };
  return /*#__PURE__*/_react["default"].createElement("section", {
    id: "openSource"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Open Source Contributions"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "container px-2 py-5 mx-auto mb-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "flex items-center justify-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    "class": "flex items-center p-1 border border-blue-gradient dark:border-teal-400 rounded-xl"
  }, ["PublicLab", "Zulip", "All"].map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: index,
      onClick: function onClick() {
        return handleContributionFilter(item);
      },
      className: "px-2 py-2 text-sm font-medium text-white md:py-3 rounded-xl md:px-6 capitalize transition-colors duration-300 focus:outline-none hover:bg-teal-400 font-poppins ".concat(activeFilter === item ? "bg-teal-400" : "")
    }, item);
  }))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 justify-center gap-8 mt-8 md:mt-16 md:grid-cols-3 sm:grid-cols-2"
  }, filterContribution.map(function (contribution, index) {
    return /*#__PURE__*/_react["default"].createElement(Contribution, _extends({
      key: contribution.id,
      index: index
    }, contribution));
  }))));
};
var _default = exports["default"] = OpenSource;