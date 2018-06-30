"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _styledComponents = require("styled-components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class LayoutPage extends _react.Component {
  render() {
    const _this$props = this.props,
          children = _this$props.children,
          config = _this$props.config,
          theme = _this$props.theme;
    console.log(children());
    return _react.default.createElement("div", null, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("title", null, config.siteTitle), _react.default.createElement("meta", {
      name: "description",
      content: config.siteDescription
    })), _react.default.createElement(_styledComponents.ThemeProvider, {
      theme: theme
    }, children()));
  }

}

var _default = LayoutPage;
exports.default = _default;