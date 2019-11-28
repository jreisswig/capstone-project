import React from 'react'
import styled from 'styled-components/macro'

export default function Offer({ title }) {
  return <OfferTags>{title}</OfferTags>
}
const OfferTags = styled.div`
  background: #e4f9f5;
  border-radius: 3px;
  display: inline;
  padding: 3px;
  margin: 5px;
`
