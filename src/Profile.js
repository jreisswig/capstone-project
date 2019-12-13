import React, { useState } from 'react'
import NewProfilForm from './NewProfilForm'
import ProfileDetails from './ProfileDetails'
import styled from 'styled-components/macro'

export default function Profile({ handleAddUser }) {
  const [hasProfil, setHasProfil] = useState(false)
  return (
    <ProfileContainer>
      {!hasProfil ? (
        <ProfileDetails />
      ) : (
        <NewProfilForm
          handleAddUser={handleAddUser}
          handleState={() => setHasProfil(true)}
        />
      )}
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div``
