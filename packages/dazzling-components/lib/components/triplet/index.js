"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsbyLink = _interopRequireDefault(require("gatsby-link"));

var _propTypes = _interopRequireDefault(require("prop-types"));

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
  font-size: 1.6rem;
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
    if (link.startsWith('http')) {
      return _react.default.createElement("a", {
        href: link
      }, _react.default.createElement(Content, null));
    }

    return _react.default.createElement(_gatsbyLink.default, {
      to: link
    }, _react.default.createElement(Content, null));
  }

  return _react.default.createElement(Content, null);
};

const Triplet = ({
  features
}) => _react.default.createElement(TripletContainer, null, features.map(({
  image,
  title,
  content,
  link,
  topTitle,
  width
}, idx) => _react.default.createElement(Feature, {
  key: idx
}, maybeLink(link, () => _react.default.createElement("div", null, topTitle && _react.default.createElement(Subtitle, null, title), _react.default.createElement("img", {
  src: image,
  width: width || 100
}), !topTitle && _react.default.createElement(Subtitle, null, title), content && _react.default.createElement("p", null, content))))));

Triplet.propTypes = {
  features: _propTypes.default.arrayOf(_propTypes.default.object)
};
var _default = Triplet;
exports.default = _default;