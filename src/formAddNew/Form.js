import React, { useState } from 'react'
import styled from 'styled-components/macro'
import CategorieForm from './CategorieForm'
import RadioOff from '../images/radio-button-off.svg'
import RadioOn from '../images/radio-button-on-fill.svg'
import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export default function Form({
  handleAddPost,
  handleAddOffer,
  newPostDate,
  newOfferDate
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

  function getDate() {
    const actualDate = new Date()
    const day = actualDate.getDate()
    const month = actualDate.getMonth() + 1
    const year = actualDate.getFullYear()
    const hour = actualDate.getHours()
    const minute = actualDate.getMinutes()
    const date = day + '.' + month + '.' + year + ' ' + hour + ':' + minute
    return date
  }

  return (
    <StyledForm
      method="post"
      action=""
      id=""
      onSubmit={selectedOption === 'post' ? handlePost : handleOffer}
    >
      <Type>
        <RadioInput
          type="radio"
          name="type"
          value="offer"
          id="offer"
          defaultChecked
          onClick={() => handleClick('offer')}
        />
        <label htmlFor="offer">
          <span>Biete</span>
        </label>
        <RadioInput
          type="radio"
          onClick={() => handleClick('post')}
          name="type"
          value="post"
          id="post"
        />
        <label htmlFor="post">
          <span>Suche</span>
        </label>
      </Type>

      <Label htmlFor="title"></Label>
      <Input
        type="text"
        name="title"
        id="title"
        onInput={event =>
          selectedOption === 'post'
            ? setAddPost({
                ...addPost,
                title: event.target.value,
                date: getDate(),
                id: Math.random()
                  .toString(36)
                  .substr(2, 9)
              })
            : setAddOffer({
                ...addOffer,
                title: event.target.value,
                date: getDate(),
                id: Math.random()
                  .toString(36)
                  .substr(2, 9)
              })
        }
        required
        placeholder="Titel für deinen Aushang *"
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
        onInput={event =>
          selectedOption === 'post'
            ? setAddPost({
                ...addPost,
                description: event.target.value
              })
            : setAddOffer({
                ...addOffer,
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
        value={user && user.displayName}
        onInput={event =>
          selectedOption === 'post'
            ? setAddPost({
                ...addPost,
                name: event.target.value
              })
            : setAddOffer({
                ...addOffer,
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
          value={user && user.email}
          onInput={event =>
            selectedOption === 'post'
              ? setAddPost({
                  ...addPost,
                  email: user ? user.email : event.target.value
                })
              : setAddOffer({
                  ...addOffer,
                  email: user ? user.email : event.target.value
                })
          }
          placeholder="Email"
        ></ContactInput>
        <Label htmlFor="phonenumber"></Label>
        <ContactInput
          type="tel"
          name="phonenumber"
          id="phonenumber"
          onInput={event =>
            selectedOption === 'post'
              ? setAddPost({
                  ...addPost,
                  phonenumber: event.target.value
                })
              : setAddOffer({ ...addOffer, phonenumber: event.target.value })
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
          value="Veröffentlichen"
        ></StyledSubmit>
        {submitted && (
          <Paragraph>Danke! Es erscheint nun auf HalloDorf.</Paragraph>
        )}
      </FlexBox>
    </StyledForm>
  )

  function addCategoryAndDate(categoriename) {
    selectedOption === 'post'
      ? setAddPost({ ...addPost, category: categoriename })
      : setAddOffer({ ...addOffer, category: categoriename })
  }

  function handlePost(event) {
    event.preventDefault()
    handleAddPost(addPost)
    event.target[0].focus()
    event.target.reset()
    showMessage()
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
const Type = styled.div`
  display: flex;

  input:not(:checked) + label {
    background: url(${RadioOff});
    background-size: 15px 15px;
    background-repeat: no-repeat;
  }

  input:checked + label {
    background: url(${RadioOn});
    background-size: 15px 15px;
    background-repeat: no-repeat;
  }
`
const RadioInput = styled.input`
  display: none;

  + label {
    margin-right: 33px;
  }
  + label span {
    margin-left: 29px;
  }
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
