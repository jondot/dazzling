"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LandingPage extends _react.default.Component {
  render() {
    const config = this.props.config;
    return _react.default.createElement("div", {
      className: "index-container"
    }, _react.default.createElement(_reactHelmet.default, {
      title: config.siteTitle
    }), _react.default.createElement("main", null, _react.default.createElement(IndexHeadContainer, null, _react.default.createElement(_index.Navigation, {
      items: config.nav
    }), _react.default.createElement(_index.Hero, {
      title: config.siteTitle,
      subTitle: config.pitch,
      logo: config.logo,
      primaryNavItem: config.nav.find(item => item.primary),
      secondaryNavItem: config.nav.find(item => item.secondary)
    }, this.props.children)), _react.default.createElement(BodyContainer, null, config.features && _react.default.createElement(_index.Section, null, _react.default.createElement(_index.Triplet, {
      features: config.features
    })), config.usedIn && _react.default.createElement(_index.Section, {
      title: config.usedInText
    }, _react.default.createElement(_index.Triplet, {
      features: config.usedIn
    })), _react.default.createElement(_index.Footer, {
      nav: config.nav,
      name: config.name
    }))));
  }

}

exports.default = LandingPage;
const IndexHeadContainer = _styledComponents.default.div`
  background: ${({
  theme: {
    background
  }
}) => background};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
`;
const BodyContainer = _styledComponents.default.div``;