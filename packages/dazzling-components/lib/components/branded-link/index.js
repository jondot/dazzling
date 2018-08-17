"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  font-size: 1.6rem;\n  color: ", ";\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var BrandedLink = _styledComponents.default.a(_templateObject(), function (_ref) {
  var brand = _ref.theme.brand;
  return brand;
}, function (_ref2) {
  var go = _ref2.go;
  return go && "&::after { content: ' →' }";
});

var _default = BrandedLink;
exports.default = _default;