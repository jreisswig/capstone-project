import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Form from './Form'

export default {
  title: 'Form',
  decorators: [withKnobs]
}

export const standard = () => <Form />
