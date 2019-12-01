import React from 'react'
import styled from 'styled-components/macro'

export default function Offer({ title }) {
  return <OfferTags>{title}</OfferTags>
}
const OfferTags = styled.div`
  background: #f3f7f6;
  border-radius: 3px;
  display: inline;
  padding: 3px;
  margin: 5px;
`
