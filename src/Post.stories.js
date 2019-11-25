import React from 'react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'

import Post from './Post'
import styled from 'styled-components/macro'

export default {
  title: 'Post',
  decorators: [withKnobs]
}

export const standard = () => <Post />
