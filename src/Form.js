import React from 'react'
import styled from 'styled-components/macro'

export default function Form() {
  return (
    <StyledForm method="post" action="" id="">
      <Label for="title"></Label>
      <Input
        type="text"
        name="title"
        id="title"
        required
        placeholder="Titel für deinen Aushang *"
      ></Input>
      <Headline4>Wähle eine Kategorie:</Headline4>
      <Flex>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </Flex>

      <Label for="description"></Label>
      <TextArea
        type="textarea"
        name="description"
        cols="35"
        rows="4"
        id="description"
        required
        maxlength="100"
        placeholder="Beschreibe mit ein paar Worten, wobei du Hilfe benötigst 
            oder was du suchst. *"
      ></TextArea>

      <Label for="name"></Label>
      <Input
        type="text"
        name="name"
        id="name"
        required
        placeholder="Schreibe hier deinen Namen rein *"
      ></Input>

      <Flex>
        <Label for="phonenumber"></Label>
        <ContactInput
          type="text"
          name="phonenumber"
          id="phonenumber"
          placeholder="Telefon"
        ></ContactInput>

        <Label for="email"></Label>
        <ContactInput
          type="text"
          name="email"
          id="email"
          placeholder="Email"
        ></ContactInput>
      </Flex>
      <legend>Felder mit * sind erforderlich</legend>
      <label for="submit"></label>
      <StyledSubmit
        id="submit"
        type="submit"
        name="senden"
        value="Veröffentlichen"
      ></StyledSubmit>
    </StyledForm>
  )
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
`
const Input = styled.input`
  background: #f3f7f6;
  border: none;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
`
const ContactInput = styled.input`
  background: #f3f7f6;
  border: none;
  width: 45%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
`

const Flex = styled.fieldset`
  display: flex;
  justify-content: space-between;
  border: none;
  padding: 0;
  margin: 0;
`
const Circle = styled.div`
  background: #f3f7f6;
  height: 50px;
  width: 50px;
  border-radius: 50%;
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
`
