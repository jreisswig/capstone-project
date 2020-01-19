import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import Moment from 'moment'
import 'moment/locale/de'

//// import images
import Trash from '../../images/trash.svg'
import Edit from '../../images/edit.svg'

export default function MyPost({
  title,
  description,
  name,
  phonenumber,
  email,
  date,
  id,
  deletePost
}) {
  const [DeleteIsClicked, setDeleteIsClicked] = useState(false)
  const localeDate = new Moment(date).format('L')
  return (
    <PostWrapper>
      <FlexContainer>
        <PostSearch>ICH SUCHE</PostSearch>
        <Date datetime={localeDate}>{localeDate}</Date>
      </FlexContainer>

      <PostTitle>{title}</PostTitle>

      <PostDescription>{description}</PostDescription>

      <Line />

      <PostName>{name}</PostName>
      <ContactWrapper>
        <PostPhone href="tel: {phonenumber}"> {phonenumber} </PostPhone>
        <p>•</p>
        <PostMail href="mailto:{email}">{email}</PostMail>
      </ContactWrapper>
      <Line />
      <Flex>
        <EditWrapper>
          <Link to={`/gesuchebearbeiten/${id}`} key={id}>
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
      </Flex>
      {DeleteIsClicked && (
        <PopUp>
          <Text>Bist du sicher, dass du dieses Gesuch löschen möchtest?</Text>
          <FlexButton>
            <Button onClick={() => handleDeleteClick()}>Löschen</Button>
            <Button onClick={() => goBack()}>Abbrechen</Button>
          </FlexButton>
        </PopUp>
      )}
    </PostWrapper>
  )

  function handleDeleteClick() {
    deletePost()
    goBack()
  }

  function goBack() {
    setDeleteIsClicked(false)
  }
}

const PostWrapper = styled.section`
  background-color: #f3f7f6;
  border-radius: 7px;
  padding: 3px 15px;
  margin-bottom: 11px;
  cursor: default;
`
const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const Date = styled.div`
  font-size: 0.9rem;
  margin-top: 4px;
`
const PostTitle = styled.h4`
  margin-top: 7px;
  margin-bottom: 4px;
`
const PostDescription = styled.p`
  position: relative;
`

const PostName = styled.p`
  color: #424242;
  margin-top: 3px;
  margin-bottom: 0px;
`
const PostPhone = styled.a`
  padding-right: 7px;
  text-decoration: none;
  color: #7d7b7b;
`

const PostMail = styled.a`
  padding-left: 7px;
  text-decoration: none;
  color: #7d7b7b;
`
const PostSearch = styled.p`
  font-weight: lighter;
  margin-top: 6px;
  margin-bottom: 6px;
`
const ContactWrapper = styled.section`
  display: flex;
  margin-top: 3px;
  margin-bottom: 3px;
  p {
    margin: 0;
  }
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
