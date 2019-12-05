import React from 'react'
import styled from 'styled-components/macro'
import OfferDetail from './OfferDetail'
import HausUndGarten from './images/HausUndGarten.svg'

export default function OfferDetailList({
  title,
  description,
  name,
  phonenumber,
  email
}) {
  return (
    <OfferDetailContainer>
      <CategorieHeader>
        <Icon>
          <img
            src={HausUndGarten}
            alt="Haus und Garten"
            height="130px"
            width="130px"
          />
        </Icon>
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
        />
      </OfferContent>
    </OfferDetailContainer>
  )
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
const Icon = styled.div`
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
  margin-bottom: 35px;
  margin-top: 7px;
`
const Title = styled.h2`
  font-weight: bold;
  color: #424242;
`
