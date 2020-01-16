import React from 'react'
import styled from 'styled-components/macro'
import 'firebase/auth'

// import pages
import ProfileDetails from './ProfileDetails'
import SignIn from '../SignIn/SignIn'

export default function Profile({
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
