"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsbyLink = _interopRequireDefault(require("gatsby-link"));

var _polished = require("polished");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  &,\n  &:hover {\n    color: ", ";\n    display: block;\n    text-decoration: none;\n    border-bottom: none;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  &,\n  &:hover {\n    color: ", ";\n    display: block;\n    text-decoration: none;\n    border-bottom: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  flex: 0.5;\n  text-align: left;\n  padding: 1rem 3rem;\n  border-left: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex: 0.5;\n  text-align: right;\n  padding: 1rem 3rem;\n  font-weight: 300;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  padding: 3rem 0;\n  display: flex;\n  color: ", ";\n  font-size: 1.8rem;\n"]);

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          theme = _this$props.theme,
          nav = _this$props.nav,
          name = _this$props.name;
      return _react.default.createElement(Container, this.props, _react.default.createElement(Hero, null, name), _react.default.createElement(Links, {
        theme: theme
      }, nav.map(function (_ref) {
        var name = _ref.name,
            to = _ref.to,
            href = _ref.href;
        return to ? _react.default.createElement(FooterLink, {
          key: to,
          theme: theme,
          to: to
        }, name) : _react.default.createElement(FooterHref, {
          key: href,
          theme: theme,
          href: href
        }, name);
      })));
    }
  }]);

  return Footer;
}(_react.default.Component);

_defineProperty(Footer, "propTypes", {
  name: _propTypes.default.string,
  nav: _propTypes.default.arrayOf(_propTypes.default.object),
  style: _propTypes.default.object,
  theme: _propTypes.default.object
});

var Container = _styledComponents.default.section(_templateObject(), function (_ref2) {
  var ink = _ref2.theme.ink;
  return ink;
}, function (_ref3) {
  var background = _ref3.theme.background;
  return background;
});

var Hero = _styledComponents.default.div(_templateObject2());

var Links = _styledComponents.default.div(_templateObject3(), function (_ref4) {
  var background = _ref4.theme.background;
  return "1px solid ".concat((0, _polished.transparentize)(0.8, background));
});

var FooterLink = (0, _styledComponents.default)(_gatsbyLink.default)(_templateObject4(), function (_ref5) {
  var background = _ref5.theme.background;
  return background;
});

var FooterHref = _styledComponents.default.a(_templateObject5(), function (_ref6) {
  var background = _ref6.theme.background;
  return background;
});

var _default = Footer;
exports.default = _default;