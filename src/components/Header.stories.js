import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Header from './Header'

export default {
  title: 'Header',
  decorators: [withKnobs]
}

export const standard = () => <Header />
