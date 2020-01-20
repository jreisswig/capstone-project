//// import utils
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import 'firebase/auth'
import * as firebase from 'firebase/app'
import { logout } from '../../services/firebase'
import Moment from 'moment'

//// import components
import MyBookmarkedOffer from './MyBookmarkedOffer'
import MyOffer from './MyOffer'
import MyPost from './MyPost'
import AddImage from '../../components/AddImage'

export default function ProfileDetails({
  offers,
  posts,
  toggleBookmarked,
  deleteOffer,
  deletePost
}) {
  const user = firebase.auth().currentUser
  const creationDate = user.metadata.creationTime
  const creationTime = new Moment(creationDate).format('L')
  const bookmarkedOffers = filterbookmarked(offers)
  const filteredPersonalOffers = filterPersonalOffer(offers)
  const filteredPersonalPosts = filterPersonalPosts(posts)
  const [isClicked, setIsClicked] = useState('')
  const [changeIsClicked, setChangeIsClicked] = useState(false)

  return (
    <div>
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
          {changeIsClicked === true ? (
            <AddImage />
          ) : user && user.photoURL != null ? (
            <div>
              <Image src={user.photoURL} alt="profilbild" />
              <p
                onClick={() => {
                  setChangeIsClicked(true)
                }}
              >
                ändern
              </p>
            </div>
          ) : (
            <AddImage />
          )}
        </ProfileImage>
        <UserInfos>
          <Name>Hallo {user.displayName}</Name>
          <div>{user.email}</div>
          <Flex>
            <div>Registriert seit: {creationTime}</div>
            <Logout onClick={logout}>
              <p>Logout</p>
            </Logout>
          </Flex>
        </UserInfos>
      </ProfileInfos>

      <Line />

      {isClicked === 'Bookmarklist' ? (
        <RenderContainer>
          {' '}
          <Headline3>Deine gemerkten Angebote</Headline3>
          <MyPostsContainer>
            {renderBookmarked(bookmarkedOffers)}
          </MyPostsContainer>
        </RenderContainer>
      ) : (
        <RenderContainer>
          <Headline3>Deine Angebote</Headline3>
          <MyPostsContainer>
            {renderPersonalOffer(filteredPersonalOffers)}
          </MyPostsContainer>
          <Line />
          <Headline3>Deine Gesuche</Headline3>
          <MyPostsContainer>
            {renderPersonalPosts(filteredPersonalPosts)}
          </MyPostsContainer>
          <Line />
        </RenderContainer>
      )}
    </div>
  )
  function filterbookmarked(offers) {
    return offers.filter(offer => offer.isBookmarked.includes(user.uid))
  }

  function renderBookmarked(bookmarkedOffers) {
    return bookmarkedOffers.length ? (
      bookmarkedOffers
        .sort(
          (a, b) =>
            new Moment(b.date).format('YYYYMMDD') -
            new Moment(a.date).format('YYYYMMDD')
        )
        .map((offer, index) => (
          <MyBookmarkedOffer
            {...offer}
            key={index}
            isBookmarked={offer.isBookmarked}
            toggleBookmarked={() => toggleBookmarked(offer.id)}
          />
        ))
    ) : (
      <Message>Du hast im Moment keine gemerkten Angebote.</Message>
    )
  }

  function filterPersonalOffer(offers) {
    return offers.filter(offer => offer.userid === user.uid)
  }

  function renderPersonalOffer(filteredPersonalOffers) {
    return filteredPersonalOffers.length ? (
      filteredPersonalOffers
        .sort(
          (a, b) =>
            new Moment(b.date).format('YYYYMMDD') -
            new Moment(a.date).format('YYYYMMDD')
        )
        .map((offer, index) => (
          <MyOffer
            {...offer}
            key={index}
            isBookmarked={offer.isBookmarked}
            toggleBookmarked={() => toggleBookmarked(offer.id)}
            deleteOffer={() => deleteOffer(offer.id)}
          />
        ))
    ) : (
      <Message>Du hast im Moment keine Angebote online.</Message>
    )
  }

  function filterPersonalPosts(posts) {
    return posts.filter(post => post.userid === user.uid)
  }

  function renderPersonalPosts(filteredPersonalPosts) {
    return filteredPersonalPosts.length ? (
      filteredPersonalPosts
        .sort(
          (a, b) =>
            new Moment(b.date).format('YYYYMMDD') -
            new Moment(a.date).format('YYYYMMDD')
        )
        .map((post, index) => (
          <MyPost
            {...post}
            key={index}
            deletePost={() => deletePost(post.id)}
          />
        ))
    ) : (
      <Message>Du hast im Moment keine Gesuche online.</Message>
    )
  }
}

const Tab = styled.div`
  background: #7aaca2;
  color: white;
  padding: 9px;
  border-radius: 3px;
  cursor: default;
`
const Tablist = styled.div`
  position: relative;
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
  padding-bottom: 3px;
  background: white;
  position: sticky;
    top: -17px;
    z-index: 10;
`
const Logout = styled.div`
  background: #f3f7f6;
  padding: 1px 4px;
  border-radius: 2px;
  cursor: default;
  font-size: 0.9rem;
  p {
    margin: 0;
  }
`
const ProfileInfos = styled.div`
  display: flex;
  height: 20%;
  justify-content: space-between;
`
const ProfileImage = styled.div`
  margin: 10px 15px 0 0;
  width: 100px;
  p {
    margin: 0 0 0 6px;
    cursor: default;
  }
`
const Name = styled.div`
  font-weight: bold;
  margin-top: 12px;
`
const UserInfos = styled.div`
  width: 100%;
  margin-left: 10px;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 9px;
`
const Line = styled.hr`
border: 0;
  height: 1px;
  background-image: linear-gradient(90deg, rgba(123,172,160,0.5088235123150823) 0%, rgba(123,172,160,1) 48%, rgba(123,172,160,0.5144257532114409) 100%);
  );
`
const RenderContainer = styled.section`
  display: flex;
  flex-direction: column;
`
const MyPostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`
const Headline3 = styled.h3`
  font-weight: bold;
  font-size: 1rem;
`
const Image = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 50%;
`
const Message = styled.div`
  margin: 20px 0;
`
