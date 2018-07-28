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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  padding: 50px 0;\n  & > h1 {\n    font-weight: 300;\n    font-size: 3.2rem;\n    color: ", ";\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Hero = function Hero(_ref) {
  var title = _ref.title,
      subTitle = _ref.subTitle,
      logo = _ref.logo,
      primaryNavItem = _ref.primaryNavItem,
      secondaryNavItem = _ref.secondaryNavItem,
      children = _ref.children,
      _ref$logoWidth = _ref.logoWidth,
      logoWidth = _ref$logoWidth === void 0 ? 150 : _ref$logoWidth;
  return _react.default.createElement(HeroContainer, null, _react.default.createElement("img", {
    src: logo,
    width: logoWidth
  }), _react.default.createElement("h1", null, title), _react.default.createElement(_subtitle.default, null, subTitle), children, primaryNavItem && _react.default.createElement(_button.default, {
    to: primaryNavItem.to
  }, primaryNavItem.primary), _react.default.createElement(_or.default, null, "or"), secondaryNavItem && _react.default.createElement(_brandedLink.default, {
    href: secondaryNavItem.href,
    go: true
  }, secondaryNavItem.secondary));
};

var HeroContainer = _styledComponents.default.div(_templateObject(), function (_ref2) {
  var brand = _ref2.theme.brand;
  return brand;
});

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