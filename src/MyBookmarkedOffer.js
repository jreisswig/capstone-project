import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

import Trash from './images/trash.svg'

export default function MyBookmarkedOffer({
  title,
  description,
  toggleBookmarked,
  id
}) {
  const [DeleteIsClicked, setDeleteIsClicked] = useState(false)
  return (
    <OfferTags>
      <Link to={`/angebotdetail/${id}`} key={id}>
        <Title>{title}</Title>
        <Content>{description}</Content>
      </Link>
      <Line />

      <Flex>
        <EditWrapper>
          <Image
            src={Trash}
            alt="Löschen"
            height="15px"
            width="15px"
            onClick={() => setDeleteIsClicked(true)}
          />
          Von Merkliste enfernen
        </EditWrapper>
        {DeleteIsClicked && (
          <PopUp>
            <Text>Bist du sicher, dass du diese Anzeige von deiner Merkliste entfernen möchtest?</Text>
            <FlexButton>
              <Button onClick={handleDeleteClick}>Löschen</Button>
              <Button onClick={() => goBack()}>Abbrechen</Button>
            </FlexButton>
          </PopUp>
        )}
      </Flex>
    </OfferTags>
  )
  function handleDeleteClick() {
    toggleBookmarked()
    goBack()
  }

  function goBack() {
    setDeleteIsClicked(false)
  }
}

const OfferTags = styled.div`
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
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
 
`

const EditWrapper = styled.div``
const Image = styled.img`
  margin-right: 12px;
`
const PopUp = styled.div`
  position: absolute;
  background: white;
  z-index: 5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 19%;
  width: 90%
  border: 2px solid #f3f7f6;
  border-radius: 20px;
  padding: 10px;
  top: 220px;
  left: 0%;
`
const Text = styled.div`
width: 80%;`

const FlexButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

const Button = styled.button`
  background: #7aaca2;
  border: none;
  border-radius: 5px;
  color: white;
  padding: 0, 3px;
  font-size: 0.89rem;
  height: 26px;
  margin-right: 20px;
`
