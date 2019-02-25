import React from 'react'
import { storiesOf } from '@storybook/react'
// import {
//   withKnobs, text,
// } from '@storybook/addon-knobs'

import Input from './index'

const stories = storiesOf('Input', module)

// stories.addDecorator(withKnobs)

stories
  .add('default', () => (
    <div
      style={{
        'display': 'grid',
        'gridTemplateColumns': '1fr 1fr 1fr 1fr',
        'gridTemplateRows': '1fr',
        'gridGap': '16px',
        'padding': '24px',
        '--container-bg': '#fff',
      }}
    >
      <div>
        <Input label="Default" placeholder="Placeholder" />
      </div>
      <div>
        <Input type="primary" label="Primary" value="Primary" />
      </div>
      <div>
        <Input type="secondary" label="Secondary" value="Secondary" />
      </div>
    </div>
  ))
