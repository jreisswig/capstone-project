import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Form({ handleAddPost }) {
  const [addPost, setAddPost] = useState({
    title: '',
    description: '',
    name: '',
    phonenumber: '',
    email: ''
  })
  const [submitted, setSubmitted] = useState(false)

  return (
    <StyledForm
      method="post"
      action=""
      id=""
      onSubmit={event => {
        event.preventDefault()
        handleAddPost(addPost)
        event.target[0].focus()
        event.target.reset()
        showMessage()
      }}
    >
      <Label htmlFor="title"></Label>
      <Input
        type="text"
        name="title"
        id="title"
        onInput={event =>
          setAddPost({
            ...addPost,
            title: event.target.value
          })
        }
        required
        placeholder="Titel für deinen Aushang *"
      ></Input>

      <Headline4>Wähle eine Kategorie:</Headline4>

      <Label htmlFor="description"></Label>
      <TextArea
        type="textarea"
        name="description"
        cols="35"
        rows="4"
        id="description"
        onInput={event =>
          setAddPost({
            ...addPost,
            description: event.target.value
          })
        }
        required
        maxlength="100"
        placeholder="Beschreibe mit ein paar Worten, wobei du Hilfe benötigst 
            oder was du suchst. *"
      ></TextArea>
      <Label htmlFor="name"></Label>
      <Input
        type="text"
        name="name"
        id="name"
        onInput={event =>
          setAddPost({
            ...addPost,
            name: event.target.value
          })
        }
        required
        placeholder="Angezeigter Name *"
      ></Input>
      <Flex>
        <Label htmlFor="phonenumber"></Label>
        <ContactInput
          type="text"
          name="phonenumber"
          id="phonenumber"
          onInput={event =>
            setAddPost({
              ...addPost,
              phonenumber: event.target.value
            })
          }
          placeholder="Telefonnummer"
        ></ContactInput>

        <Label htmlFor="email"></Label>
        <ContactInput
          type="text"
          name="email"
          id="email"
          onInput={event =>
            setAddPost({
              ...addPost,
              email: event.target.value
            })
          }
          placeholder="Email"
        ></ContactInput>
      </Flex>
      <legend>Felder mit * sind erforderlich</legend>
      <label htmlFor="submit"></label>
      <StyledSubmit
        id="submit"
        type="submit"
        name="senden"
        value="Veröffentlichen"
      ></StyledSubmit>
      {submitted && (
        <Paragraph>
          Danke! Dein Gesuch erscheint nun auf der Pinnwand!
        </Paragraph>
      )}
    </StyledForm>
  )
  function showMessage() {
    setSubmitted(!submitted)
  }
}
const StyledForm = styled.form`
  display: grid;
  gap: 10px;
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
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  color: #7d7b7b;
`
const ContactInput = styled.input`
  background: #f3f7f6;
  border: none;
  width: 45%;
  padding: 10px;
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
/* const Circle = styled.div`
  background: #f3f7f6;
  height: 50px;
  width: 50px;
  border-radius: 50%;
` */

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
  margin: 0;
`
