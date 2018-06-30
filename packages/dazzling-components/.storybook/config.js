import { configure, setAddon, addDecorator } from '@storybook/react'

//addDecorator(withInfo())
//import 'storybook-addon-specifications/register';
//import chaptersAddon from 'react-storybook-addon-chapters';
//import 'storybook-addon-jsx/register';
//setAddon(chaptersAddon)
import { setDefaults } from '@storybook/addon-info'
import chaptersAddon from 'react-storybook-addon-chapters'
setAddon(chaptersAddon)

// addon-info
setDefaults({
  inline: true, // Toggles display of header with component name and description
  styles: {
    infoBody: {
      boxShadow: null,
      border: null
    }
  }
})

// automatically import all files ending in *.stories.js
const components = require.context('../src/components', true, /.stories.js$/)
function loadComponents() {
  components.keys().forEach(filename => components(filename))
}
const dist = require.context('../stories', true, /.stories.js$/)
function loadStories() {
  dist.keys().forEach(filename => dist(filename))
}

configure(loadComponents, module)
configure(loadStories, module)
