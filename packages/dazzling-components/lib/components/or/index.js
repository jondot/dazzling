"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  &::before {\n    content: '\u2014 ';\n  }\n  &::after {\n    content: ' \u2014';\n  }\n  margin: 0 2rem;\n  color: ", ";\n  display: inline-block;\n  font-family: Georgia, serif;\n  font-size: 1.8em;\n  font-style: italic;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Or = _styledComponents.default.div(_templateObject(), function (_ref) {
  var brandSecondary = _ref.theme.brandSecondary;
  return brandSecondary;
});

var _default = Or;
exports.default = _default;