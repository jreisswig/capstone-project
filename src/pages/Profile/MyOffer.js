//// import utils
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Moment from 'moment'
import 'moment/locale/de'

//// import images
import Trash from '../../images/trash.svg'
import Edit from '../../images/edit.svg'
import Star from '../../images/star.svg'

export default function MyOffer({
  title,
  description,
  id,
  date,
  deleteOffer,
  isBookmarked
}) {
  const [DeleteIsClicked, setDeleteIsClicked] = useState(false)
  const localeDate = new Moment(date).format('L')
  return (
    <OfferTags>
      <Link to={`/detailangebot/${id}`} key={id}>
        <FlexContainer>
          <Title>{title}</Title>
          <Date datetime={date}>{localeDate}</Date>
        </FlexContainer>
        <div>{description}</div>

        <Line />
      </Link>
      <Flex>
        <EditWrapper>
          <Link to={`/angebotbearbeiten/${id}`} key={id}>
            <Image src={Edit} alt="Bearbeiten" height="15px" width="15px" />
          </Link>
          <Image
            src={Trash}
            alt="Löschen"
            height="15px"
            width="15px"
            onClick={() => setDeleteIsClicked(true)}
          />
        </EditWrapper>
        {
          <StarWrapper>
            <ImageStar src={Star} alt="Merken" height="15px" width="15px" />
            <div>{isBookmarked.length}</div>
          </StarWrapper>
        }
      </Flex>
      {DeleteIsClicked && (
        <PopUp>
          <Text>Bist du sicher, dass du dieses Angebot löschen möchtest?</Text>
          <FlexButton>
            <Button onClick={() => handleDeleteClick()}>Löschen</Button>
            <Button onClick={() => goBack()}>Abbrechen</Button>
          </FlexButton>
        </PopUp>
      )}
    </OfferTags>
  )
  function handleDeleteClick() {
    deleteOffer()
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
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const Date = styled.div`
  font-size: 0.9rem;
  margin-top: 4px;
`
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
const ImageStar = styled.img`
  margin-right: 8px;
`
const StarWrapper = styled.div`
  display: flex;
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
  width: 100%;
  border: 2px solid #f3f7f6;
  border-radius: 20px;
  padding: 10px;
  top: 220px;
  left: 0%;
`
const Text = styled.div`
  width: 80%;
`
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
