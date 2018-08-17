import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import { Avatar } from '../lib'
console.log(Avatar)

storiesOf('lib', module).add('avatar', () => <Avatar />)

