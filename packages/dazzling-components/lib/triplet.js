"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsbyLink = _interopRequireDefault(require("gatsby-link"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Feature = _styledComponents.default.div`
  flex: 0.333333;
  text-align: center;
  padding: 1rem;
`;
const TripletContainer = _styledComponents.default.div`
  margin: 0 auto;
  display: flex;
  max-width: 1100px;
  h2 {
  }
  @media screen and (max-width: 600px) {
    display: block;
  }
`;
const Subtitle = _styledComponents.default.h2`
  color: ${({
  theme: {
    brandSecondary
  }
}) => brandSecondary};
  font-weight: 300;
  margin: 2rem 0;
`;

const maybeLink = (link, Content) => {
  if (link) {
    return _react.default.createElement(_gatsbyLink.default, {
      to: link
    }, _react.default.createElement(Content, null));
  }

  return _react.default.createElement(Content, null);
};

var _default = ({
  features
}) => _react.default.createElement(TripletContainer, null, features.map(({
  image,
  title,
  content,
  link,
  topTitle,
  width
}) => _react.default.createElement(Feature, null, maybeLink(link, () => _react.default.createElement("div", null, topTitle && _react.default.createElement(Subtitle, null, title), _react.default.createElement("img", {
  src: image,
  width: width || 100
}), !topTitle && _react.default.createElement(Subtitle, null, title), content && _react.default.createElement("p", null, content))))));

exports.default = _default;