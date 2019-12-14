import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import Grid from './Grid'
import NewPost from './NewPost'
import Bulletinboard from './Bulletinboard'
import Home from './Home'
import OfferDetailPage from './OfferDetailPage'
import Header from './Header'
import Profile from './Profile'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import styled from 'styled-components/macro'
//import postData from './posts.json'
//import offersData from './offers.json'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC1DS8tlqAeLKB3Uj9fakcvMUwhalWV2oo',
  authDomain: 'hallodorf-37e4f.firebaseapp.com',
  databaseURL: 'https://hallodorf-37e4f.firebaseio.com',
  projectId: 'hallodorf-37e4f',
  storageBucket: 'hallodorf-37e4f.appspot.com',
  messagingSenderId: '212112447808',
  appId: '1:212112447808:web:56a817d1040990578fc2a5',
  measurementId: 'G-4Y2JQMDZJY'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()

export default function App() {
  const docRef = db.collection('Offers').doc('IHLUCy8hwRiL7bm9Tqn6')
  /* const dataUser = db.collection('users').doc('XeNx1MAedu3wQN0B3dRn ')

  dataUser
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log('Document data:', doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    })
    .catch(function(error) {
      console.log('Error getting document:', error)
    }) */

  docRef
    .get()
    .then(function(doc) {
      if (doc.exists) {
        console.log('Document data:', doc.data())
      } else {
        // doc.data() will be undefined in this case
        console.log('No such document!')
      }
    })
    .catch(function(error) {
      console.log('Error getting document:', error)
    })

  /////////

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
            <Route path={`/profil`}>
              <Profile
                handleAddUser={handleAddUser}
                handleSignUp={handleSignUp}
                toggleSignIn={toggleSignIn}
              />
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
  ///////////Firebase

  function toggleSignIn() {
    const email = document.getElementById('loginuseremail').value
    const password = document.getElementById('loginuserpassword').value
    if (email.length < 4) {
      alert('Bitte gebe eine Email Adresse ein.')
      return
    }
    if (password.length < 4) {
      alert('Bitte gebe ein Passwort ein.')
      return
    }

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch(function(error) {
        var errorCode = error.code
        var errorMessage = error.message
        // [START_EXCLUDE]
        if (errorCode === 'auth/wrong-password') {
          alert('Falsches Passwort.')
        } else {
          alert(errorMessage)
        }
        console.log(error)
        document.getElementById('quickstart-sign-in').disabled = false
        // [END_EXCLUDE]
      })

    document.getElementById('quickstart-sign-in').disabled = true
  }

  function handleSignUp() {
    const email = document.getElementById('useremail').value
    const password = document.getElementById('userpassword').value
    if (email.length < 4) {
      alert('Bitte gebe eine EmailAdresse an.')
      return
    }
    if (password.length < 4) {
      alert('Bitte gebe ein Passwort ein.')
      return
    }
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code
        var errorMessage = error.message
        // [START_EXCLUDE]
        if (errorCode === 'auth/weak-password') {
          alert('Wähle ein stärkeres Passwort')
        } else {
          alert(errorMessage)
        }
        console.log(error)
        // [END_EXCLUDE]
      })
  }
  //////////////////////// firebase end

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

  function handleAddUser(addUser) {
    db.collection('users')
      .add(addUser)
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
