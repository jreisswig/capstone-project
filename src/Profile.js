import React, { useState, useEffect } from 'react'
import Registration from './Registration'
import ProfileDetails from './ProfileDetails'
import SignIn from './SignIn'
import styled from 'styled-components/macro'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default function Profile({
  handleAddUser,
  handleSignUp,
  toggleSignIn,
  initApp
}) {
  const [logedinUser, setLogedinUser] = useState(null)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user.displayName)
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
        <ProfileDetails />
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

const ProfileContainer = styled.div``
