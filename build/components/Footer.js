import React from "react";
import Button from "./Button";
import { socialMedia, aboutMe } from "../constants";
import { profilePic } from "../assets";
import { layout } from "../style";
import { resumeLink, repoLink } from "../constants";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => /*#__PURE__*/React.createElement("footer", {
  id: "contactMe",
  className: "bg-gray-900 sm:px-16 px-6"
}, /*#__PURE__*/React.createElement("div", {
  className: `${layout.sectionReverse} xl:max-w-[1280px] w-full mx-auto gap-y-4 `
}, /*#__PURE__*/React.createElement("div", {
  className: ` ${layout.sectionInfo}`
}, /*#__PURE__*/React.createElement("h2", {
  className: "text-xl font-bold text-gray-800 font-poppins dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
}, aboutMe.name), /*#__PURE__*/React.createElement("p", {
  className: `font-poppins font-normal text-dimWhite text-[16px] leading-[30.8px] max-w-[470px] mt-5`
}, aboutMe.tagLine), /*#__PURE__*/React.createElement("div", {
  className: "flex flex-row mt-4"
}, socialMedia.map((social, index) => /*#__PURE__*/React.createElement("a", {
  href: social.link,
  target: "_blank",
  key: social.id,
  index: index,
  className: "text-white mr-5 text-[25px] hover:text-teal-200"
}, /*#__PURE__*/React.createElement(social.icon)))), /*#__PURE__*/React.createElement("div", {
  className: "grid grid-cols-2"
}, /*#__PURE__*/React.createElement("a", {
  href: resumeLink,
  target: "_blank"
}, /*#__PURE__*/React.createElement(Button, {
  styles: "mt-10 mr-3",
  text: "Resume",
  icon: "AiFillGithub"
}))))), /*#__PURE__*/React.createElement("div", {
  className: "text-center font-poppins font-normal text-dimWhite text-xs sm:text-sm pb-4"
}, /*#__PURE__*/React.createElement("p", null, "Made with \uD83D\uDC99 by Rija")));
export default Footer;