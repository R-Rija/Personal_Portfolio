import styles from "../style";
import { motion } from "framer-motion";
import { parthmittal, rlogo } from "../assets";
const Loading = ({
  isLoading
}) => {
  return /*#__PURE__*/React.createElement(motion.div, {
    id: "loading",
    className: `w-[100vw] h-[100vh] flex "${styles.flexCenter}`,
    initial: {
      scale: 1.0,
      opacity: 0.25
    },
    animate: {
      scale: 2.0,
      opacity: 0.75
    },
    transition: {
      yoyo: Infinity,
      duration: 1.0,
      ease: "easeIn"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: rlogo,
    alt: "Rija",
    className: "w-[150px] h-[150px]"
  }));
};
export default Loading;