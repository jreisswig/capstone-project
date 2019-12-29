import React, { useState, useEffect } from 'react'

import ProfileDetails from './ProfileDetails'
import SignIn from './SignIn'
import styled from 'styled-components/macro'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default function Profile({
  handleAddUser,
  handleSignUp,
  toggleSignIn,
  initApp,
  offers,
  posts,
  toggleBookmarked,
  deleteOffer
}) {
  const [logedinUser, setLogedinUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setLogedinUser(user)
      } else {
        setLogedinUser(user)
      }
    })
  }, [])

  return (
    <ProfileContainer>
      {logedinUser ? (
        <ProfileDetails
          offers={offers}
          posts={posts}
          toggleBookmarked={toggleBookmarked}
          deleteOffer={deleteOffer}
        />
      ) : (
        <SignIn toggleSignIn={toggleSignIn} />
      )}
    </ProfileContainer>
  )

  /*  function render() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
  } */
}

const ProfileContainer = styled.section`
  padding: 20px;
  overflow: scroll;
`
