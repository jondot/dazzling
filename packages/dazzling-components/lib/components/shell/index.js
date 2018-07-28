"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  font-family: Monaco, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',\n    'Lucida Sans Unicode', monospace;\n  background: #fff;\n  border: 1px solid #dae4ed;\n  padding: 1rem;\n  box-shadow: 0 2px 6px 0 #eff5fa;\n  border-radius: 6px;\n  max-width: 600px;\n  overflow: auto;\n  height: 320px;\n  font-size: 14px;\n  line-height: 1.375;\n  direction: ltr;\n  text-align: left;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  flex: 1;\n  overflow: scroll;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: magenta;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #34c749;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 1rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 0px;\n  margin-bottom: 10px;\n  margin-left: -3px;\n  display: flex;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 5px;\n  width: 10px;\n  height: 10px;\n  background-color: ", ";\n  margin: 0 3px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.div(_templateObject(), function (_ref) {
  var color = _ref.color;
  return color;
});

var Bar = _styledComponents.default.div(_templateObject2());

var Cmd = _styledComponents.default.div(_templateObject3());

var Success = _styledComponents.default.div(_templateObject4());

var Failure = _styledComponents.default.div(_templateObject5());

var Content = _styledComponents.default.div(_templateObject6());

var FauxChrome = function FauxChrome() {
  return _react.default.createElement(Bar, null, _react.default.createElement(Button, {
    color: "#FC615D"
  }), _react.default.createElement(Button, {
    color: "#FDBC40"
  }), _react.default.createElement(Button, {
    color: "#34C749"
  }));
}; // we can't wait for prism to initialize, so we're inlining styles here


var FauxWindow = _styledComponents.default.pre(_templateObject7());

var Shell =
/*#__PURE__*/
function (_Component) {
  _inherits(Shell, _Component);

  function Shell() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Shell);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Shell)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {});

    return _this;
  }

  _createClass(Shell, [{
    key: "render",
    value: function render() {
      var darkStyle = this.props.dark ? {
        border: 'none',
        boxShadow: '0 2px 6px 0 #989898',
        backgroundColor: '#313131',
        color: '#fefefe'
      } : {};
      return _react.default.createElement(FauxWindow, {
        style: _objectSpread({}, darkStyle, this.props.style || {})
      }, _react.default.createElement(FauxChrome, null), _react.default.createElement(Content, null, this.props.children));
    }
  }]);

  return Shell;
}(_react.Component);

_defineProperty(Shell, "propTypes", {
  dark: _propTypes.default.bool,
  children: _propTypes.default.node,
  style: _propTypes.default.object
});

Shell.Cmd = Cmd;
Shell.Success = Success;
Shell.Failure = Failure;
var _default = Shell;
exports.default = _default;