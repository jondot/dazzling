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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Navigation extends _react.default.Component {
  render() {
    const _this$props = this.props,
          style = _this$props.style,
          itemStyle = _this$props.itemStyle;
    return _react.default.createElement(NavContainer, {
      style: style
    }, _react.default.createElement("section", null, this.props.items.map(({
      name,
      to,
      href
    }) => to ? _react.default.createElement(_gatsbyLink.default, {
      key: to,
      style: itemStyle,
      className: "nav-link",
      to: to
    }, name) : _react.default.createElement("a", {
      key: href,
      style: itemStyle,
      className: "nav-link",
      href: href
    }, name)), this.props.docSearch && _react.default.createElement(_search.default, {
      docSearch: this.props.docSearch
    })));
  }

}

_defineProperty(Navigation, "propTypes", {
  items: _propTypes.default.arrayOf(_propTypes.default.object),
  docSearch: _propTypes.default.object,
  style: _propTypes.default.object,
  itemStyle: _propTypes.default.object
});

const NavContainer = _styledComponents.default.div`
  display: flex;
  width: 100%;

  justify-content: flex-end;
  .nav-link {
    font-size: 1.6rem;
    margin-right: 10px;
    line-height: 3.2rem;
    color: ${props => props.theme.ink};
  }
  section {
    right: 5rem;
    display: flex;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      position: relative;
      right: 0;
      margin: 0 auto;
    }
  }
`;
var _default = Navigation;
exports.default = _default;