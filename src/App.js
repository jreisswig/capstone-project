import React, { useState } from 'react'
import Nav from './Nav'
import Grid from './Grid'
import NewPost from './NewPost'
import Bulletinboard from './Bulletinboard'
import Home from './Home'
import Header from './Header'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
//import postData from './posts.json'
import offersData from './offers.json'

export default function App() {
  let savedData = JSON.parse(localStorage.savedData || null) || {}
  const [posts, setPosts] = useState(savedData)
  saveData(posts)

  const [offers] = useState(offersData)

  return (
    <Appcontainer>
      <Grid>
        <Header/>

        <Router>
          <Switch>
            <Route exact path="/">
              <Home offers={offers} posts={posts}></Home>
            </Route>
            <Route path="/bulletinboard">
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
