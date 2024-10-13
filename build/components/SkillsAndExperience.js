function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from "react";
import { experiences, skills } from "../constants";
import { layout } from "../style";
import { motion } from "framer-motion";
export const SkillIcon = ({
  icon,
  name
}) => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-white text-[30px] hover:text-teal-200"
  }, /*#__PURE__*/React.createElement(icon)), /*#__PURE__*/React.createElement("p", {
    className: "font-poppins text-dimWhite text-[12px] mt-2"
  }, name));
};
const SkillCard = props => {
  return /*#__PURE__*/React.createElement(motion.div, {
    whileInView: {
      y: [-20, 0],
      opacity: [0, 1]
    },
    transition: {
      duration: 1
    },
    className: "mt-4 mb-6 border-l border-gray-200 dark:border-gray-700 mx-4"
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative w-3 h-3 bg-gray-200 rounded-full top-5 right-[6.2px] border dark:border-gray-900 dark:bg-gray-700"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center mb-6 ml-6"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-poppins font-semibold text-[20px] text-gradient leading-[32px]"
  }, props.title)), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-3 gap-8 ml-8"
  }, props.items.map((item, index) => /*#__PURE__*/React.createElement(SkillIcon, _extends({
    key: item.id,
    index: index
  }, item)))));
};
const Content = ({
  text,
  link
}) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-[14px] text-dimWhite mt-4"
  }, text, " ", link ? /*#__PURE__*/React.createElement("a", {
    href: link,
    target: "_blank"
  }, /*#__PURE__*/React.createElement(BsLink45Deg, {
    size: "1rem",
    className: "inline hover:text-teal-200"
  })) : ""));
};
const ExperienceCard = props => {
  return /*#__PURE__*/React.createElement(motion.div, {
    whileInView: {
      y: [-20, 0],
      opacity: [0, 1]
    },
    transition: {
      duration: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row items-center mb-6"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.logo,
    alt: props.organisation,
    className: "w-[52px] h-[52px] rounded-full z-[2]"
  }), /*#__PURE__*/React.createElement("h4", {
    className: "font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-2"
  }, props.organisation)), /*#__PURE__*/React.createElement("ol", {
    className: "relative border-l border-gray-200 dark:border-gray-700 ml-6"
  }, props.positions.map((position, index) => /*#__PURE__*/React.createElement("li", {
    className: `${index === props.positions.length - 1 ? "mb-0" : "mb-4"} ml-4`
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "text-lg font-semibold text-gray-900 dark:text-white"
  }, position.title), /*#__PURE__*/React.createElement("time", {
    className: "mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
  }, position.duration), position.content.map((info, index) => /*#__PURE__*/React.createElement(Content, _extends({
    index: index
  }, info))), /*#__PURE__*/React.createElement("p", {
    className: "mb-4 text-base font-normal text-gray-500 dark:text-gray-400"
  })))));
};
const SkillsAndExperience = () => {
  return /*#__PURE__*/React.createElement("section", {
    id: "skills",
    className: "mb-12"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Skills & Experience"), /*#__PURE__*/React.createElement("div", {
    className: layout.section
    // whileInView={{ y: [-20, 0], opacity: [0, 1] }}
    // transition={{ duration: 0.5 }}
  }, /*#__PURE__*/React.createElement(motion.div, {
    className: `ml-2 mb-6 ${layout.sectionInfo}`
  }, skills.map((skill, index) => /*#__PURE__*/React.createElement(SkillCard, _extends({
    index: index
  }, skill)))), /*#__PURE__*/React.createElement(motion.div, {
    className: "flex flex-1 items-center justify-start flex-col"
  }, experiences.map((exp, index) => /*#__PURE__*/React.createElement(ExperienceCard, _extends({
    index: index
  }, exp))))));
};
export default SkillsAndExperience;