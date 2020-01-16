import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Pin from './Pin'

export default {
  title: 'Pin',
  decorators: [withKnobs]
}

export const standard = () => <Pin />
