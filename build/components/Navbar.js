import { useState } from "react";
import { close, parthmittal, menu, rlogo } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return /*#__PURE__*/React.createElement("nav", {
    className: "w-full  flex justify-between items-center navbar"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#home"
  }, /*#__PURE__*/React.createElement("img", {
    src: rlogo,
    alt: "Rija",
    className: "w-[100px] h-[100px]"
  })), /*#__PURE__*/React.createElement("ul", {
    className: "list-none sm:flex hidden justify-end items-center flex-1"
  }, navLinks.map((nav, index) => /*#__PURE__*/React.createElement("li", {
    key: nav.id,
    className: `font-poppins
            font-normal
            cursor-pointer
            text-[16px]
            ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
            text-white hover:text-teal-200`
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${nav.id}`
  }, nav.title)))), /*#__PURE__*/React.createElement("div", {
    className: "sm:hidden flex flex-1 justify-end items-center"
  }, /*#__PURE__*/React.createElement("img", {
    src: toggle ? close : menu,
    alt: "menu",
    className: "w-[28px] h-[28px] object-contain"
    // correct way to change state using the prev
    // version of the same state using a callback function
    ,
    onClick: () => setToggle(prev => !prev)
  }), /*#__PURE__*/React.createElement("div", {
    className: `${toggle ? "flex" : "hidden"} p-6 bg-black-gradient
        absolute top-20 right-0 mx-4 my-2
        min-w-[140px] rounded-xl sidebar`
  }, /*#__PURE__*/React.createElement("ul", {
    className: "list-none flex flex-col justify-end items-center flex-1"
  }, navLinks.map((nav, index) => /*#__PURE__*/React.createElement("li", {
    key: nav.id,
    className: `font-poppins
                font-normal
                cursor-pointer
                text-[16px]
                ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
                text-white`
  }, /*#__PURE__*/React.createElement("a", {
    href: `#${nav.id}`
  }, nav.title)))))));
};
export default Navbar;