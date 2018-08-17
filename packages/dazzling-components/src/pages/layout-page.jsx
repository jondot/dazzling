import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

class LayoutPage extends Component {
  render() {
    const { children, config, theme } = this.props
    return (
      <div>
        <Helmet>
          <title>{config.siteTitle}</title>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <ThemeProvider theme={theme}>{children()}</ThemeProvider>
      </div>
    )
  }
}
export default LayoutPage
