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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

class DocPage extends _react.default.Component {
  render() {
    const slug = this.props.pathContext.slug;
    const postNode = this.props.data.postBySlug;
    const config = this.props.config;
    const post = postNode.frontmatter;

    if (!post.id) {
      post.id = slug;
    }

    if (!post.id) {
      post.category_id = config.postDefaultCategoryID;
    }

    return _react.default.createElement("div", null, _react.default.createElement(_reactHelmet.default, null, _react.default.createElement("title", null, `${post.title} | ${config.siteTitle}`)), _react.default.createElement(_index.SEO, _extends({
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

}

exports.default = DocPage;
const BodyGrid = _styledComponents.default.div`
  display: grid;
  grid-template-rows: 75px 1fr;
  grid-template-columns: 250px 1fr;
  height: 100vh;
  min-height: 100vh;

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    height: inherit;
  }
`;
const BodyContainer = _styledComponents.default.div`
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  overflow: scroll;
  justify-self: center;
  width: 100%;
  padding: ${props => props.theme.sitePadding};
  @media screen and (max-width: 600px) {
    order: 2;
  }

  & > div {
    max-width: ${props => props.theme.contentWidthLaptop};
    margin: auto;
  }

  & > h1 {
    color: ${props => props.theme.inkDark};
  }
`;
const HeaderContainer = _styledComponents.default.div`
  border-bottom: 1px solid #f0f0f0;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  z-index: 2;
  @media screen and (max-width: 600px) {
    order: 1;
  }
`;
const ToCContainer = _styledComponents.default.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background: ${props => props.theme.inkLight};
  border-right: 1px solid #f0f0f0;
  overflow: scroll;
  @media screen and (max-width: 600px) {
    order: 3;
    overflow: inherit;
  }
`;
const LogoBar = _styledComponents.default.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;
const LogoHeader = _styledComponents.default.div`
  flex: 0.4;
  flex-direction: row;
  padding: 20px;
  font-size: 1.8em;
  img {
    margin-bottom: -8px;
    margin-right: 5px;
  }
  span {
    font-weight: 200;
    color: ${({
  theme: {
    brand
  }
}) => brand};
    font-family: ${({
  theme: {
    titleFontFamily
  }
}) => titleFontFamily};
  }
`;
const SiteHeaderWrapper = _styledComponents.default.div`
  flex: 0.6;
  @media screen and (max-width: 600px) {
    align-self: flex-end;
  }
`;