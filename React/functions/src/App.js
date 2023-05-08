"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function App() {
  return /*#__PURE__*/_react["default"].createElement("div", {
    "class": "Volume_D"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    "class": "Volume_H"
  }, "VOLUME"), /*#__PURE__*/_react["default"].createElement("p", {
    "class": "Volume_H2"
  }, "MOTION BLUR"), /*#__PURE__*/_react["default"].createElement("p", {
    "class": "Volume_P"
  }, "Introducing support for motion blur for gas simulations and imported OpenVDB volumes."), /*#__PURE__*/_react["default"].createElement("br", null), /*#__PURE__*/_react["default"].createElement("a", {
    "class": "Volume_A",
    href: "https://wiki.blender.org/wiki/Reference/Release_Notes/3.2/Cycles#Volume_Motion_Blur"
  }, "Read More"), /*#__PURE__*/_react["default"].createElement("video", {
    "class": "Volume_V",
    muted: true,
    loop: true,
    autoplay: true,
    src: "./resources/cycles_volume.mp4",
    type: "video/mp4"
  }));
}
var _default = App;
exports["default"] = _default;