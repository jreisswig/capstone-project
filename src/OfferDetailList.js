import React from 'react'
import styled from 'styled-components/macro'
import OfferDetail from './OfferDetail'

export default function OfferDetailList({
  title,
  description,
  name,
  phonenumber,
  email
}) {
  return (
    <OfferDetailContainer>
      <CategorieImage></CategorieImage>
      <OfferContent>
        <OfferTitle>{title}</OfferTitle>
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
`
const CategorieImage = styled.div`
  heigth: 40%;
  background: #7aaca2;
`
const OfferContent = styled.div`
  padding: 20px;
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
