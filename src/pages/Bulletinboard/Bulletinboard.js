import React from 'react'
import styled from 'styled-components/macro'
import Post from './Post'

export default function Bulletinboard({ posts }) {
  return (
    <PostContainer>
      <Paragraph>Hier siehst du die Gesuche deiner Nachbarn.</Paragraph>

      {posts.map((post, index) => (
        <Post {...post} key={index} />
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
