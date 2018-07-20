"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Section = ({
  title,
  children
}) => _react.default.createElement(SectionContainer, null, title && _react.default.createElement("h1", null, title), children);

Section.propTypes = {
  title: _propTypes.default.string,
  children: _propTypes.default.node
};
const SectionContainer = _styledComponents.default.section`
  border-bottom: 1px solid #f0f0f0;
  padding: 4rem 0;
  padding-bottom: 6rem;
  text-align: center;
`;
var _default = Section;
exports.default = _default;