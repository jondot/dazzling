"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsbyLink = _interopRequireDefault(require("gatsby-link"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _search = _interopRequireDefault(require("../../docs/search"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: 100%;\n\n  justify-content: flex-end;\n  .nav-link {\n    font-size: 1.6rem;\n    margin-right: 10px;\n    line-height: 3.2rem;\n    color: ", ";\n  }\n  section {\n    right: 5rem;\n    display: flex;\n  }\n\n  @media screen and (max-width: 600px) {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n    section {\n      position: relative;\n      right: 0;\n      margin: 0 auto;\n    }\n  }\n"]);

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

var Navigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Navigation, _React$Component);

  function Navigation() {
    _classCallCheck(this, Navigation);

    return _possibleConstructorReturn(this, _getPrototypeOf(Navigation).apply(this, arguments));
  }

  _createClass(Navigation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          style = _this$props.style,
          itemStyle = _this$props.itemStyle;
      return _react.default.createElement(NavContainer, {
        style: style
      }, _react.default.createElement("section", null, this.props.items.map(function (_ref) {
        var name = _ref.name,
            to = _ref.to,
            href = _ref.href;
        return to ? _react.default.createElement(_gatsbyLink.default, {
          key: to,
          style: itemStyle,
          className: "nav-link",
          to: to
        }, name) : _react.default.createElement("a", {
          key: href,
          style: itemStyle,
          className: "nav-link",
          href: href
        }, name);
      }), this.props.docSearch && _react.default.createElement(_search.default, {
        docSearch: this.props.docSearch
      })));
    }
  }]);

  return Navigation;
}(_react.default.Component);

_defineProperty(Navigation, "propTypes", {
  items: _propTypes.default.arrayOf(_propTypes.default.object),
  docSearch: _propTypes.default.object,
  style: _propTypes.default.object,
  itemStyle: _propTypes.default.object
});

var NavContainer = _styledComponents.default.div(_templateObject(), function (props) {
  return props.theme.ink;
});

var _default = Navigation;
exports.default = _default;