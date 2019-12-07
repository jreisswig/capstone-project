import React from 'react'
import Post from './Post'
import styled from 'styled-components/macro'

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
