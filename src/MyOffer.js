//// import utils
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

//// import images
import Trash from './images/trash.svg'
import Edit from './images/edit.svg'
import Star from './images/star.svg'

export default function Offer({ title, description, id }) {
  return (
    <OfferTags>
      <Link to={`/angebotdetail/${id}`} key={id}>
        <Title> {title}</Title>
        <Content>{description}</Content>
      </Link>
      <Line />
      <Flex>
        <EditWrapper>
          <Link to={`/edit/${id}`} key={id}>
            <Image src={Edit} alt="Bearbeiten" height="15px" width="15px" />
          </Link>
          <Image src={Trash} alt="Löschen" height="15px" width="15px" />
        </EditWrapper>
        <StarWrapper>
          <ImageStar src={Star} alt="Merken" height="15px" width="15px" />
          <div>2</div>
        </StarWrapper>
      </Flex>
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
