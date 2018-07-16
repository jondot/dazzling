import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import DocSearch from '../../docs/search'





class Navigation extends React.Component {
  render() {
    const { style, itemStyle } = this.props
    return (
      <NavContainer style={style}>
        <section>
          {this.props.items.map(
            ({ name, to, href }) =>
              to ? (
                <Link style={itemStyle} className="nav-link" to={to}>
                  {name}
                </Link>
              ) : (
                  <a style={itemStyle} className="nav-link" href={href}>
                    {name}
                  </a>
                )
          )}
          {this.props.docSearch && (
            <DocSearch docSearch={this.props.docSearch} />
          )}
        </section>
      </NavContainer>
    )
  }
}

const NavContainer = styled.div`
  display: flex;
  width: 100%;

  justify-content: flex-end;
  .nav-link {
    font-size: 1.6rem;
    margin-right: 10px;
    color: ${props => props.theme.ink};
  }
  section {
    right: 5rem;
    display: flex;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    section {
      position: relative;
      right: 0;
      margin: 0 auto;
    }
  }
`

export default Navigation
