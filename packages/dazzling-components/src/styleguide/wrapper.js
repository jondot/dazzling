import styled, { ThemeProvider } from 'styled-components'

import React, { Component } from 'react'

const { createMemoryHistory: createHistory } = require('history')
const { Router } = require('react-router')
const history = createHistory()
const Container = styled.div`
  font-family: 'Open Sans';
  font-size: 10px;
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2rem;
  }
`
export default class Wrapper extends Component {
  render() {
    return (
      <Router history={history}>
        <ThemeProvider
          theme={{
            // named colors:
            bodyFontFamily: 'Open Sans',
            titleFontFamily: 'Muli',
            background: '#fff',
            brand: '#408AFA',
            brandSecondary: '#8b8f94',
            ink: '#333',
            inkDark: '#35495E',
            inkLight: '#f9fbfd',
            inkSelected: '#2097e4',
            // content width:
            contentWidthLaptop: '680px',
            sitePadding: '20px'
          }}
        >
          <Container>{this.props.children}</Container>
        </ThemeProvider>
      </Router>
    )
  }
}
