"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* babel-plugin-inline-import './search.svg' */
const searchIcon = "data:image/svg+xml;base64,PHN2ZwogIGFsdD0iU2VhcmNoIgogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICB2aWV3Qm94PSIwIDAgMTYgMTYiCj4KICA8cGF0aAogICAgZD0iCiAgICAgIE02LjAyOTQ1LDEwLjIwMzI3YTQuMTczODIsNC4xNzM4MiwwLDEsMSw0LjE3MzgyLTQuMTczODJBNC4xNTYwOSw0LjE1NjA5LAogICAgICAwLDAsMSw2LjAyOTQ1LDEwLjIwMzI3Wm05LjY5MTk1LDQuMjE5OUwxMC44OTg5LDkuNTk5NzlBNS44ODAyMSw1Ljg4MDIxLAogICAgICAwLDAsMCwxMi4wNTgsNi4wMjg1Niw2LjAwNDY3LDYuMDA0NjcsMCwxLDAsOS41OTk3OSwxMC44OTg5bDQuODIzMzgsCiAgICAgIDQuODIzMzhhLjg5NzI5Ljg5NzI5LDAsMCwwLDEuMjk5MTIsMCwuODk3NDkuODk3NDksMCwwLDAtLjAwMDg3LTEuMjk5MDlaIgogICAgZmlsbD0iI2ZmZmZmZiIKICAvPgo8L3N2Zz4=";

class DocSearch extends _react.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      enabled: true
    });
  }

  componentDidMount() {
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

  render() {
    const enabled = this.state.enabled;
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

}

const StyledContainer = _styledComponents.default.div`
  .algolia-autocomplete
    .ds-dropdown-menu
    .algolia-docsearch-suggestion--highlight {
    box-shadow: inset 0 -2px 0 0 ${({
  theme: {
    brand
  }
}) => brand} !important;
    color: ${({
  theme: {
    brand
  }
}) => brand} !important;
  }

  .algolia-autocomplete .algolia-docsearch-suggestion--highlight {
    background-color: #e0d6eb !important;
    box-shadow: 0 !important;
    color: ${({
  theme: {
    brand
  }
}) => brand} !important;
  }

  .algolia-autocomplete
    .algolia-docsearch-suggestion--text
    .algolia-docsearch-suggestion--highlight {
    background: transparent !important;
    box-shadow: inset 0 -2px 0 0 ${({
  theme: {
    brand
  }
}) => brand} !important;
  }
`;
const SearchInput = _styledComponents.default.input`
  margin: 0 1.6rem;
  appearance: none;
  background: #f0f0f0;
  border: 0;
  color: ${({
  theme: {
    ink
  }
}) => ink};
  font-size: 1.6rem;
  font-family: inherit;
  position: relative;
  padding: 5px 5px 5px 29px;
  background-image: url(${searchIcon});
  background-size: 16px 16px;
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: 5px;
  border-radius: 0.8rem;
  width: 14rem;

  &:focus {
    outline: 0;
    backgroundcolor: #f0f0f0;
    border-radius: 0.8rem;
  }
`;
var _default = DocSearch;
exports.default = _default;