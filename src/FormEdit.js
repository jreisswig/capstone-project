import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components/macro'
import CategorieForm from './formAddNew/CategorieForm'

import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import Offer from './Offer'

export default function FormEdit({
  handleAddPost,
  handleAddOffer,
  newPostDate,
  newOfferDate,
  offers,
  updateOffer
}) {
  const user = firebase.auth().currentUser

  const { pathname } = useLocation()
  const id = pathname.substring(6)
  const index = offers.findIndex(el => el.id === id)
  const offer = offers[index]
  const [updatedOffer, setUpdatedOffer] = useState({
    title: offer.title,
    description: offer.description,
    name: offer.name,
    phonenumber: offer.phonenumber,
    email: offer.email,
    category: offer.category,
    date: offer.date,
    id: offer.id,
    isBookmarked: offer.isBookmarked,
    userid: offer.userid
  })
  const [submitted, setSubmitted] = useState(false)
  const [selectedOption, setSelectedOption] = useState('')

  console.log(updatedOffer)
  return (
    <EditWrapper>
      <Headline3>Hier kannst du dein Angebot anpassen</Headline3>
      <StyledForm method="post" action="" id="" onSubmit={handleSubmit}>
        <Label htmlFor="title"></Label>
        <Input
          type="text"
          name="title"
          id="title"
          required
          placeholder="Titel für deinen Aushang *"
          defaultValue={offer.title}
          onChange={event =>
            setUpdatedOffer({
              ...updatedOffer,
              title: event.target.value
            })
          }
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
          defaultValue={offer.description}
          onChange={event =>
            setUpdatedOffer({
              ...updatedOffer,
              description: event.target.value
            })
          }
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
          defaultValue={offer.name}
          onChange={event =>
            setUpdatedOffer({
              ...updatedOffer,
              name: event.target.value
            })
          }
          required
          placeholder="Angezeigter Name *"
        ></Input>
        <Flex>
          <Label htmlFor="email"></Label>
          <ContactInput
            type="email"
            name="email"
            id="email"
            defaultValue={offer.email}
            onChange={event =>
              setUpdatedOffer({
                ...updatedOffer,
                email: event.target.value
              })
            }
            placeholder="Email"
          ></ContactInput>
          <Label htmlFor="phonenumber"></Label>
          <ContactInput
            type="tel"
            name="phonenumber"
            id="phonenumber"
            defaultValue={offer.phonenumber}
            onChange={event =>
              setUpdatedOffer({
                ...updatedOffer,
                phonenumber: event.target.value
              })
            }
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
    setUpdatedOffer({ ...updatedOffer, category: categoriename })
  }
  function handleSubmit(event) {
    event.preventDefault()
    updateOffer(updatedOffer)
  }

  /* function handleOffer(event) {
    event.preventDefault()
    handleAddOffer(addOffer)
    event.target[0].focus()
    event.target.reset()

    showMessage()
  } */

  /*  function showMessage() {
    setSubmitted(!submitted)
  }
  function handleClick(input) {
    setSelectedOption(input)
  }*/
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
