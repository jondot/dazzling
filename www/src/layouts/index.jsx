import React from 'react'
import { LayoutPage } from 'dazzling-components'
import config, { theme } from '../../site-config'
import '../css/index.scss'
import 'dazzling-components/css/docsearch.css'

export default class MainLayout extends React.Component {
  render() {
    return <LayoutPage config={config} theme={theme} {...this.props} />
  }
}
