"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _constants = require("../constants");
var _framerMotion = require("framer-motion");
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
var BlogPost = function BlogPost(props) {
  return /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    className: "overflow-hidden transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card",
    whileInView: {
      y: [-40, 0],
      opacity: [0, 1]
    },
    transition: {
      duration: 1
    }
  }, /*#__PURE__*/_react["default"].createElement("img", {
    className: "flex-shrink-0 object-cover w-full h-40",
    src: props.image,
    alt: ""
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-12 py-8 "
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("p", {
    className: "font-poppins font-normal text-dimWhite mb-3"
  }, props.date), /*#__PURE__*/_react["default"].createElement("h1", {
    className: "text-xl font-semibold font-poppins text-gray-700 capitalize md:text-2xl group-hover:text-white text-gradient blog-title",
    title: props.title
  }, props.title), /*#__PURE__*/_react["default"].createElement("p", {
    className: "mt-5 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex sm:flex-row"
  }, props.tags.map(function (tag, index) {
    return /*#__PURE__*/_react["default"].createElement("div", {
      key: tag.id,
      index: index,
      className: "text-dimWhite mr-5 text-sm hover:text-teal-200 p-1.5 ring-1 ring-dimWhite hover:ring-teal-200 rounded text-ellipsis whitespace-nowrap overflow-hidden",
      title: tag.name
    }, /*#__PURE__*/_react["default"].createElement("span", {
      className: "cursor-default"
    }, tag.name));
  }))))), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/_react["default"].createElement("a", {
    href: props.link,
    target: "_blank"
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    text: "Read more \u2192"
  })))));
};
var BlogPosts = function BlogPosts(props) {
  if (props.enabled !== true) return null;
  return /*#__PURE__*/_react["default"].createElement("section", {
    id: "blog"
  }, /*#__PURE__*/_react["default"].createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Blog Posts"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "container px-2 py-10 mx-auto mb-8"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3"
  }, _constants.blogPosts.map(function (posts, index) {
    return /*#__PURE__*/_react["default"].createElement(BlogPost, _extends({
      key: posts.id,
      index: index
    }, posts));
  }))));
};
var _default = exports["default"] = BlogPosts;