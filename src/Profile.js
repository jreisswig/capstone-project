import React, { useState, useEffect } from 'react'

import ProfileDetails from './ProfileDetails'
import SignIn from './SignIn'
import styled from 'styled-components/macro'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default function Profile({
  handleAddUser,
  handleSignUp,
  initApp,
  offers,
  posts,
  toggleBookmarked,
  deleteOffer,
  deletePost,
  logedinUser
}) {
  return (
    <ProfileContainer>
      {logedinUser ? (
        <ProfileDetails
          offers={offers}
          posts={posts}
          toggleBookmarked={toggleBookmarked}
          deleteOffer={deleteOffer}
          deletePost={deletePost}
        />
      ) : (
        <SignIn />
      )}
    </ProfileContainer>
  )
}

const ProfileContainer = styled.section`
  padding: 20px;
  overflow: scroll;
`
