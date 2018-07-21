"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _subtitle = _interopRequireDefault(require("../subtitle"));

var _or = _interopRequireDefault(require("../or"));

var _brandedLink = _interopRequireDefault(require("../branded-link"));

var _button = _interopRequireDefault(require("../button"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Hero = ({
  title,
  subTitle,
  logo,
  primaryNavItem,
  secondaryNavItem,
  children,
  logoWidth = 150
}) => _react.default.createElement(HeroContainer, null, _react.default.createElement("img", {
  src: logo,
  width: logoWidth
}), _react.default.createElement("h1", null, title), _react.default.createElement(_subtitle.default, null, subTitle), children, primaryNavItem && _react.default.createElement(_button.default, {
  to: primaryNavItem.to
}, primaryNavItem.primary), _react.default.createElement(_or.default, null, "or"), secondaryNavItem && _react.default.createElement(_brandedLink.default, {
  href: secondaryNavItem.href,
  go: true
}, secondaryNavItem.secondary));

const HeroContainer = _styledComponents.default.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 300;
    font-size: 3.2rem;
    color: ${({
  theme: {
    brand
  }
}) => brand};
    margin: 0;
  }
`;
Hero.propTypes = {
  title: _propTypes.default.string,
  subTitle: _propTypes.default.string,
  logo: _propTypes.default.string,
  primaryNavItem: _propTypes.default.object,
  secondaryNavItem: _propTypes.default.object,
  children: _propTypes.default.node,
  logoWidth: _propTypes.default.number
};
var _default = Hero;
exports.default = _default;