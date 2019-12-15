import React from 'react'
import Wappen from './images/WappenSeestermuehe.svg'
import styled from 'styled-components/macro'
import 'firebase/auth'
import * as firebase from 'firebase/app'
import { logout, currentUser } from './services/firebase'

export default function ProfileDetails() {
  

const user = firebase.auth().currentUser;




  return (
    <ProfilDetailsContainer>
      <Tablist>
        <Tab>Anzeigen</Tab>
        <Tab>Merkliste</Tab>
      </Tablist>
      <ProfileInfos>
        <ProfileImage>
          <img src={Wappen} alt="Wappen" height="50px" width="50px" />
        </ProfileImage>
        <UserInfos>
          <Name>Hallo {user.displayName}</Name>
          <Infotext>Aktiv seit: Date</Infotext>
        </UserInfos>
      </ProfileInfos>
      <p onClick={logout}> Logout</p>
      <Line />
    </ProfilDetailsContainer>
  )
}

const ProfilDetailsContainer = styled.section`
  padding: 20px;
  overflow: scroll;
`

const Tab = styled.div`
  background: #7aaca2;
  color: white;
  padding: 9px;
`

const Tablist = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

const ProfileInfos = styled.div`
  display: flex;
  height: 20%;
`
const ProfileImage = styled.div`
  margin: 10px 15px 0 0;
`
const Name = styled.div`
  font-weight: bold;
  margin-top: 12px;
`
const Infotext = styled.div``
const UserInfos = styled.div``
const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(90deg, rgba(123,172,160,0.5088235123150823) 0%, rgba(123,172,160,1) 48%, rgba(123,172,160,0.5144257532114409) 100%);
  );
`
