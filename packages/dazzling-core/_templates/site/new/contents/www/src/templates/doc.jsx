import React from 'react'
import { DocPage, withAssets } from 'dazzling-components'
import c from '../../site-config'
const config = withAssets(_ => require(`../assets/${_}`))(c)

export default class Doc extends React.Component {
  render() {
    return <DocPage config={config} {...this.props} />
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query DocBySlug($slug: String!) {
    allPostTitles: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            doc
            section
            type
          }
          fields {
            slug
          }
        }
      }
    }
    postBySlug: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      excerpt
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`
