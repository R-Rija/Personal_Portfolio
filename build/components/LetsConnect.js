import styles from "../style";
import { arrowUp } from "../assets";
import { callToAction } from "../constants";
const LetsConnect = () => {
  return /*#__PURE__*/React.createElement("div", {
    className: `${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`,
    onClick: () => window.open(callToAction)
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`
  }, /*#__PURE__*/React.createElement("div", {
    className: `${styles.flexStart} flex-row`
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-medium text-[18px] leading-[23px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gradient"
  }, "Let's")), /*#__PURE__*/React.createElement("img", {
    src: arrowUp,
    alt: "arrowUp",
    className: "w-[23px] h-[23px] "
  })), /*#__PURE__*/React.createElement("div", {
    className: `${styles.flexStart} flex-row`
  }, /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-medium text-[18px] leading-[23px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-gradient"
  }, "Connect")))));
};
export default LetsConnect;