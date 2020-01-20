import React from 'react'
import styled from 'styled-components/macro'
import Post from './Post'
import Moment from 'moment'
import 'moment/locale/de'

export default function Bulletinboard({ posts }) {
  return (
    <PostContainer>
      <Paragraph>Hier siehst du die Gesuche deiner Nachbarn.</Paragraph>

      {posts
        .sort(
          (a, b) =>
            new Moment(b.date).format('YYYYMMDD') -
            new Moment(a.date).format('YYYYMMDD')
        )
        .map((post, index) => (
          <Post {...post} key={index} date={post.date} />
        ))}
    </PostContainer>
  )
}

const PostContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  overflow: scroll;
`

const Paragraph = styled.p`
  margin: 0;
`
