import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import Bookmark from './Bookmark'

export default function Offer({
  title,
  description,
  toggleBookmarked,
  isBookmarked,
  id
}) {
  return (
    <OfferTags>
      <Bookmark
        toggleBookmarked={toggleBookmarked}
        isBookmarked={isBookmarked}
      ></Bookmark>

      <Link to={`/angebotdetail/${id}`} key={id}>
        <Title> {title}</Title>
        <Content>{description}</Content>
      </Link>
      <Line />
    </OfferTags>
  )
}

const OfferTags = styled.div`
  position: relative;
  background: #f3f7f6;
  border-radius: 3px;
  display: inline;
  padding: 3px 9px;
  margin: 5px 0;
  width: 100%;
  cursor: default;
  a {
    text-decoration: none;
    cursor: default;
    color: #7d7b7b;
  }
`
const Title = styled.h4`
  margin: 4px 0;
`
const Content = styled.div``

const Line = styled.hr`
  
border: 0;
  height: 1px;
  background-image: linear-gradient(90deg, rgba(123,172,160,0.5088235123150823) 0%, rgba(123,172,160,1) 48%, rgba(123,172,160,0.5144257532114409) 100%);
  );
`
