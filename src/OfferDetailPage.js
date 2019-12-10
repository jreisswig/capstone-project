import React, { useState } from 'react'
import styled from 'styled-components/macro'
import OfferDetail from './OfferDetail'
import HausUndGarten from './images/HausUndGarten.svg'
import Boot from './images/Boot.svg'
import { useLocation } from 'react-router-dom'
export default function OfferDetailPage({ offers, date }) {
  const [isCategory, setIsCategory] = useState('')
  const { pathname } = useLocation()
  const id = pathname.substring(15)
  const index = offers.findIndex(el => el.id === id)
  console.log(index)
  const offer = offers[index] /* || loading[0] */
  return (
    <OfferDetailContainer>
      <CategorieHeader>
        <CategoryImage>
          {isCategory === '' && changeCategoryImage(offer.category)}
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
        <Date datetime={date}>{offer.date}</Date>
        <OfferTitle>
          <Title>{offer.title}</Title>
        </OfferTitle>
        <OfferDetail
          description={offer.description}
          name={offer.name}
          phonenumber={offer.phonenumber}
          email={offer.email}
          isBookmarked={offer.isBookmarked}
          id={offer.id}
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
  z-index: 2;
`
const OfferContent = styled.div`
  position: relative;
  padding: 20px;
  background-color: #f3f7f6;

  padding: 3px 15px;
  box-shadow: 0 5px 5px #f0efef;
`
const Date = styled.time`
  position: absolute;
  top: 13px;
  right: 11px;
`

const OfferTitle = styled.div`
  margin: 7px 35px;
`
const Title = styled.h2`
  font-weight: bold;
  color: #424242;
`
