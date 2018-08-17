import React from 'react'
import { storiesOf } from '@storybook/react'
import { createMemoryHistory as createHistory } from 'history'
import { Router } from 'react-router'

import Button from './index'
const history = createHistory()

storiesOf('Button', module).add('default', () => (
  <Router history={history}>
    <Button>Go</Button>
  </Router>
))
