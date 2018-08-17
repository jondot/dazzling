import React from 'react'
import styled from 'styled-components'
import Navigation from '../components/navigation'

class MainHeader extends React.Component {
  render() {
    const { location, navItems } = this.props
    return (
      <SiteContainer>
        <Navigation
          items={navItems}
          docSearch={
            location && location.pathname !== '/' && this.props.docSearch
          }
        />
      </SiteContainer>
    )
  }
}

const SiteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

export default MainHeader
