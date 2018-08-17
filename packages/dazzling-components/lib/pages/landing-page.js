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

function _templateObject2() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: ", ";\n  text-align: center;\n  border-bottom: 1px solid #f0f0f0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var LandingPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(LandingPage, _React$Component);

  function LandingPage() {
    _classCallCheck(this, LandingPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(LandingPage).apply(this, arguments));
  }

  _createClass(LandingPage, [{
    key: "render",
    value: function render() {
      var config = this.props.config;
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
        primaryNavItem: config.nav.find(function (item) {
          return item.primary;
        }),
        secondaryNavItem: config.nav.find(function (item) {
          return item.secondary;
        })
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
  }]);

  return LandingPage;
}(_react.default.Component);

exports.default = LandingPage;

var IndexHeadContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var background = _ref.theme.background;
  return background;
}, function (props) {
  return props.theme.sitePadding;
});

var BodyContainer = _styledComponents.default.div(_templateObject2());