import React, { useState } from 'react'
import styled from 'styled-components/macro'
import OfferDetail from './OfferDetail'
import HausUndGarten from './images/HausUndGarten.svg'
import Boot from './images/Boot.svg'

export default function OfferDetailPage({
  title,
  description,
  name,
  phonenumber,
  email,
  category,
  isBookmarked
}) {
  const [isCategory, setIsCategory] = useState('')

  return (
    <OfferDetailContainer>
      <CategorieHeader>
        <CategoryImage>
          {isCategory === '' && changeCategoryImage(category)}
          {isCategory === 'Haus und Garten' && (
            <img
              src={HausUndGarten}
              alt="Haus und Garten"
              height="130px"
              width="130px"
            />
          )}
          {isCategory === 'Auto, Rad und Boot' && (
            <img
              src={Boot}
              alt="Auto, Rad und Boot"
              height="130px"
              width="130px"
            />
          )}
          {isCategory === 'Familie, Kind und Tier' && (
            <img
              src=""
              alt="Familie, Kind und Tier"
              height="130px"
              width="130px"
            />
          )}
          {isCategory === 'Freizeit und Hobby' && (
            <img src="" alt="Freizeit und Hobby" height="130px" width="130px" />
          )}
          {isCategory === 'Elektro' && (
            <img src="" alt="Elektro" height="130px" width="130px" />
          )}
          {isCategory === 'Werkzeuge' && (
            <img src="" alt="Werkzeuge" height="130px" width="130px" />
          )}
        </CategoryImage>
      </CategorieHeader>
      <OfferContent>
        <OfferTitle>
          <Title>{title}</Title>
        </OfferTitle>
        <OfferDetail
          description={description}
          name={name}
          phonenumber={phonenumber}
          email={email}
          isBookmarked={isBookmarked}
        />
      </OfferContent>
    </OfferDetailContainer>
  )
  function changeCategoryImage(categoryname) {
    setIsCategory(categoryname)
  }
}

const OfferDetailContainer = styled.section`
  margin: 20px;
  display: grid;
  overflow: scroll;
  border-radius: 20px;
  background-color: #f3f7f6;
`
const CategorieHeader = styled.div`
  position: relative;
  background: rgb(228, 245, 240);
  background: linear-gradient(
    180deg,
    rgba(228, 245, 240, 1) 0%,
    rgba(196, 231, 220, 1) 100%
  );
`
const CategoryImage = styled.div`
  position: absolute;
  left: 32%;
  bottom: -17px;
`
const OfferContent = styled.div`
  padding: 20px;
  background-color: #f3f7f6;

  padding: 3px 15px;
  box-shadow: 0 5px 5px #f0efef;
`

const OfferTitle = styled.div`
  margin: 7px 35px;
`
const Title = styled.h2`
  font-weight: bold;
  color: #424242;
`
