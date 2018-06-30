import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Hero, Navigation, Footer, Triplet, Section } from './index'

console.log('', { Hero, Navigation, Footer, Triplet, Section })
export default class LandingPage extends React.Component {
  render() {
    const { config } = this.props
    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <main>
          <IndexHeadContainer>
            <Navigation items={config.nav} />
            <Hero
              title={config.siteTitle}
              logo={config.logo}
              primaryNavItem={config.nav.find(item => item.primary)}
              secondaryNavItem={config.nav.find(item => item.secondary)}
            >
              {this.props.children}
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            {config.features && (
              <Section>
                <Triplet features={config.features} />
              </Section>
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

const IndexHeadContainer = styled.div`
  background: ${({ theme: { background } }) => background};
  padding: ${props => props.theme.sitePadding};
  text-align: center;
  border-bottom: 1px solid #f0f0f0;
`
const BodyContainer = styled.div``
