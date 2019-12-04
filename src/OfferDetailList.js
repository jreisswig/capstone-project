import React from 'react'
import styled from 'styled-components/macro'
import OfferDetail from './OfferDetail'

export default function OfferDetailList({ offers, title }) {
  return (
    <OfferDetailContainer>
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

const OfferTitle = styled.p`
  font-weight: bold;
  color: #424242;
  margin-top: 7px;
  margin-bottom: 4px;
`
