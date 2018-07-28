"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _gatsbyLink = _interopRequireDefault(require("gatsby-link"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  flex: 0.6;\n  @media screen and (max-width: 600px) {\n    align-self: flex-end;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  flex: 0.4;\n  flex-direction: row;\n  padding: 20px;\n  font-size: 1.8em;\n  img {\n    margin-bottom: -8px;\n    margin-right: 5px;\n  }\n  span {\n    font-weight: 200;\n    color: ", ";\n    font-family: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  @media screen and (max-width: 600px) {\n    flex-direction: column;\n    align-items: center;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  background: ", ";\n  border-right: 1px solid #f0f0f0;\n  overflow: scroll;\n  @media screen and (max-width: 600px) {\n    order: 3;\n    overflow: inherit;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: 1px solid #f0f0f0;\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  z-index: 2;\n  @media screen and (max-width: 600px) {\n    order: 1;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n  overflow: scroll;\n  justify-self: center;\n  width: 100%;\n  padding: ", ";\n  @media screen and (max-width: 600px) {\n    order: 2;\n  }\n\n  & > div {\n    max-width: ", ";\n    margin: auto;\n  }\n\n  & > h1 {\n    color: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: grid;\n  grid-template-rows: 75px 1fr;\n  grid-template-columns: 250px 1fr;\n  height: 100vh;\n  min-height: 100vh;\n\n  @media screen and (max-width: 600px) {\n    display: flex;\n    flex-direction: column;\n    height: inherit;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DocPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DocPage, _React$Component);

  function DocPage() {
    _classCallCheck(this, DocPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(DocPage).apply(this, arguments));
  }

  _createClass(DocPage, [{
    key: "render",
    value: function render() {
      var slug = this.props.pathContext.slug;
      var postNode = this.props.data.postBySlug;
      var config = this.props.config;
      var post = postNode.frontmatter;

      if (!post.id) {
        post.id = slug;
      }

      if (!post.id) {
        post.category_id = config.postDefaultCategoryID;
      }

      return _react.default.createElement("div", null, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("title", null, "".concat(post.title, " | ").concat(config.siteTitle))), _react.default.createElement(_index.SEO, _extends({
        postPath: slug,
        postNode: postNode,
        postSEO: true
      }, config)), _react.default.createElement(BodyGrid, null, _react.default.createElement(HeaderContainer, null, _react.default.createElement(LogoBar, null, _react.default.createElement(LogoHeader, null, _react.default.createElement(_gatsbyLink.default, {
        to: "/"
      }, _react.default.createElement("img", {
        src: config.logo,
        width: "32px"
      }), _react.default.createElement("span", null, config.name))), _react.default.createElement(SiteHeaderWrapper, null, _react.default.createElement(_index.DocsHeader, {
        location: this.props.location,
        docSearch: config.docSearch,
        navItems: config.nav
      })))), _react.default.createElement(ToCContainer, null, _react.default.createElement(_index.DocsTableOfContents, {
        location: this.props.location,
        posts: this.props.data.allPostTitles.edges,
        contentsType: "doc",
        sectionTitles: config.toCSections
      })), _react.default.createElement(BodyContainer, null, _react.default.createElement("div", {
        className: "docSearch-content"
      }, _react.default.createElement("h1", null, post.title), _react.default.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: postNode.html
        }
      })))));
    }
  }]);

  return DocPage;
}(_react.default.Component);

exports.default = DocPage;

var BodyGrid = _styledComponents.default.div(_templateObject());

var BodyContainer = _styledComponents.default.div(_templateObject2(), function (props) {
  return props.theme.sitePadding;
}, function (props) {
  return props.theme.contentWidthLaptop;
}, function (props) {
  return props.theme.inkDark;
});

var HeaderContainer = _styledComponents.default.div(_templateObject3());

var ToCContainer = _styledComponents.default.div(_templateObject4(), function (props) {
  return props.theme.inkLight;
});

var LogoBar = _styledComponents.default.div(_templateObject5());

var LogoHeader = _styledComponents.default.div(_templateObject6(), function (_ref) {
  var brand = _ref.theme.brand;
  return brand;
}, function (_ref2) {
  var titleFontFamily = _ref2.theme.titleFontFamily;
  return titleFontFamily;
});

var SiteHeaderWrapper = _styledComponents.default.div(_templateObject7());