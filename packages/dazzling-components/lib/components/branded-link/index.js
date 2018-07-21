"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const BrandedLink = _styledComponents.default.a`
  font-size: 1.6rem;
  color: ${({
  theme: {
    brand
  }
}) => brand};
  ${({
  go
}) => go && "&::after { content: ' →' }"};
`;
var _default = BrandedLink;
exports.default = _default;