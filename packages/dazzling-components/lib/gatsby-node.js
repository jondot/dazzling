"use strict";

var path = require('path');

var _ = require('lodash');

var webpackLodashPlugin = require('lodash-webpack-plugin');

exports.onCreateNode = function (_ref) {
  var node = _ref.node,
      boundActionCreators = _ref.boundActionCreators,
      getNode = _ref.getNode;
  var createNodeField = boundActionCreators.createNodeField;
  var slug;

  if (node.internal.type === 'MarkdownRemark') {
    var fileNode = getNode(node.parent);
    var parsedFilePath = path.parse(fileNode.relativePath);

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter') && Object.prototype.hasOwnProperty.call(node.frontmatter, 'slug')) {
      slug = "/".concat(_.kebabCase(node.frontmatter.slug));
    }

    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter') && Object.prototype.hasOwnProperty.call(node.frontmatter, 'title')) {
      slug = "/".concat(_.kebabCase(node.frontmatter.title));
    } else if (parsedFilePath.name !== 'index' && parsedFilePath.dir !== '') {
      slug = "/".concat(parsedFilePath.dir, "/").concat(parsedFilePath.name, "/");
    } else if (parsedFilePath.dir === '') {
      slug = "/".concat(parsedFilePath.name, "/");
    } else {
      slug = "/".concat(parsedFilePath.dir, "/");
    }

    createNodeField({
      node: node,
      name: 'slug',
      value: slug
    });
  }
};

exports.createPages = function (_ref2) {
  var graphql = _ref2.graphql,
      boundActionCreators = _ref2.boundActionCreators;
  var createPage = boundActionCreators.createPage;
  return new Promise(function (resolve, reject) {
    var docPage = path.resolve('src/templates/doc.jsx');
    resolve(graphql("\n          {\n            allMarkdownRemark {\n              edges {\n                node {\n                  frontmatter {\n                    type\n                  }\n                  fields {\n                    slug\n                  }\n                }\n              }\n            }\n          }\n        ").then(function (result) {
      if (result.errors) {
        /* eslint no-console: "off"*/
        console.log(result.errors);
        reject(result.errors);
      }

      result.data.allMarkdownRemark.edges.forEach(function (edge) {
        createPage({
          path: edge.node.fields.slug,
          component: docPage,
          context: {
            slug: edge.node.fields.slug
          }
        });
      });
    }));
  });
};

exports.modifyWebpackConfig = function (_ref3) {
  var config = _ref3.config,
      stage = _ref3.stage;
  config._loaders.js.config.exclude = [/(node_modules|bower_components|-components)/];

  if (stage === 'build-javascript') {
    config.plugin('Lodash', webpackLodashPlugin, null);
  }
};