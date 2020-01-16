import React from 'react'
import styled from 'styled-components/macro'
import Bookmark from './Bookmark'
import { user } from './services/constants'
import * as firebase from 'firebase/app'
/* import * as admin from 'firebase-admin' */
import 'firebase/auth'
export default function OfferDetail({
  offer,
  description,
  name,
  phonenumber,
  email,
  isBookmarked,
  userid,
  toggleBookmarked
}) {
  /* admin
    .auth()
    .getUser(userid)
    .then(function(userRecord) {
      // See the UserRecord reference doc for the contents of userRecord.
      console.log('Successfully fetched user data:', userRecord.toJSON())
    })
    .catch(function(error) {
      console.log('Error fetching user data:', error)
    }) */

  return (
    <OfferWrapper>
      <OfferSearch>ICH BIETE</OfferSearch>
      <Bookmark
        isBookmarked={isBookmarked}
        toggleBookmarked={toggleBookmarked}
      />
      <OfferDescription>{description}</OfferDescription>

      <OfferName>{name}</OfferName>
      <ContactWrapper>
        <Image src={''} alt="profilbild" />

        <OfferPhone href="tel: {phonenumber}"> {phonenumber} </OfferPhone>
        <p>•</p>
        <OfferMail href="mailto:{email}">{email}</OfferMail>
      </ContactWrapper>
      <Line />
    </OfferWrapper>
  )
}
const OfferWrapper = styled.div`
  margin-top: 24px;
`

const OfferDescription = styled.p`
  padding: 20px 0;
`
const OfferSearch = styled.p`
  font-weight: lighter;
  margin: 6 px 0;
`
const OfferName = styled.p`
  color: #424242;
  margin-top: 3px;
  margin-bottom: 0px;
`
const OfferPhone = styled.a`
  padding-right: 7px;
  text-decoration: none;
  color: #7d7b7b;
`

const OfferMail = styled.a`
  padding-left: 7px;
  text-decoration: none;
  color: #7d7b7b;
`

const ContactWrapper = styled.section`
  display: flex;
  margin-top: 3px;
  margin-bottom: 20px;
  p {
    margin: 0;
  }
`
const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(90deg, rgba(123,172,160,0.5088235123150823) 0%, rgba(123,172,160,1) 48%, rgba(123,172,160,0.5144257532114409) 100%);
  );
`
const Image = styled.img`
  height: 55px;
  width: 55px;
  border-radius: 50%;
`
