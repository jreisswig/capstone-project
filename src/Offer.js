import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export default function Offer({ title, showDetail }) {
  return (
    <OfferTags onClick={showDetail}>
      <Link to="/angebotdetail">{title}</Link>
    </OfferTags>
  )
}

const OfferTags = styled.div`
  background: #f3f7f6;
  border-radius: 3px;
  display: inline;
  padding: 3px;
  margin: 5px;
  cursor: default;
  a {
    text-decoration: none;
    cursor: default;
    color: #7d7b7b;
  }
`
