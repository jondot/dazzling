import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import {
  withAssets,
  Subtitle,
  Button,
  Navigation,
  Footer,
  Shell,
  Triplet,
  Section
} from 'dazzling-components'
import c from '../../site-config'
const config = withAssets(_ => require(`../assets/${_}`))(c)

export default class Index extends React.Component {
  render() {
    const primaryNavItem = config.nav.find(item => item.primary)
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <main>
          <IndexHeadContainer>
            <Navigation itemStyle={{ marginRight: 30 }} items={config.nav} />
            <HeroWrapper>
              <HeroContainer>
                <h1>{config.siteTitle}</h1>
                <Subtitle style={{ margin: '0em 0 1em 0' }}>
                  {config.pitch}
                </Subtitle>
                <Shell dark style={{ margin: '0 auto 10rem auto' }}>
                  <Shell.Cmd>$ yarn add -D dazzling</Shell.Cmd>
                  <Shell.Cmd>$ yarn dazzling site new</Shell.Cmd>
                  <Shell.Success>
                    {`? What's your project name? Bamboo
? Project tagline? The scalable wood
? Github repo? https://github.com/fixme/fixme
? Website? https://fixme.io
? Google Analytics ID? UA-FIX-ME-XXXXX
? Your name? (for copyright) Chuck Woody`}</Shell.Success>
                  <Shell.Cmd>{`Loaded templates: _templates
         added: www/static/CNAME
         added: www/site-config.js`}
                  </Shell.Cmd>
                  <Shell.Cmd>$ cd www && yarn && yarn start</Shell.Cmd>
                </Shell>
                <Button
                  style={{ borderRadius: 4, padding: '1.5rem 3rem' }}
                  to={primaryNavItem.to}
                >
                  {primaryNavItem.primary}
                </Button>
                <Alt href="https://github.com/jondot/dazzling">
                  ️Dazzling on Github ›
                </Alt>
              </HeroContainer>
            </HeroWrapper>
          </IndexHeadContainer>
          <BodyContainer>
            {config.features && (
              <Inverted>
                <Section title={config.featuresText}>
                  <Triplet features={config.features} />
                </Section>
              </Inverted>
            )}

            {config.usedIn && (
              <Section title={config.usedInText}>
                <Triplet features={config.usedIn} />
              </Section>
            )}
            <Footer nav={config.nav} name={config.name} />

          </BodyContainer>
        </main>
      </div>
    )
  }
}

const HeroContainer = styled.div`
  padding: 50px 0;
  & > h1 {
    font-weight: 300;
    font-size: 8rem;
    letter-spacing: -7px;
    color: ${({ theme: { brand } }) => brand};
  }
`
const Alt = styled.a`
  margin-left: 3rem;
  padding: 2px 0;
  border-bottom: 1px solid;
`

const Inverted = styled.div`
  background: ${({ theme: { brand } }) => brand};
  color: ${({ theme: { background } }) => background};
  * h2,
  h1 {
    color: ${({ theme: { background } }) => background};
  }
`
const HeroWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
`
const IndexHeadContainer = styled.div`
text-align: center;
  background: ${({ theme: { background } }) => background};
  padding: ${props => props.theme.sitePadding};
  border-bottom: 1px solid #f0f0f0;
`
const BodyContainer = styled.div``
