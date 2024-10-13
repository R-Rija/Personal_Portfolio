import { stats } from "../constants";
import styles from "../style";
const Stats = () => /*#__PURE__*/React.createElement("section", {
  className: `${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`
}, stats.map(stat => /*#__PURE__*/React.createElement("div", {
  key: stat.id,
  className: `flex-1 flex justify-start items-center flex-row m-3`
}, /*#__PURE__*/React.createElement("h4", {
  className: "font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white"
}, stat.value), /*#__PURE__*/React.createElement("p", {
  className: "font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3"
}, stat.title))));
export default Stats;