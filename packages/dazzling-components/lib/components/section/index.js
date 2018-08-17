"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid ", ";\n  padding: 4rem 0;\n  padding-bottom: 6rem;\n  text-align: center;\n  font-size: 1.6rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Section = function Section(_ref) {
  var title = _ref.title,
      children = _ref.children,
      style = _ref.style;
  return _react.default.createElement(SectionContainer, {
    style: style
  }, title && _react.default.createElement("h1", null, title), children);
};

Section.propTypes = {
  title: _propTypes.default.string,
  children: _propTypes.default.node,
  style: _propTypes.default.object
};

var SectionContainer = _styledComponents.default.section(_templateObject(), function (_ref2) {
  var borderColor = _ref2.theme.borderColor;
  return borderColor;
});

var _default = Section;
exports.default = _default;