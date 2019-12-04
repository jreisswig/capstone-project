import React from 'react'
import styled from 'styled-components/macro'
import OfferDetail from './OfferDetail'
import ArrowBack from './images/arrow_back_ios.svg'
import { Link } from 'react-router-dom'

export default function OfferDetailList({ offers, title }) {
  return (
    <OfferDetailContainer>
      <Link to="/">
        <img src={ArrowBack} alt="ArrowBack" height="15px" width="15px"></img>
      </Link>

      <OfferSearch>ICH BIETE</OfferSearch>
      <OfferTitle>{title}</OfferTitle>
      {offers.map((offer, index) => (
        <OfferDetail {...offer} key={index} />
      ))}
    </OfferDetailContainer>
  )
}

const OfferDetailContainer = styled.section`
  margin: 20px;
  display: grid;
  padding: 20px;
  overflow: scroll;
  background-color: #f3f7f6;
  border-radius: 18px;
  padding: 3px 15px;
  box-shadow: 0 5px 5px #f0efef;
`
const OfferSearch = styled.p`
  font-weight: lighter;
  margin-top: 6px;
  margin-bottom: 6px;
`
const OfferTitle = styled.p`
  font-weight: bold;
  color: #424242;
  margin-top: 7px;
  margin-bottom: 4px;
`
