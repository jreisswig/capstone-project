import React, { useState } from 'react'
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
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  render()

  return (
    <ProfileContainer>
      {isLoggedIn ? <ProfileDetails /> : <SignIn toggleSignIn={toggleSignIn} />}
    </ProfileContainer>
  )

  function render() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setIsLoggedIn(true)
      } else {
        setIsLoggedIn(false)
      }
    })
  }
}

const ProfileContainer = styled.div``
