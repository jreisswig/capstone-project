import React from 'react'
import Nav from './Nav'
import Grid from './Grid'
import NewPost from './NewPost'
import Bulletinboard from './Bulletinboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function App() {
  return (
    <Appcontainer>
      <Grid>
        <HeaderStyled></HeaderStyled>
        <Router>
          <Switch>
            <Route
              exact
              path="/bulletinboard"
              component={Bulletinboard}
            ></Route>
            <Route path="/newpost" component={NewPost}></Route>
          </Switch>
          <Nav />
        </Router>
      </Grid>
    </Appcontainer>
  )
}
const Appcontainer = styled.div`
  height: 100vh;
`
const HeaderStyled = styled.header`
  background: white;
  box-shadow: 0 2px 2px #f0efef;
  z-index: 1;
`
