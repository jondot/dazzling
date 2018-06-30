"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _navigation = _interopRequireDefault(require("../navigation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class MainHeader extends _react.default.Component {
  render() {
    const _this$props = this.props,
          location = _this$props.location,
          navItems = _this$props.navItems;
    return _react.default.createElement(SiteContainer, null, _react.default.createElement(_navigation.default, {
      items: navItems,
      docSearch: location && location.pathname !== '/' && this.props.docSearch
    }));
  }

}

const SiteContainer = _styledComponents.default.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
var _default = MainHeader;
exports.default = _default;