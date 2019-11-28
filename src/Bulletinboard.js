import React from 'react'
import Post from './Post'
import styled from 'styled-components/macro'

export default function Bulletinboard({ posts }) {
  return (
    <PostContainer>
      <Headline2>Pinnwand</Headline2>
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
const Headline2 = styled.h2`
  margin: 0;
`
const Paragraph = styled.p`
  margin: 0;
`
