function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useState, useEffect } from "react";
import { BsLink45Deg } from "react-icons/bs";
import { achievements } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";
import { TiNews } from "react-icons/ti";
import styles from "../style";
const Achievements = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMediumScreen, setIsMediumScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleMediaQueryChange = e => setIsMediumScreen(e.matches);
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  const handleNext = () => {
    if (currentIndex < achievements.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  const isNextDisabled = isMediumScreen ? currentIndex === Math.floor((achievements.length - 1) / 3) : currentIndex === achievements.length - 1;
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-primary overflow-hidden text-white mt-5 md:mt-10 relative",
    id: "achievements"
  }, /*#__PURE__*/React.createElement("div", {
    className: `bg-primary ${styles.flexCenter} ${styles.paddingX}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.boxWidth}`
  }, /*#__PURE__*/React.createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Achievements"))), /*#__PURE__*/React.createElement("div", {
    className: "absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full blue__gradient bottom-40"
  }), /*#__PURE__*/React.createElement("div", {
    className: `bg-primary ${styles.flexCenter} ${styles.paddingX}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.boxWidth} overflow-hidden`
  }, /*#__PURE__*/React.createElement("div", {
    className: "my-20"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex transition-transform duration-500 ease-in-out",
    style: {
      transform: `translateX(-${currentIndex / achievements.length * 100}%)`,
      width: `${achievements.length * 100}%`
    }
  }, achievements.map((achievement, index) => /*#__PURE__*/React.createElement(AchievementCard, _extends({
    key: index
  }, achievement)))), /*#__PURE__*/React.createElement("div", {
    className: "flex justify-end mb-4"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: handlePrev,
    disabled: currentIndex === 0,
    className: "p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2"
  }, "<"), /*#__PURE__*/React.createElement("button", {
    onClick: handleNext,
    disabled: isNextDisabled,
    className: "p-2 bg-gray-700 rounded-full disabled:opacity-50 mx-2"
  }, ">"))))));
};
const AchievementCard = props => {
  return /*#__PURE__*/React.createElement("div", {
    className: "flex-shrink-0 flex flex-col md:w-[400px] w-[320px] justify-around px-6 py-4 rounded-[20px] md:mr-10 mr-6 mr-0 my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent"
  }, /*#__PURE__*/React.createElement("img", {
    src: props.icon,
    alt: props.event,
    className: "w-[45px] h-[45px] rounded-full mt-1 mb-1"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-end mt-4 mb-1"
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-xl text-white leading-[24px] mb-2"
  }, props.event), /*#__PURE__*/React.createElement("p", {
    className: "font-poppins italic font-normal text-lg text-gradient mb-3"
  }, props.position), props.content1 && /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-dimWhite text-sm mb-1"
  }, "\uD83D\uDE80 ", props.content1), props.content2 && /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-dimWhite text-sm mb-1"
  }, "\u26A1 ", props.content2), props.content3 && /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-dimWhite text-sm mb-4"
  }, "\uD83D\uDD25 ", props.content3)), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row mb-2 font-poppins font-normal text-dimWhite"
  }, props.article && /*#__PURE__*/React.createElement("a", {
    className: "inline-flex items-center mr-2 hover:text-teal-200",
    href: props.article,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(TiNews, {
    size: "1.5rem",
    className: "inline"
  })), props.youtube && /*#__PURE__*/React.createElement("a", {
    className: "inline-flex items-center mr-2 hover:text-teal-200",
    href: props.youtube,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(FaYoutube, {
    size: "1.5rem",
    className: "inline"
  })), props.github && /*#__PURE__*/React.createElement("a", {
    className: "inline-flex items-center mr-2 hover:text-teal-200",
    href: props.github,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(AiFillGithub, {
    size: "1.5rem",
    className: "inline"
  })), props.project && /*#__PURE__*/React.createElement("a", {
    className: " inline-flex items-center hover:text-teal-200",
    href: props.project,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /*#__PURE__*/React.createElement(BsLink45Deg, {
    size: "1.5rem",
    className: "inline"
  }))));
};
export default Achievements;