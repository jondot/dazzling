"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Subtitle = _styledComponents.default.h2`
  color: ${({
  theme: {
    brandSecondary
  }
}) => brandSecondary};
  font-weight: 300;
  margin: 2rem 0;
`;
var _default = Subtitle;
exports.default = _default;