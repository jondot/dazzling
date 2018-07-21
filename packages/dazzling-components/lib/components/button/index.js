"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _gatsbyLink = _interopRequireDefault(require("gatsby-link"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Button extends _react.Component {
  render() {
    const _this$props = this.props,
          children = _this$props.children,
          to = _this$props.to,
          style = _this$props.style;
    return _react.default.createElement(_gatsbyLink.default, {
      style: {
        border: 'none'
      },
      to: to
    }, _react.default.createElement(ButtonContainer, {
      style: style
    }, children));
  }

}

_defineProperty(Button, "propTypes", {
  to: _propTypes.default.string,
  children: _propTypes.default.node,
  style: _propTypes.default.object
});

var _default = Button;
exports.default = _default;
const ButtonContainer = _styledComponents.default.div`
  border: 1px solid ${props => props.theme.brand};
  border-radius: 4px;
  padding: 8px 20px;
  margin: 1rem 0;
  font-size: 2rem;
  background-color: ${props => props.theme.brand};
  color: ${({
  theme: {
    background
  }
}) => background};
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({
  theme: {
    background
  }
}) => background};
    color: ${props => props.theme.brand};
  }
`;