import React, { Component } from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

class Button extends Component {
  render() {
    const { children, to } = this.props
    return (
      <Link style={{ border: 'none' }} to={to}>
        <ButtonContainer>{children}</ButtonContainer>
      </Link>
    )
  }
}

export default Button

const ButtonContainer = styled.div`
  border: 1px solid ${props => props.theme.brand};
  border-radius: 30px;
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
