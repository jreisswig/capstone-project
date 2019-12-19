import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'
import CategorieForm from './formAddNew/CategorieForm'

import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import Offer from './Offer'

export default function Form({
  handleAddPost,
  handleAddOffer,
  newPostDate,
  newOfferDate,
  offers
}) {
  const user = firebase.auth().currentUser
  const [addPost, setAddPost] = useState({
    title: '',
    description: '',
    name: user && user.displayName,
    phonenumber: '',
    email: user && user.email,
    category: '',
    date: '',
    id: '',
    isBookmarked: false,
    userid: user && user.uid
  })
  const [addOffer, setAddOffer] = useState({
    title: '',
    description: '',
    name: user && user.displayName,
    phonenumber: '',
    email: user && user.email,
    category: '',
    date: '',
    id: '',
    isBookmarked: false,
    userid: user && user.uid
  })
  const [submitted, setSubmitted] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  const { pathname } = useLocation()

  const id = pathname.substring(6)
  const index = offers.findIndex(el => el.id === id)
  const offer = offers[index]

  return (
    <EditWrapper>
      <Headline3>Hier kannst du dein Angebot anpassen</Headline3>
      <StyledForm method="post" action="" id="">
        <Label htmlFor="title"></Label>
        <Input
          type="text"
          name="title"
          id="title"
          required
          placeholder="Titel für deinen Aushang *"
          value={offer.title}
        ></Input>

        <Headline4>Wähle eine Kategorie:</Headline4>
        <CategorieForm addCategory={addCategoryAndDate} />
        <Label htmlFor="description"></Label>
        <TextArea
          type="textarea"
          name="description"
          cols="35"
          rows="4"
          id="description"
          value={offer.description}
          required
          maxlength="100"
          placeholder="Beschreibe mit ein paar Worten, wobei du Hilfe benötigst 
            oder wobei du deinen Nachbarn helfen kannst. *"
        ></TextArea>
        <Label htmlFor="name"></Label>
        <Input
          type="text"
          name="name"
          id="name"
          value={offer.name}
          required
          placeholder="Angezeigter Name *"
        ></Input>
        <Flex>
          <Label htmlFor="email"></Label>
          <ContactInput
            type="email"
            name="email"
            id="email"
            value={offer.email}
            placeholder="Email"
          ></ContactInput>
          <Label htmlFor="phonenumber"></Label>
          <ContactInput
            type="tel"
            name="phonenumber"
            id="phonenumber"
            value={offer.phonenumber}
            placeholder="Telefonnummer"
          ></ContactInput>
        </Flex>
        <legend>Felder mit * sind erforderlich</legend>
        <label htmlFor="submit"></label>
        <FlexBox>
          <StyledSubmit
            id="submit"
            type="submit"
            name="senden"
            value="Ändern"
          ></StyledSubmit>
          {submitted && (
            <Paragraph>Deine Änderungen wurden übernommen.</Paragraph>
          )}
        </FlexBox>
      </StyledForm>
    </EditWrapper>
  )

  function addCategoryAndDate(categoriename) {
    selectedOption === 'post'
      ? setAddPost({ ...addPost, category: categoriename })
      : setAddOffer({ ...addOffer, category: categoriename })
  }

  function handleOffer(event) {
    event.preventDefault()
    handleAddOffer(addOffer)
    event.target[0].focus()
    event.target.reset()

    showMessage()
  }

  function showMessage() {
    setSubmitted(!submitted)
  }
  function handleClick(input) {
    setSelectedOption(input)
  }
}

const StyledForm = styled.form`
  display: grid;
  gap: 10px;
`

const EditWrapper = styled.section`
  width: 100vw;
  padding: 50px 20px 17px 20px;
`
const Headline3 = styled.h3`
  font-weight: unset;
  font-size: 1rem;
`
const Label = styled.label`
  display: none;
`
const Headline4 = styled.h4`
  font-size: 1rem;
  font-weight: unset;
  margin: 0;
`
const Input = styled.input`
  background: #f3f7f6;
  border: none;
  padding: 9px;
  font-size: 1rem;
  border-radius: 5px;
  color: #7d7b7b;
`
const ContactInput = styled.input`
  background: #f3f7f6;
  border: none;
  width: 49%;
  padding: 9px;
  font-size: 1rem;
  border-radius: 5px;
  color: #7d7b7b;
`

const Flex = styled.fieldset`
  display: flex;
  justify-content: space-between;
  border: none;
  padding: 0;
  margin: 0;
`

const StyledSubmit = styled.input`
  background: #7aaca2;
  border: none;
  width: 50%;
  border-radius: 5px;
  color: white;
  padding: 10px;
  font-size: 1rem;
`
const TextArea = styled.textarea`
  background: #f3f7f6;
  border: none;
  padding: 10px;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  border-radius: 5px;
  color: #7d7b7b;
`
const Paragraph = styled.p`
  margin: 0 0 0 16px;
  width: 50%;
`
const FlexBox = styled.div`
  display: flex;
`
