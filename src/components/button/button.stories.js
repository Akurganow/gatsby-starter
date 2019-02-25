import React from 'react'
import { storiesOf } from '@storybook/react'
// import {
//   withKnobs, text,
// } from '@storybook/addon-knobs/react'

import Button from './index'

const stories = storiesOf('Button', module)

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
        <Button label="Default">Default button</Button>
      </div>
      <div>
        <Button type="primary" label="Primary">Primary button</Button>
      </div>
      <div>
        <Button type="secondary" label="Secondary">Secondary button</Button>
      </div>
    </div>
  ))
  .add('transparent', () => (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr',
        gridGap: '16px',
        padding: '24px',
      }}
    >
      <div>
        <Button type="transparent" label="Transparent default">Transparent default</Button>
      </div>
      <div>
        <Button type={['transparent', 'primary']} label="Transparent primary">Transparent primary</Button>
      </div>
      <div>
        <Button type={['transparent', 'secondary']} label="Transparent secondary">Transparent secondary</Button>
      </div>
    </div>
  ))
