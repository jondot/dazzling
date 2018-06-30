import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { SEO, DocsHeader, DocsTableOfContents } from './index'

export default class DocPage extends React.Component {
  render() {
    const { slug } = this.props.pathContext
    const postNode = this.props.data.postBySlug
    const config = this.props.config

    const post = postNode.frontmatter
    if (!post.id) {
      post.id = slug
    }
    if (!post.id) {
      post.category_id = config.postDefaultCategoryID
    }
    return (
      <div>
        <Helmet>
          <title>{`${post.title} | ${config.siteTitle}`}</title>
        </Helmet>
        <SEO postPath={slug} postNode={postNode} postSEO {...config} />
        <BodyGrid>
          <HeaderContainer>
            <LogoBar>
              <LogoHeader>
                <Link to="/">
                  <img src={config.logo} width="32px" />
                  <span>{config.name}</span>
                </Link>
              </LogoHeader>
              <SiteHeaderWrapper>
                <DocsHeader
                  location={this.props.location}
                  docSearch={config.docSearch}
                  navItems={config.nav}
                />
              </SiteHeaderWrapper>
            </LogoBar>
          </HeaderContainer>
          <ToCContainer>
            <DocsTableOfContents
              location={this.props.location}
              posts={this.props.data.allPostTitles.edges}
              contentsType="doc"
              sectionTitles={config.toCSections}
            />
          </ToCContainer>
          <BodyContainer>
            <div className="docSearch-content">
              <h1>{post.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
            </div>
          </BodyContainer>
        </BodyGrid>
      </div>
    )
  }
}

const BodyGrid = styled.div`
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
`

const BodyContainer = styled.div`
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
`

const HeaderContainer = styled.div`
  border-bottom: 1px solid #f0f0f0;
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  z-index: 2;
  @media screen and (max-width: 600px) {
    order: 1;
  }
`

const ToCContainer = styled.div`
  grid-column: 1 / 2;
  grid-row: 2 / 3;
  background: ${props => props.theme.inkLight};
  border-right: 1px solid #f0f0f0;
  overflow: scroll;
  @media screen and (max-width: 600px) {
    order: 3;
    overflow: inherit;
  }
`

const LogoBar = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`
const LogoHeader = styled.div`
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
    color: #f722b1;
  }
`
const SiteHeaderWrapper = styled.div`
  flex: 0.6;
  @media screen and (max-width: 600px) {
    align-self: flex-end;
  }
`
