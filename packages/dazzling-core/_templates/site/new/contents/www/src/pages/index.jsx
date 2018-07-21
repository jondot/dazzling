import React, { Component } from 'react'
import { LandingPage, Shell, withAssets } from 'dazzling-components'
import c from '../../site-config'

const config = withAssets(_ => require(`../assets/${_}`))(c)

export default class Index extends Component {
  render() {
    return (
      <LandingPage config={config} {...this.props}>
        <Shell dark style={{ margin: '8rem auto 5rem auto' }}>
          <Shell.Cmd>$ yarn add foo-bar</Shell.Cmd>
          <Shell.Success>foo-bar installed!</Shell.Success>
        </Shell>
      </LandingPage>
    )
  }
}
