"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const Button = _styledComponents.default.div`
  border-radius: 5px;
  width: 10px;
  height: 10px;
  background-color: ${({
  color
}) => color};
  margin: 0 3px;
`;
const Bar = _styledComponents.default.div`
  margin-top: 0px;
  margin-bottom: 10px;
  margin-left: -3px;
  display: flex;
`;
const Cmd = _styledComponents.default.div`
  margin-bottom: 1rem;
`;
const Success = _styledComponents.default.div`
  color: #34c749;
`;
const Failure = _styledComponents.default.div`
  color: magenta;
`;
const Content = _styledComponents.default.div`
flex:1;
overflow:scroll;
`;

const FauxChrome = () => _react.default.createElement(Bar, null, _react.default.createElement(Button, {
  color: "#FC615D"
}), _react.default.createElement(Button, {
  color: "#FDBC40"
}), _react.default.createElement(Button, {
  color: "#34C749"
})); // we can't wait for prism to initialize, so we're inlining styles here


const FauxWindow = _styledComponents.default.pre`
  display:flex;
  flex-direction: column;
  font-family: Monaco, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', monospace;
  background: #fff;
  border: 1px solid #dae4ed;
  padding: 1rem;
  box-shadow: 0 2px 6px 0 #eff5fa;
  border-radius: 6px;
  max-width: 500px;
  overflow: auto;
  height: 200px;
  font-size: 14px;
  line-height: 1.375;
  direction: ltr;
  text-align: left;
`;

class Shell extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {});
  }

  render() {
    const darkStyle = this.props.dark ? {
      border: 'none',
      boxShadow: '0 2px 6px 0 #989898',
      backgroundColor: '#313131',
      color: '#fefefe'
    } : {};
    return _react.default.createElement(FauxWindow, {
      style: _objectSpread({}, darkStyle, this.props.style || {})
    }, _react.default.createElement(FauxChrome, null), _react.default.createElement(Content, null, this.props.children));
  }

}

Shell.Cmd = Cmd;
Shell.Success = Success;
Shell.Failure = Failure;
var _default = Shell;
exports.default = _default;