import React from 'react'
import Post from './Post'
import styled from 'styled-components/macro'
import postData from './posts.json'

export default function Bulletinboard() {
  return (
    <PostContainer>
      {postData.map((post, index) => (
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
