function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import styles, { layout } from "../style";
import { educationList } from "../constants";
import Lottie from "react-lottie-player";
import animationData from "../lotties/quiz-mode-teal-dark.json";
import { motion } from "framer-motion";

// lottie config
const defaultOptions = {
  loop: true,
  play: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};
const FeatureCard = ({
  icon,
  title,
  degree,
  duration,
  content1,
  content2,
  index
}) => /*#__PURE__*/React.createElement("div", {
  className: `flex flex-row p-6 rounded-[20px]
	${index === educationList.length - 1 ? "mb-0" : "mb-6"} feature-card`
}, /*#__PURE__*/React.createElement("div", {
  className: `w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`
}, /*#__PURE__*/React.createElement("img", {
  src: icon,
  alt: "icon",
  className: "w-[80%] h-[80%] object-contain"
})), /*#__PURE__*/React.createElement("div", {
  className: "flex-1 flex flex-col ml-4"
}, /*#__PURE__*/React.createElement("h4", {
  className: "font-poppins font-semibold text-white text-[20px] leading-[30px] mb-1 text-gradient"
}, title), /*#__PURE__*/React.createElement("p", {
  className: "font-poppins font-normal text-white text-[16px] leading-[30px] mb-1 "
}, degree), /*#__PURE__*/React.createElement("p", {
  className: "font-poppins font-normal text-dimWhite text-[14px] leading-[30px] mb-1"
}, duration), /*#__PURE__*/React.createElement("p", {
  className: "font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1"
}, "\u25CF ", content1), content2 && /*#__PURE__*/React.createElement("p", {
  className: "font-poppins font-normal text-dimWhite text-[16px] leading-[30px] mb-1"
}, "\u25CF ", content2)));
const Education = () => {
  return /*#__PURE__*/React.createElement("section", {
    id: "education"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Education"), /*#__PURE__*/React.createElement(motion.div, {
    className: layout.sectionReverse,
    whileInView: {
      x: [-60, 0],
      opacity: [0, 1]
    },
    transition: {
      duration: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: layout.sectionImgReverse
  }, /*#__PURE__*/React.createElement("div", {
    className: "w-[80%] h-[80%] relative z-[5]"
  }, /*#__PURE__*/React.createElement(Lottie, defaultOptions)), /*#__PURE__*/React.createElement("div", {
    className: "absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient"
  }), /*#__PURE__*/React.createElement("div", {
    className: "absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient"
  })), /*#__PURE__*/React.createElement("div", {
    className: `${layout.sectionInfo} flex-col`
  }, educationList.map((feature, index) => /*#__PURE__*/React.createElement(FeatureCard, _extends({
    key: feature.id,
    index: index
  }, feature))))));
};
export default Education;