import { configure } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import '../src/layouts/common.css'
import '../src/customization/default.css'

const src = require.context('../src', true, /.stories.js$/)

function loadStories() {
  src.keys().forEach(filename => src(filename))
}

configure(loadStories, module)
