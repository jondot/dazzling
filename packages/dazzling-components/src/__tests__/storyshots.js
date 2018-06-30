import path from 'path'
import initStoryshots, { imageSnapshot } from '@storybook/addon-storyshots'
initStoryshots({
  suite: 'Image storyshots',
  test: imageSnapshot({
    storybookUrl: `file://${path.join(__dirname, '../../')}storybook-static`
  })
})
