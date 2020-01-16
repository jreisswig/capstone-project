import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Categories from './Categories'

export default {
  title: 'Categories',
  decorators: [withKnobs]
}

export const standard = () => <Categories />
