"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _constants = require("../constants");
var _ai = require("react-icons/ai");
var _bs = require("react-icons/bs");
var _framerMotion = require("framer-motion");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var Project = function Project(props) {
  return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card",
    whileInView: {
      y: [-30, 0],
      opacity: [0, 1]
    },
    transition: {
      duration: 0.75
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col sm:-mx-4 sm:flex-row"
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300",
    src: props.image,
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-4 sm:mx-4 sm:mt-0"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-xl font-semibold font-poppins text-gray-700 capitalize md:text-2xl group-hover:text-white text-gradient"
  }, props.title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins font-normal text-dimWhite mt-3"
  }, "Tech Stack"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex sm:flex-row"
  }, props.stack.map(function (tech, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: tech.id,
      index: index,
      className: "text-dimWhite mr-5 text-[20px] hover:text-teal-200 tooltip"
    }, /*#__PURE__*/_react["default"].createElement(tech.icon), /*#__PURE__*/_react["default"].createElement("span", {
      "class": "tooltiptext"
    }, tech.name));
  }))))), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-8 text-gray-500 dark:text-gray-300 group-hover:text-gray-300 font-poppins"
  }, props.content), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex mt-4 -mx-2"
  }, props.github ? /*#__PURE__*/_react["default"].createElement("a", {
    href: props.github,
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_ai.AiFillGithub, {
    size: "2rem",
    className: "text-white mr-1 hover:text-teal-200"
  })) : "", props.link ? /*#__PURE__*/_react["default"].createElement("a", {
    href: props.link,
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_bs.BsLink45Deg, {
    size: "2rem",
    className: "text-white hover:text-teal-200"
  })) : ""));
};
var Projects = function Projects() {
  return /*#__PURE__*/_react["default"].createElement("section", {
    id: "projects"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Projects"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "container px-2 py-10 mx-auto mb-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2"
  }, _constants.projects.map(function (project, index) {
    return /*#__PURE__*/_react["default"].createElement(Project, _extends({
      key: project.id,
      index: index
    }, project));
  }))));
};
var _default = exports["default"] = Projects;