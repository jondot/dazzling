import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import BrandedLink from '../branded-link'
import FeatureSection from './index'

storiesOf('FeatureSection', module)
  .add('default', () => (
    <FeatureSection
      style={{ padding: 20, background: 'black' }}
      imageStyle={{ background: 'fuchsia' }}
      contentStyle={{ background: 'gray' }}
      contentFlex={0.5}
      image="https://placehold.it/200x200"
      imageToTheRight
    >
      <h2>A feature title</h2>
      <p>Some description</p>
      <BrandedLink href="getting-started">Go</BrandedLink>
    </FeatureSection>
  ))
  .add('with-feature', () => (
    <FeatureSection
      style={{ padding: 20, background: 'black' }}
      imageStyle={{ background: 'fuchsia' }}
      contentStyle={{ background: 'gray' }}
      contentFlex={0.5}
      image="https://placehold.it/200x200"
      imageToTheRight
    >
      <FeatureSection.Feature
        title="A title"
        link={{ to: 'foobar', name: 'Foo' }}
      >
        some description
      </FeatureSection.Feature>
    </FeatureSection>
  ))
