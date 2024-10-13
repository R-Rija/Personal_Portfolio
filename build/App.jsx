import React from "react";
import { motion } from "framer-motion";
import styles from "./style";
import { Navbar, Hero, Education, SkillsAndExperience,
//ExtraCurricular,
Footer,
//OpenSource,
Projects,
//BlogPosts,
Loading, Achievements } from "./components";
const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1600);
  }, []);
  if (isLoading) {
    return /*#__PURE__*/React.createElement("div", {
      className: "bg-primary w-full overflow-hidden"
    }, /*#__PURE__*/React.createElement(Loading, null));
  } else {
    return (
      /*#__PURE__*/
      // A div to wrap the entire application
      React.createElement("div", {
        className: "bg-primary w-full overflow-hidden"
      }, /*#__PURE__*/React.createElement(motion.section, {
        initial: {
          x: -100,
          opacity: 0.25
        },
        animate: {
          x: 0,
          opacity: 1
        },
        transition: {
          duration: 1
        }
      }, /*#__PURE__*/React.createElement("div", {
        className: `${styles.paddingX} ${styles.flexCenter}`
      }, /*#__PURE__*/React.createElement("div", {
        className: `${styles.boxWidth}`
      }, /*#__PURE__*/React.createElement(Navbar, null))), /*#__PURE__*/React.createElement("div", {
        className: `bg-primary ${styles.flexStart}`
      }, /*#__PURE__*/React.createElement("div", {
        className: `${styles.boxWidth}`
      }, /*#__PURE__*/React.createElement(Hero, null))), /*#__PURE__*/React.createElement("div", {
        className: `bg-primary ${styles.flexCenter} ${styles.paddingX}`
      }, /*#__PURE__*/React.createElement("div", {
        className: `${styles.boxWidth}`
      }, /*#__PURE__*/React.createElement(SkillsAndExperience, null), /*#__PURE__*/React.createElement(Education, null))), /*#__PURE__*/React.createElement(Achievements, null), /*#__PURE__*/React.createElement("div", {
        className: `bg-primary ${styles.flexCenter} ${styles.paddingX}`
      }, /*#__PURE__*/React.createElement("div", {
        className: `${styles.boxWidth}`
      }, /*#__PURE__*/React.createElement(Projects, null))), /*#__PURE__*/React.createElement(Footer, null)))
    );
  }
};
export default App;