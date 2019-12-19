//// import Utils
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import 'firebase/auth'
import * as firebase from 'firebase/app'
import { logout } from './services/firebase'

//// import picture
import Wappen from './images/WappenSeestermuehe.svg'

//// import components
import Offer from './Offer'
import MyOffer from './MyOffer'
import Post from './Post'

export default function ProfileDetails({ offers, posts, toggleBookmarked }) {
  const user = firebase.auth().currentUser
  const [isClicked, setIsClicked] = useState('')

  return (
    <ProfilDetailsContainer>
      <Tablist>
        <Tab
          onClick={() => {
            setIsClicked('MyPosts')
          }}
          style={{
            background: isClicked !== 'Bookmarklist' && 'rgb(107, 151, 142)'
          }}
        >
          Anzeigen
        </Tab>
        <Tab
          onClick={() => {
            setIsClicked('Bookmarklist')
          }}
          style={{
            background: isClicked === 'Bookmarklist' && 'rgb(107, 151, 142)'
          }}
        >
          Merkliste
        </Tab>
      </Tablist>
      <ProfileInfos>
        <ProfileImage>
          <img src={Wappen} alt="Wappen" height="50px" width="50px" />
        </ProfileImage>
        <UserInfos>
          <Name>Hallo {user.displayName}</Name>
          <Infotext>{user.email}</Infotext>
        </UserInfos>
      </ProfileInfos>
      <Logout onClick={logout}>
        <p>Logout</p>
      </Logout>
      <Line />

      {isClicked === 'Bookmarklist' ? (
        <RenderContainer>
          {' '}
          <Headline3>Meine gemerkten Angebote</Headline3>
          {renderBookmarked(offers)}
        </RenderContainer>
      ) : (
        <MyPostsContainer>
          <Headline3>Meine Angebote</Headline3>
          {renderPersonalOffer(offers)}
          <Line />
          <Headline3>Meine Gesuche</Headline3>
          {renderPersonalPosts(posts)}
          <Line />
        </MyPostsContainer>
      )}
    </ProfilDetailsContainer>
  )

  function renderBookmarked(offers) {
    return offers
      .filter(offer => offer.isBookmarked === true)
      .map((offer, index) => (
        <Offer
          {...offer}
          key={index}
          isBookmarked={offer.isBookmarked}
          toggleBookmarked={() => toggleBookmarked(offer.id)}
        />
      ))
  }

  function renderPersonalOffer(offers) {
    return offers
      .filter(offer => offer.userid === user.uid)
      .map((offer, index) => (
        <MyOffer
          {...offer}
          key={index}
          isBookmarked={offer.isBookmarked}
          toggleBookmarked={() => toggleBookmarked(offer.id)}
        />
      ))
  }

  function renderPersonalPosts(posts) {
    return posts
      .filter(item => item.userid === user.uid)
      .map((post, index) => <Post {...post} key={index} />)
  }
}

const ProfilDetailsContainer = styled.div``

const Tab = styled.div`
  background: #7aaca2;
  color: white;
  padding: 9px;
  border-radius: 3px;
  cursor: default;
`

const Tablist = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  padding-bottom: 3px;
  background: white;
  position: sticky;
    top: -17px;
    z-index: 2;
`
const Logout = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: default;
  p {
    margin: 0;
  }
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
const RenderContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`
const MyPostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Headline3 = styled.h3`
  font-weight: unset;
  font-size: 1rem;
`
