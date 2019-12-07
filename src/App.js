import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Grid from './Grid'
import NewPost from './NewPost'
import Bulletinboard from './Bulletinboard'
import Home from './Home'
import OfferDetailPage from './OfferDetailPage'
import Header from './Header'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
//import postData from './posts.json'
//import offersData from './offers.json'

export default function App() {
  let savedPosts = JSON.parse(localStorage.savedPosts || null) || {}
  const [posts, setPosts] = useState(savedPosts)

  let savedOffers = JSON.parse(localStorage.savedOffers || null) || {}
  const [offers, setOffers] = useState(savedOffers)

  const [selectedOffer, setSelectedOffer] = useState(offers[0])

  useEffect(() => {
    let savedPosts = posts
    savedPosts.time = new Date().getTime()
    localStorage.savedPosts = JSON.stringify(savedPosts)
  }, [posts])

  useEffect(() => {
    let savedOffers = offers
    savedOffers.time = new Date().getTime()
    localStorage.savedOffers = JSON.stringify(savedOffers)
  }, [offers])

  return (
    <Appcontainer>
      <Grid>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home
                offers={offers}
                posts={posts}
                handleOfferClick={index => handleOfferClick(index)}
              ></Home>
            </Route>
            <Route path="/pinnwand">
              <Bulletinboard posts={posts}></Bulletinboard>
            </Route>
            <Route path="/inserieren">
              <NewPost
                handleAddPost={handleAddPost}
                handleAddOffer={handleAddOffer}
              ></NewPost>
            </Route>
            <Route path="/angebotdetail">
              <OfferDetailPage
                title={selectedOffer.title}
                description={selectedOffer.description}
                name={selectedOffer.name}
                phonenumber={selectedOffer.phonenumber}
                email={selectedOffer.email}
              ></OfferDetailPage>
            </Route>

            <Route path="/profil">
              <h2>Profilseite</h2>
            </Route>
          </Switch>

          <Nav />
        </Router>
      </Grid>
    </Appcontainer>
  )

  function handleAddPost(addPost) {
    setPosts([addPost, ...posts])
  }

  function handleAddOffer(addOffer) {
    setOffers([addOffer, ...offers])
  }

  function handleOfferClick(index) {
    setSelectedOffer(offers[index])
  }
}
const Appcontainer = styled.div`
  height: 100vh;
`
