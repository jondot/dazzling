"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _gatsbyLink = _interopRequireDefault(require("gatsby-link"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class TableOfContents extends _react.default.Component {
  buildNodes() {
    const posts = this.props.posts;
    const type = this.props.contentsType;
    const postNodes = [];
    posts.forEach(post => {
      if (post.node.frontmatter.type === type) {
        const postNode = {
          title: post.node.frontmatter.title,
          path: post.node.fields.slug,
          docNumber: post.node.frontmatter.doc,
          section: post.node.frontmatter.section
        };
        postNodes.push(postNode);
      }
    });
    const postNodeSections = [];
    postNodes.forEach(post => {
      if (postNodeSections[post.section]) {
        postNodeSections[post.section].push(post);
      } else {
        postNodeSections[post.section] = [post];
      }
    });
    postNodeSections.forEach(section => {
      section.sort((a, b) => a.docNumber > b.docNumber);
    });
    return postNodeSections;
  }

  nodeListItems() {
    const postNodeSections = this.buildNodes();
    const sectionTitles = this.props.sectionTitles;
    const listItems = postNodeSections.map((section, idx) => _react.default.createElement("li", {
      key: idx,
      className: "section"
    }, _react.default.createElement("h5", {
      className: "tocHeading docSearch-lvl0"
    }, sectionTitles[idx]), _react.default.createElement("ul", {
      className: "sectionItems"
    }, section.map(node => _react.default.createElement(DocContainer, {
      key: node.path
    }, _react.default.createElement(_gatsbyLink.default, {
      to: node.path
    }, _react.default.createElement(OffsetLi, {
      selected: this.props.location && node.path === this.props.location.pathname
    }, _react.default.createElement("h6", null, node.title))))))));
    return listItems;
  }

  render() {
    return _react.default.createElement(TableOfContentsContainer, null, _react.default.createElement("ul", null, this.nodeListItems()));
  }

}

const TableOfContentsContainer = _styledComponents.default.div`
  padding: ${props => props.theme.sitePadding};

  & > ul,
  .sectionItems {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  p,
  h6 {
    display: inline-block;
    font-weight: normal;
    margin: 0;
  }

  .tocHeading {
    font-size: 1.6rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;
const DocContainer = _styledComponents.default.div`
  h6,
  p {
    color: ${props => props.theme.ink};
    margin: 0;
    line-height: 1.5;
  }
  li {
    margin: 0;
  }
  &:hover {
    li {
      span {
        border-bottom: 1px solid black;
      }
    }
  }
`;
const OffsetLi = _styledComponents.default.li`
  padding-left: 1rem;
  h6 {
    color: ${({
  selected,
  theme: {
    ink,
    inkSelected
  }
}) => selected ? inkSelected : ink};
  }
`;
var _default = TableOfContents;
exports.default = _default;