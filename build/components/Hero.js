import styles from "../style";
import LetsConnect from "./LetsConnect";
import Lottie from "react-lottie-player";
import animationData from "../lotties/person-coding.json";
import { aboutMe } from "../constants";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const Hero = () => {
  return /*#__PURE__*/React.createElement("section", {
    id: "home",
    className: `flex md:flex-row flex-col ${styles.paddingY}`
  }, /*#__PURE__*/React.createElement("div", {
    className: `flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-between items-center w-full text-white"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[80px] leading-[80px]"
  }, "Hi there!", /*#__PURE__*/React.createElement("br", {
    className: "sm:block hidden"
  }), " I am"), /*#__PURE__*/React.createElement("div", {
    className: "ss:flex hidden md:mr-4 mr-0"
  }, /*#__PURE__*/React.createElement(LetsConnect, null))), /*#__PURE__*/React.createElement("h1", {
    className: "font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[80px] leading-[80px] w-full"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gradient"
  }, aboutMe.name)), /*#__PURE__*/React.createElement("p", {
    className: `${styles.paragraph} max-w-[470px] mt-5`
  }, aboutMe.intro)), /*#__PURE__*/React.createElement("div", {
    className: `flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative z-index-[5] h-[90%] w-[85%]"
  }, /*#__PURE__*/React.createElement(Lottie, defaultOptions)), /*#__PURE__*/React.createElement("div", {
    className: "absolute z-[1] w-[50%] h-[50%] rounded-full bottom-40 white__gradient"
  })), /*#__PURE__*/React.createElement("div", {
    className: `ss:hidden ${styles.flexCenter}`
  }, /*#__PURE__*/React.createElement(LetsConnect, null)));
};
export default Hero;