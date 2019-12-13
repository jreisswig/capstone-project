import React from 'react'
import NewProfilForm from './NewProfilForm'
import styled from 'styled-components/macro'

export default function Profile({ handleAddUser }) {
  return (
    <ProfileContainer>
      <NewProfilForm handleAddUser={handleAddUser} />
    </ProfileContainer>
  )
}

const ProfileContainer = styled.div`
  padding: 20px;
`
