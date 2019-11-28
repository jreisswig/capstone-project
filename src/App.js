import React, { useState } from 'react'
import Nav from './Nav'
import Grid from './Grid'
import NewPost from './NewPost'
import Bulletinboard from './Bulletinboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
//import postData from './posts.json'

export default function App() {
  let savedData = JSON.parse(localStorage.savedData || null) || {}
  const [posts, setPosts] = useState(savedData)
  saveData(posts)

  return (
    <Appcontainer>
      <Grid>
        <HeaderStyled></HeaderStyled>
        <Router>
          <Switch>
            <Route exact path="/bulletinboard">
              <Bulletinboard posts={posts}></Bulletinboard>
            </Route>
            <Route path="/newpost">
              <NewPost handleAddPost={handleAddPost}></NewPost>
            </Route>
          </Switch>
          <Nav />
        </Router>
      </Grid>
    </Appcontainer>
  )

  function saveData(posts) {
    savedData = posts
    savedData.time = new Date().getTime()
    localStorage.savedData = JSON.stringify(savedData)
  }

  function handleAddPost(addPost) {
    setPosts([addPost, ...posts])
  }
}
const Appcontainer = styled.div`
  height: 100vh;
`
const HeaderStyled = styled.header`
  background: white;
  box-shadow: 0 2px 2px #f0efef;
  z-index: 1;
`
