"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _framerMotion = require("framer-motion");
var _style = _interopRequireDefault(require("./style"));
var _components = require("./components");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var App = function App() {
  var _React$useState = _react["default"].useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isLoading = _React$useState2[0],
    setIsLoading = _React$useState2[1];
  _react["default"].useEffect(function () {
    setTimeout(function () {
      setIsLoading(false);
    }, 1600);
  }, []);
  if (isLoading) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "bg-primary w-full overflow-hidden"
    }, /*#__PURE__*/_react["default"].createElement(_components.Loading, null));
  } else {
    return (
      /*#__PURE__*/
      // A div to wrap the entire application
      _react["default"].createElement("div", {
        className: "bg-primary w-full overflow-hidden"
      }, /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.section, {
        initial: {
          x: -100,
          opacity: 0.25
        },
        animate: {
          x: 0,
          opacity: 1
        },
        transition: {
          duration: 1
        }
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_style["default"].paddingX, " ").concat(_style["default"].flexCenter)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_style["default"].boxWidth)
      }, /*#__PURE__*/_react["default"].createElement(_components.Navbar, null))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "bg-primary ".concat(_style["default"].flexStart)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_style["default"].boxWidth)
      }, /*#__PURE__*/_react["default"].createElement(_components.Hero, null))), /*#__PURE__*/_react["default"].createElement("div", {
        className: "bg-primary ".concat(_style["default"].flexCenter, " ").concat(_style["default"].paddingX)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_style["default"].boxWidth)
      }, /*#__PURE__*/_react["default"].createElement(_components.SkillsAndExperience, null), /*#__PURE__*/_react["default"].createElement(_components.Education, null))), /*#__PURE__*/_react["default"].createElement(_components.Achievements, null), /*#__PURE__*/_react["default"].createElement("div", {
        className: "bg-primary ".concat(_style["default"].flexCenter, " ").concat(_style["default"].paddingX)
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: "".concat(_style["default"].boxWidth)
      }, /*#__PURE__*/_react["default"].createElement(_components.Projects, null))), /*#__PURE__*/_react["default"].createElement(_components.Footer, null)))
    );
  }
};
var _default = exports["default"] = App;
