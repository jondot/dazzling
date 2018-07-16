"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsbyLink = _interopRequireDefault(require("gatsby-link"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _search = _interopRequireDefault(require("./docs/search"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
      style: itemStyle,
      className: "nav-link",
      to: to
    }, name) : _react.default.createElement("a", {
      style: itemStyle,
      className: "nav-link",
      href: href
    }, name)), this.props.docSearch && _react.default.createElement(_search.default, {
      docSearch: this.props.docSearch
    })));
  }

}

const NavContainer = _styledComponents.default.div`
  display: flex;
  width: 100%;

  justify-content: flex-end;
  .nav-link {
    font-size: 1.6rem;
    margin-right: 10px;
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