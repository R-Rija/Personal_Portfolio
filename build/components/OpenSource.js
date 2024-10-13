function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
import React, { useState, useEffect } from "react";
import { openSourceContributions } from "../constants";
import { DiGitMerge, DiGitPullRequest } from "react-icons/di";
import { VscIssues } from "react-icons/vsc";
import { motion } from "framer-motion";
const Contribution = props => {
  return /*#__PURE__*/React.createElement(motion.div, {
    className: "flex flex-col justify-between px-6 py-6 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 transition-colors duration-300 transform border hover:border-transparent dark:border-gray-700 dark:hover:border-transparent",
    whileInView: {
      x: [-40, 0],
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
    className: "w-[30px] h-[30px] rounded-full mt-2"
  }), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col ml-4"
  }, /*#__PURE__*/React.createElement("a", {
    className: "font-poppins font-normal text-[16px] text-white my-1 leading-[24px] hover:text-teal-200",
    href: props.link,
    target: "_blank"
  }, props.title), /*#__PURE__*/React.createElement("p", {
    className: "font-poppins italic font-normal text-[14px] text-dimWhite my-1"
  }, props.organisation, "/", props.repo))), /*#__PURE__*/React.createElement("div", {
    className: `flex flex-row ${props.linesAdded ? "justify-around ml-2" : "ml-10"} mt-4`
  }, /*#__PURE__*/React.createElement("a", {
    className: "font-poppins font-normal text-[12px] text-dimWhite inline",
    href: props.link,
    target: "_blank"
  }, props.type === "pull-request" ? props.status === "merged" ? /*#__PURE__*/React.createElement(DiGitMerge, {
    size: "1.5rem",
    className: "text-violet-700 inline"
  }) : /*#__PURE__*/React.createElement(DiGitPullRequest, {
    size: "1.5rem",
    className: "text-green-600 inline"
  }) : props.status === "open" ? /*#__PURE__*/React.createElement(VscIssues, {
    size: "1.5rem",
    className: "text-green-600 inline"
  }) : /*#__PURE__*/React.createElement(VscIssues, {
    size: "1.5rem",
    className: "text-violet-700 inline"
  }), " ", props.number), props.linesAdded ? /*#__PURE__*/React.createElement("p", {
    className: "font-poppins font-normal text-[14px]"
  }, /*#__PURE__*/React.createElement("span", {
    className: "text-green-600"
  }, "+", props.linesAdded, " "), /*#__PURE__*/React.createElement("span", {
    className: "text-red-700"
  }, "-", props.linesDeleted)) : ""));
};
const OpenSource = () => {
  const [contributions, setContributions] = useState([]);
  const [filterContribution, setFilterContribution] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  useEffect(() => {
    setContributions(openSourceContributions);
    setFilterContribution(openSourceContributions);
  }, []);
  const handleContributionFilter = item => {
    setActiveFilter(item);
    setTimeout(() => {
      if (item === "All") {
        setFilterContribution(contributions);
      } else {
        setFilterContribution(contributions.filter(contribution => contribution.organisation == item));
      }
    }, 500);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "openSource"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]"
  }, "Open Source Contributions"), /*#__PURE__*/React.createElement("div", {
    className: "container px-2 py-5 mx-auto mb-8"
  }, /*#__PURE__*/React.createElement("div", {
    class: "flex items-center justify-center"
  }, /*#__PURE__*/React.createElement("div", {
    class: "flex items-center p-1 border border-blue-gradient dark:border-teal-400 rounded-xl"
  }, ["PublicLab", "Zulip", "All"].map((item, index) => /*#__PURE__*/React.createElement("button", {
    key: index,
    onClick: () => handleContributionFilter(item),
    className: `px-2 py-2 text-sm font-medium text-white md:py-3 rounded-xl md:px-6 capitalize transition-colors duration-300 focus:outline-none hover:bg-teal-400 font-poppins ${activeFilter === item ? "bg-teal-400" : ""}`
  }, item)))), /*#__PURE__*/React.createElement("div", {
    className: "grid grid-cols-1 justify-center gap-8 mt-8 md:mt-16 md:grid-cols-3 sm:grid-cols-2"
  }, filterContribution.map((contribution, index) => /*#__PURE__*/React.createElement(Contribution, _extends({
    key: contribution.id,
    index: index
  }, contribution))))));
};
export default OpenSource;