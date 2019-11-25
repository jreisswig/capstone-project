import React from 'react'
import postData from './posts.json'
import Post from './Post'
import styled from 'styled-components/macro'

export default function App() {
  return (
    <div className="App">
      <PostContainer>
        {postData.map((post, index) => (
          <Post
            title={post.title}
            description={post.description}
            name={post.name}
            telnumber={post.telnumber}
            email={post.email}
            key={index}
          />
        ))}
      </PostContainer>
    </div>
  )
}

const PostContainer = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
  overflow: scroll;
`
