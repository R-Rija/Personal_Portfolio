function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";
const Project = props => {
  return /*#__PURE__*/React.createElement(motion.div, {
    className: "px-12 py-8 transition-colors duration-300 transform border rounded-xl hover:border-transparent group dark:border-gray-700 dark:hover:border-transparent feature-card",
    whileInView: {
      y: [-30, 0],
      opacity: [0, 1]
    },
    transition: {
      duration: 0.75
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col sm:-mx-4 sm:flex-row"
  }, /*#__PURE__*/React.createElement("img", {
    className: "flex-shrink-0 object-cover w-24 h-24 rounded-full sm:mx-4 ring-4 ring-gray-300",
    src: props.image,
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "mt-4 sm:mx-4 sm:mt-0"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-xl font-semibold font-poppins text-gray-700 capitalize md:text-2xl group-hover:text-white text-gradient"
  }, props.title), /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-dimWhite mt-3"
  }, "Tech Stack"), /*#__PURE__*/React.createElement("p", {
    className: "mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex sm:flex-row"
  }, props.stack.map((tech, index) => /*#__PURE__*/React.createElement("div", {
    key: tech.id,
    index: index,
    className: "text-dimWhite mr-5 text-[20px] hover:text-teal-200 tooltip"
  }, /*#__PURE__*/React.createElement(tech.icon), /*#__PURE__*/React.createElement("span", {
    class: "tooltiptext"
  }, tech.name))))))), /*#__PURE__*/React.createElement("p", {
    className: "mt-8 text-gray-500 dark:text-gray-300 group-hover:text-gray-300 font-poppins"
  }, props.content), /*#__PURE__*/React.createElement("div", {
    className: "flex mt-4 -mx-2"
  }, props.github ? /*#__PURE__*/React.createElement("a", {
    href: props.github,
    target: "_blank"
  }, /*#__PURE__*/React.createElement(AiFillGithub, {
    size: "2rem",
    className: "text-white mr-1 hover:text-teal-200"
  })) : "", props.link ? /*#__PURE__*/React.createElement("a", {
    href: props.link,
    target: "_blank"
  }, /*#__PURE__*/React.createElement(BsLink45Deg, {
    size: "2rem",
    className: "text-white hover:text-teal-200"
  })) : ""));
};
const Projects = () => {
  return /*#__PURE__*/React.createElement("section", {
    id: "projects"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Projects"), /*#__PURE__*/React.createElement("div", {
    className: "container px-2 py-10 mx-auto mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2"
  }, projects.map((project, index) => /*#__PURE__*/React.createElement(Project, _extends({
    key: project.id,
    index: index
  }, project))))));
};
export default Projects;