"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsbyLink = _interopRequireDefault(require("gatsby-link"));

var _polished = require("polished");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Footer extends _react.default.Component {
  render() {
    const _this$props = this.props,
          theme = _this$props.theme,
          nav = _this$props.nav,
          name = _this$props.name;
    return _react.default.createElement(Container, this.props, _react.default.createElement(Hero, null, name), _react.default.createElement(Links, {
      theme: theme
    }, nav.map(({
      name,
      to,
      href
    }) => to ? _react.default.createElement(FooterLink, {
      theme: theme,
      to: to
    }, name) : _react.default.createElement(FooterHref, {
      theme: theme,
      href: href
    }, name))));
  }

}

const Container = _styledComponents.default.section`
  background: ${({
  theme: {
    ink
  }
}) => ink};
  padding: 3rem 0;
  display: flex;
  color: ${({
  theme: {
    background
  }
}) => background};
  font-size: 1.8rem;
`;
const Hero = _styledComponents.default.div`
  flex: 0.5;
  text-align: right;
  padding: 1rem 3rem;
  font-weight: 300;
`;
const Links = _styledComponents.default.div`
  flex: 0.5;
  text-align: left;
  padding: 1rem 3rem;
  border-left: ${({
  theme: {
    background
  }
}) => `1px solid ${(0, _polished.transparentize)(0.8, background)}`};
`;
const FooterLink = (0, _styledComponents.default)(_gatsbyLink.default)`
  &,
  &:hover {
    color: ${({
  theme: {
    background
  }
}) => background};
    display: block;
    text-decoration: none;
    border-bottom: none;
  }
`;
const FooterHref = _styledComponents.default.a`
  &,
  &:hover {
    color: ${({
  theme: {
    background
  }
}) => background};
    display: block;
    text-decoration: none;
    border-bottom: none;
  }
`;
var _default = Footer;
exports.default = _default;