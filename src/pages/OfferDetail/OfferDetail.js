import React from 'react'
import styled from 'styled-components/macro'
import Bookmark from '../../components/Bookmark'

import 'firebase/auth'

export default function OfferDetail({
  description,
  name,
  phonenumber,
  email,
  isBookmarked,
  toggleBookmarked
}) {
  return (
    <OfferWrapper>
      <OfferSearch>ICH BIETE</OfferSearch>
      <Bookmark
        isBookmarked={isBookmarked}
        toggleBookmarked={toggleBookmarked}
      />
      <OfferDescription>{description}</OfferDescription>
      <Line />
      <OfferName>{name}</OfferName>
      <ContactWrapper>
        <OfferPhone href="tel: {phonenumber}"> {phonenumber} </OfferPhone>
        <p>•</p>
        <OfferMail href="mailto:{email}">{email}</OfferMail>
      </ContactWrapper>
      <Line />
      <Contactlist>
        {phonenumber !== '' && <Tab href="tel: {phonenumber}">Anrufen</Tab>}
        {email !== '' && <Tab href="mailto:{email}">Email schreiben</Tab>}
      </Contactlist>
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
const Tab = styled.a`
  background: #7aaca2;
  color: white;
  padding: 9px;
  border-radius: 3px;
  text-decoration: none;
`
const Contactlist = styled.div`
  display: grid;
  grid-auto-flow: column;
  width: 100%;
  gap: 10px;
  padding-bottom: 3px;
  margin-top: 32px;
`
