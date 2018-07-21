import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import P from 'prop-types'

class Button extends Component {
  static propTypes = {
    to: P.string,
    children: P.node,
    style: P.object
  }
  render() {
    const { children, to, style } = this.props
    return (
      <Link style={{ border: 'none' }} to={to}>
        <ButtonContainer style={style}>{children}</ButtonContainer>
      </Link>
    )
  }
}

export default Button

const ButtonContainer = styled.div`
  border: 1px solid ${props => props.theme.brand};
  border-radius: 4px;
  padding: 8px 20px;
  margin: 1rem 0;
  font-size: 2rem;
  background-color: ${props => props.theme.brand};
  color: ${({ theme: { background } }) => background};
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme: { background } }) => background};
    color: ${props => props.theme.brand};
  }
`
