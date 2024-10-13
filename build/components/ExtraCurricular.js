function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React from "react";
import styles from "../style";
import { extraCurricular } from "../constants";
import { BsLink45Deg } from "react-icons/bs";
import { motion } from "framer-motion";
const Content = ({
  text,
  link
}) => {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-[14px] text-dimWhite my-4 leading-[32px]"
  }, "\u25CF ", text, " ", link ? /*#__PURE__*/React.createElement("a", {
    href: link,
    target: "_blank"
  }, /*#__PURE__*/React.createElement(BsLink45Deg, {
    size: "1rem",
    className: "inline hover:text-teal-200"
  })) : ""));
};
const ExtraCurricularCard = props => {
  return /*#__PURE__*/React.createElement(motion.div, {
    className: "flex flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card",
    whileInView: {
      y: [-30, 0],
      opacity: [0, 1]
    },
    transition: {
      duration: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.logo,
    alt: props.organisation,
    className: "w-[52px] h-[52px] rounded-full"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col ml-4"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "font-poppins font-semibold text-[20px] text-gradient leading-[32px]"
  }, props.organisation), /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-[16px] text-white my-1 leading-[24px]"
  }, props.title), /*#__PURE__*/React.createElement("p", {
    className: "font-poppins italic font-normal text-[14px] text-dimWhite my-1"
  }, props.duration))), /*#__PURE__*/React.createElement("div", null, props.content.map(info => {
    return /*#__PURE__*/React.createElement(Content, info);
  })));
};
const ExtraCurricular = () => {
  return /*#__PURE__*/React.createElement("section", {
    id: "extraCurricular"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Extra Curricular"), /*#__PURE__*/React.createElement("div", {
    className: `${styles.flexCenter} flex-col relative mb-4 mt-8`
  }, /*#__PURE__*/React.createElement("div", {
    className: "absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40"
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8 md:mt-16 md:grid-cols-3"
  }, extraCurricular.map(card => /*#__PURE__*/React.createElement(ExtraCurricularCard, _extends({
    key: card.id
  }, card))))));
};
export default ExtraCurricular;