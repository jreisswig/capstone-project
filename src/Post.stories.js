import React from 'react'
import { withKnobs, text, number } from '@storybook/addon-knobs'

import Post from './Post'

export default {
  title: 'Post',
  decorators: [withKnobs]
}

export const standard = () => (
  <Post
    title={text('Title', 'This is the title')}
    description={text('description', 'This is the description')}
    name={text('name', 'This is the name')}
    phonenumber={string('phonenumber', '0160/ 98723883')}
    email={text('email', 'This is the email')}
  />
)
