import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Hero>{this.props.name}</Hero>
        <Links>
          {this.props.nav.map(
            ({ name, to, href }) =>
              to ? (
                <FooterLink to={to}>{name}</FooterLink>
              ) : (
                <FooterHref href={href}>{name}</FooterHref>
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
  padding: 1rem;
  font-weight: 300;
`
const Links = styled.div`
  flex: 0.5;
  text-align: left;
  padding: 1rem;
  border-left: ${({ theme: { background } }) => `1px solid ${background}`};
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
