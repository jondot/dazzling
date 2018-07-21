"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const _require = require('history'),
      createHistory = _require.createMemoryHistory;

const _require2 = require('react-router'),
      Router = _require2.Router;

const history = createHistory();
const Container = _styledComponents.default.div`
  font-family: 'Open Sans';
  font-size: 10px;
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2rem;
  }
`;

class Wrapper extends _react.Component {
  render() {
    return _react.default.createElement(Router, {
      history: history
    }, _react.default.createElement(_styledComponents.ThemeProvider, {
      theme: {
        // named colors:
        bodyFontFamily: 'Open Sans',
        titleFontFamily: 'Muli',
        background: '#fff',
        brand: '#408AFA',
        brandSecondary: '#8b8f94',
        ink: '#333',
        inkDark: '#35495E',
        inkLight: '#f9fbfd',
        inkSelected: '#2097e4',
        // content width:
        contentWidthLaptop: '680px',
        sitePadding: '20px'
      }
    }, _react.default.createElement(Container, null, this.props.children)));
  }

}

exports.default = Wrapper;