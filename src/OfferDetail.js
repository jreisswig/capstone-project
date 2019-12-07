import React from 'react'
import styled from 'styled-components/macro'

export default function OfferDetail({ description, name, phonenumber, email }) {
  return (
    <OfferWrapper>
      <OfferSearch>ICH BIETE</OfferSearch>

      <OfferDescription>{description}</OfferDescription>

      <OfferName>{name}</OfferName>
      <ContactWrapper>
        <OfferPhone href="tel: {phonenumber}"> {phonenumber} </OfferPhone>
        <p>•</p>
        <OfferMail href="mailto:{email}">{email}</OfferMail>
      </ContactWrapper>
      <Line />
    </OfferWrapper>
  )
}
const OfferWrapper = styled.div``

const OfferDescription = styled.p`
  padding-bottom: 20px;
  padding-top: 20px;
`
const OfferSearch = styled.p`
  font-weight: lighter;
  margin-top: 6px;
  margin-bottom: 6px;
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
