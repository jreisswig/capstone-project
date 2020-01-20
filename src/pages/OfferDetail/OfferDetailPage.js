// import utils
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useLocation } from 'react-router-dom'
import Moment from 'moment'
import 'moment/locale/de'

// import components
import OfferDetail from './OfferDetail'

// import images
import Home from '../../images/Home.svg'
import Boot from '../../images/BootIcon.svg'
import Family from '../../images/FamilyBig.svg'
import Freizeit from '../../images/Freizeit icon.svg'
import Elektro from '../../images/Elektro2Icon.svg'
import Werkzeug from '../../images/Werkzeug2.svg'
import calendar from '../../images/calendargrey.svg'

export default function OfferDetailPage({ offers, toggleBookmarked }) {
  const [isCategory, setIsCategory] = useState('')
  const { pathname } = useLocation()
  const id = pathname.substring(15)
  const index = offers.findIndex(el => el.id === id)
  const offer = offers[index]
  const localeDate = new Moment(offer.date).format('L')

  return (
    <OfferDetailContainer>
      <CategorieHeader>
        <CategoryImage>
          {isCategory === '' && changeCategoryImage(offer.category)}
          {isCategory === 'Haus & Garten' && (
            <img
              src={Home}
              alt="Haus und Garten"
              height="130px"
              width="130px"
            />
          )}
          {isCategory === 'Auto, Rad & Boot' && (
            <img
              src={Boot}
              alt="Auto, Rad und Boot"
              height="130px"
              width="130px"
            />
          )}
          {isCategory === 'Familie & Tier' && (
            <img
              src={Family}
              alt="Familie, Kind und Tier"
              height="130px"
              width="130px"
            />
          )}
          {isCategory === 'Freizeit & Hobby' && (
            <img
              src={Freizeit}
              alt="Freizeit und Hobby"
              height="130px"
              width="130px"
            />
          )}
          {isCategory === 'Elektro' && (
            <img src={Elektro} alt="Elektro" height="130px" width="130px" />
          )}
          {isCategory === 'Werkzeuge' && (
            <img src={Werkzeug} alt="Werkzeuge" height="130px" width="130px" />
          )}
        </CategoryImage>
      </CategorieHeader>
      <OfferContent>
        <DateFlex>
          <img src={calendar} alt="Kalender" height="12px" width="12px" />
          <Date datetime={localeDate}>{localeDate}</Date>
        </DateFlex>
        <OfferTitle>
          <Title>{offer.title}</Title>
        </OfferTitle>
        <Line />
        <Flex>
          <div>Kategorie</div>
          <div>{isCategory}</div>
        </Flex>
        <Line />
        <OfferDetail
          description={offer.description}
          name={offer.name}
          phonenumber={offer.phonenumber}
          email={offer.email}
          isBookmarked={offer.isBookmarked}
          id={offer.id}
          userid={offer.userid}
          toggleBookmarked={() => toggleBookmarked(offer.id)}
        />
      </OfferContent>
    </OfferDetailContainer>
  )
  function changeCategoryImage(categoryname) {
    setIsCategory(categoryname)
  }
}

const OfferDetailContainer = styled.section`
  position: relative;
  margin: 20px;
  display: grid;
  grid-template-rows: 130px auto;
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
  padding: 20px;
  background-color: #f3f7f6;

  padding: 3px 15px;
  box-shadow: 0 5px 5px #f0efef;
`
const Date = styled.time`
  margin-left: 7px;
`
const DateFlex = styled.div`
  position: absolute;
  top: 147px;
  right: 11px;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`
const OfferTitle = styled.div`
  margin: 35px 0 16px 0;
`
const Title = styled.h2`
  font-weight: bold;
  color: #424242;
`
const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(90deg, rgba(123,172,160,0.5088235123150823) 0%, rgba(123,172,160,1) 48%, rgba(123,172,160,0.5144257532114409) 100%);
  );
`
