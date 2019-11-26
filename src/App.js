import React from 'react'
import Nav from './Nav'
import Grid from './Grid'
import Form from './Form'
import Bulletinboard from './Bulletinboard'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function App() {
  return (
    <Appcontainer>
      <Grid>
        <div>Header</div>
        <Router>
          <Switch>
            <Route
              exact
              path="/bulletinboard"
              component={Bulletinboard}
            ></Route>
            <Route path="/newpost" component={Form}></Route>
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
