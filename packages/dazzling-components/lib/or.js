"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Or = _styledComponents.default.div`
  &::before {
    content: '— ';
  }
  &::after {
    content: ' —';
  }
  margin: 0 2rem;
  color: ${({
  theme: {
    brandSecondary
  }
}) => brandSecondary};
  display: inline-block;
  font-family: Georgia, serif;
  font-size: 1.8em;
  font-style: italic;
`;
var _default = Or;
exports.default = _default;