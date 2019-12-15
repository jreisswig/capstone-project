import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Grid from './Grid'
import NewPost from './NewPost'
import Bulletinboard from './Bulletinboard'
import Home from './Home'
import OfferDetailPage from './OfferDetailPage'
import Header from './Header'
import Profile from './Profile'
import Registration from './Registration'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
import 'firebase/auth'
import * as firebase from 'firebase/app'
import { signUp, writeUserData, update } from './services/firebase'
import {db} from './services/constants'


export default function App() {
  let savedPosts = JSON.parse(localStorage.savedPosts || null) || {}
  const [posts, setPosts] = useState(savedPosts)

  let savedOffers = JSON.parse(localStorage.savedOffers || null) || {}
  const [offers, setOffers] = useState(savedOffers)

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
                toggleBookmarked={id => toggleBookmarked(id)}
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
            <Route exact path={`/angebotdetail/:id`}>
              <OfferDetailPage
                offers={offers}
                toggleBookmarked={id => toggleBookmarked(id)}
              ></OfferDetailPage>
            </Route>
            <Route path="/profil">
              <Profile
                handleAddUser={handleAddUser}
                handleSignUp={handleSignUp}
              />
            </Route>

            <Route path="/registrieren">
              <Registration handleSignUp={handleSignUp} />
            </Route>
          </Switch>

          <Nav />
        </Router>
      </Grid>
    </Appcontainer>
  )

  function handleSignUp(name) {
    const email = document.getElementById('useremail').value
    const password = document.getElementById('userpassword').value
    //const name = document.getElementById('username').value
    //const phonenumber = document.getElementById('userphonenumber').value

    if (email.length < 4) {
      alert('Bitte gebe eine EmailAdresse an.')
      return
    }
    if (password.length < 4) {
      alert('Bitte gebe ein Passwort ein.')
      return
    }
    signUp(email, password)
    ////////

    /* const user = firebase.auth().currentUser
    user
      .updateProfile({
        displayName: name
      })
      .then(function() {
        // Update successful.
      })
      .catch(function(error) {
        // An error happened.
      })
 */
    //update()

    //handleAddUser(email, password, name, phonenumber)
    //writeUserData(email, password, name, phonenumber)
    //window.location.href = `/profil`
  }

  function handleAddPost(addPost) {
    setPosts([addPost, ...posts])
    db.collection('Posts')
      .add(addPost)
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  }

  function handleAddOffer(addOffer) {
    setOffers([addOffer, ...offers])
    db.collection('Offers')
      .add(addOffer)
      .then(function(docRef) {
        console.log('Document written with ID: ', docRef.id)
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  }

  function handleAddUser(email, password, name, phonenumber) {
    db.collection('users')
      .add({
        name: name,
        email: email,
        phonenumber: phonenumber,
        password: password
      })
      .then(function(dataUser) {
        console.log('Document written with ID: ', dataUser.id)
      })
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  }

  function toggleBookmarked(id) {
    const index = offers.findIndex(el => el.id === id)
    const offer = offers[index]
    setOffers([
      ...offers.slice(0, index),
      { ...offer, isBookmarked: !offer.isBookmarked },
      ...offers.slice(index + 1)
    ])
  }
}

const Appcontainer = styled.div`
  height: 100vh;
`
