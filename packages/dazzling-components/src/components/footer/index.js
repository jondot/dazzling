import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { transparentize } from 'polished'
import P from 'prop-types'

class Footer extends React.Component {
  static propTypes = {
    name: P.string,
    nav: P.arrayOf(P.object),
    style: P.object,
    theme: P.object
  }
  render() {
    const { theme, nav, name } = this.props
    return (
      <Container {...this.props}>
        <Hero>{name}</Hero>
        <Links theme={theme}>
          {nav.map(
            ({ name, to, href }) =>
              to ? (
                <FooterLink key={to} theme={theme} to={to}>
                  {name}
                </FooterLink>
              ) : (
                <FooterHref key={href} theme={theme} href={href}>
                  {name}
                </FooterHref>
              )
          )}
        </Links>
      </Container>
    )
  }
}

const Container = styled.section`
  background: ${({ theme: { ink } }) => ink};
  padding: 3rem 0;
  display: flex;
  color: ${({ theme: { background } }) => background};
  font-size: 1.8rem;
`
const Hero = styled.div`
  flex: 0.5;
  text-align: right;
  padding: 1rem 3rem;
  font-weight: 300;
`
const Links = styled.div`
  flex: 0.5;
  text-align: left;
  padding: 1rem 3rem;
  border-left: ${({ theme: { background } }) =>
    `1px solid ${transparentize(0.8, background)}`};
`
const FooterLink = styled(Link)`
  &,
  &:hover {
    color: ${({ theme: { background } }) => background};
    display: block;
    text-decoration: none;
    border-bottom: none;
  }
`
const FooterHref = styled.a`
  &,
  &:hover {
    color: ${({ theme: { background } }) => background};
    display: block;
    text-decoration: none;
    border-bottom: none;
  }
`
export default Footer
