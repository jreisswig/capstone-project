import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'

import Nav from './Nav'

export default {
  title: 'Nav',
  decorators: [withKnobs]
}

export const standard = () => <Nav />
