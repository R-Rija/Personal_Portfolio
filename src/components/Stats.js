"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _constants = require("../constants");
var _style = _interopRequireDefault(require("../style"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Stats = function Stats() {
  return /*#__PURE__*/React.createElement("section", {
    className: "".concat(_style["default"].flexCenter, " flex-row flex-wrap sm:mb-20 mb-6")
  }, _constants.stats.map(function (stat) {
    return /*#__PURE__*/React.createElement("div", {
      key: stat.id,
      className: "flex-1 flex justify-start items-center flex-row m-3"
    }, /*#__PURE__*/React.createElement("h4", {
      className: "font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white"
    }, stat.value), /*#__PURE__*/React.createElement("p", {
      className: "font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3"
    }, stat.title));
  }));
};
var _default = exports["default"] = Stats;