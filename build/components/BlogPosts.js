function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from "react";
import { blogPosts } from "../constants";
import { motion } from "framer-motion";
import Button from "./Button";
const BlogPost = props => {
  return /*#__PURE__*/React.createElement(motion.div, {
    className: "overflow-hidden transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card",
    whileInView: {
      y: [-40, 0],
      opacity: [0, 1]
    },
    transition: {
      duration: 1
    }
  }, /*#__PURE__*/React.createElement("img", {
    className: "flex-shrink-0 object-cover w-full h-40",
    src: props.image,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "px-12 py-8 "
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-dimWhite mb-3"
  }, props.date), /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-semibold font-poppins text-gray-700 capitalize md:text-2xl group-hover:text-white text-gradient blog-title",
    title: props.title
  }, props.title), /*#__PURE__*/React.createElement("p", {
    className: "mt-5 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex sm:flex-row"
  }, props.tags.map((tag, index) => /*#__PURE__*/React.createElement("div", {
    key: tag.id,
    index: index,
    className: "text-dimWhite mr-5 text-sm hover:text-teal-200 p-1.5 ring-1 ring-dimWhite hover:ring-teal-200 rounded text-ellipsis whitespace-nowrap overflow-hidden",
    title: tag.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "cursor-default"
  }, tag.name))))))), /*#__PURE__*/React.createElement("div", {
    className: "mt-8"
  }, /*#__PURE__*/React.createElement("a", {
    href: props.link,
    target: "_blank"
  }, /*#__PURE__*/React.createElement(Button, {
    text: "Read more \u2192"
  })))));
};
const BlogPosts = props => {
  if (props.enabled !== true) return null;
  return /*#__PURE__*/React.createElement("section", {
    id: "blog"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Blog Posts"), /*#__PURE__*/React.createElement("div", {
    className: "container px-2 py-10 mx-auto mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-3"
  }, blogPosts.map((posts, index) => /*#__PURE__*/React.createElement(BlogPost, _extends({
    key: posts.id,
    index: index
  }, posts))))));
};
export default BlogPosts;