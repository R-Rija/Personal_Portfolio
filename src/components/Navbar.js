"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _assets = require("../assets");
var _constants = require("../constants");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var Navbar = function Navbar() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    toggle = _useState2[0],
    setToggle = _useState2[1];
  return /*#__PURE__*/React.createElement("nav", {
    className: "w-full  flex justify-between items-center navbar"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home"
  }, /*#__PURE__*/React.createElement("img", {
    src: _assets.rlogo,
    alt: "Rija",
    className: "w-[100px] h-[100px]"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "list-none sm:flex hidden justify-end items-center flex-1"
  }, _constants.navLinks.map(function (nav, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: nav.id,
      className: "font-poppins\n            font-normal\n            cursor-pointer\n            text-[16px]\n            ".concat(index === _constants.navLinks.length - 1 ? "mr-0" : "mr-10", "\n            text-white hover:text-teal-200")
    }, /*#__PURE__*/React.createElement("a", {
      href: "#".concat(nav.id)
    }, nav.title));
  })), /*#__PURE__*/React.createElement("div", {
    className: "sm:hidden flex flex-1 justify-end items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: toggle ? _assets.close : _assets.menu,
    alt: "menu",
    className: "w-[28px] h-[28px] object-contain"
    // correct way to change state using the prev
    // version of the same state using a callback function
    ,
    onClick: function onClick() {
      return setToggle(function (prev) {
        return !prev;
      });
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "".concat(toggle ? "flex" : "hidden", " p-6 bg-black-gradient\n        absolute top-20 right-0 mx-4 my-2\n        min-w-[140px] rounded-xl sidebar")
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list-none flex flex-col justify-end items-center flex-1"
  }, _constants.navLinks.map(function (nav, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: nav.id,
      className: "font-poppins\n                font-normal\n                cursor-pointer\n                text-[16px]\n                ".concat(index === _constants.navLinks.length - 1 ? "mb-0" : "mb-4", "\n                text-white")
    }, /*#__PURE__*/React.createElement("a", {
      href: "#".concat(nav.id)
    }, nav.title));
  })))));
};
var _default = exports["default"] = Navbar;