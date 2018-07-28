"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin: 0 1.6rem;\n  appearance: none;\n  background: #f0f0f0;\n  border: 0;\n  color: ", ";\n  font-size: 1.6rem;\n  font-family: inherit;\n  position: relative;\n  padding: 5px 5px 5px 29px;\n  background-image: url(", ");\n  background-size: 16px 16px;\n  background-repeat: no-repeat;\n  background-position-y: center;\n  background-position-x: 5px;\n  border-radius: 0.8rem;\n  width: 14rem;\n\n  &:focus {\n    outline: 0;\n    backgroundcolor: #f0f0f0;\n    border-radius: 0.8rem;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .algolia-autocomplete\n    .ds-dropdown-menu\n    .algolia-docsearch-suggestion--highlight {\n    box-shadow: inset 0 -2px 0 0 ", " !important;\n    color: ", " !important;\n  }\n\n  .algolia-autocomplete .algolia-docsearch-suggestion--highlight {\n    background-color: #e0d6eb !important;\n    box-shadow: 0 !important;\n    color: ", " !important;\n  }\n\n  .algolia-autocomplete\n    .algolia-docsearch-suggestion--text\n    .algolia-docsearch-suggestion--highlight {\n    background: transparent !important;\n    box-shadow: inset 0 -2px 0 0 ", " !important;\n  }\n"]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* babel-plugin-inline-import './search.svg' */
var searchIcon = "data:image/svg+xml;base64,PHN2ZwogIGFsdD0iU2VhcmNoIgogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB2aWV3Qm94PSIwIDAgMTYgMTYiCj4KICA8cGF0aAogICAgZD0iCiAgICAgIE02LjAyOTQ1LDEwLjIwMzI3YTQuMTczODIsNC4xNzM4MiwwLDEsMSw0LjE3MzgyLTQuMTczODJBNC4xNTYwOSw0LjE1NjA5LAogICAgICAwLDAsMSw2LjAyOTQ1LDEwLjIwMzI3Wm05LjY5MTk1LDQuMjE5OUwxMC44OTg5LDkuNTk5NzlBNS44ODAyMSw1Ljg4MDIxLAogICAgICAwLDAsMCwxMi4wNTgsNi4wMjg1Niw2LjAwNDY3LDYuMDA0NjcsMCwxLDAsOS41OTk3OSwxMC44OTg5bDQuODIzMzgsCiAgICAgIDQuODIzMzhhLjg5NzI5Ljg5NzI5LDAsMCwwLDEuMjk5MTIsMCwuODk3NDkuODk3NDksMCwwLDAtLjAwMDg3LTEuMjk5MDlaIgogICAgZmlsbD0iI2ZmZmZmZiIKICAvPgo8L3N2Zz4=";

var DocSearch =
/*#__PURE__*/
function (_Component) {
  _inherits(DocSearch, _Component);

  function DocSearch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DocSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DocSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      enabled: true
    });

    return _this;
  }

  _createClass(DocSearch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Initialize Algolia search.
      // TODO Is this expensive? Should it be deferred until a user is about to search?
      // eslint-disable-next-line no-undef
      if (window.docsearch) {
        window.docsearch(this.props.docSearch);
      } else {
        console.warn('Search has failed to load and now is being disabled');
        this.setState({
          enabled: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var enabled = this.state.enabled;
      return enabled ? _react.default.createElement(StyledContainer, null, _react.default.createElement("form", {
        style: {
          display: 'flex',
          flex: '0 0 auto',
          flexDirection: 'row',
          alignItems: 'center',
          paddingLeft: '0.5rem',
          paddingRight: '0.5rem'
        }
      }, _react.default.createElement(SearchInput, {
        style: {},
        id: "algolia-doc-search",
        type: "search",
        placeholder: "Search docs",
        "aria-label": "Search docs"
      }))) : null;
    }
  }]);

  return DocSearch;
}(_react.Component);

var StyledContainer = _styledComponents.default.div(_templateObject(), function (_ref) {
  var brand = _ref.theme.brand;
  return brand;
}, function (_ref2) {
  var brand = _ref2.theme.brand;
  return brand;
}, function (_ref3) {
  var brand = _ref3.theme.brand;
  return brand;
}, function (_ref4) {
  var brand = _ref4.theme.brand;
  return brand;
});

var SearchInput = _styledComponents.default.input(_templateObject2(), function (_ref5) {
  var ink = _ref5.theme.ink;
  return ink;
}, searchIcon);

var _default = DocSearch;
exports.default = _default;