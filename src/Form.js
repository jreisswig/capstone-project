import React from 'react'
import styled from 'styled-components/macro'

export default function Form() {
  return (
    <StyledForm method="post" action="" id="">
      <StyledLabel for="title"></StyledLabel>
      <StyledInput
        type="text"
        name="title"
        required
        placeholder="Titel für deinen Aushang *"
      ></StyledInput>
      <p>Wähle eine Kategorie:</p>
      <Flex>
        <Circle />
        <Circle />
        <Circle />
        <Circle />
        <Circle />
      </Flex>

      <StyledLabel for="description"></StyledLabel>
      <StyledTextArea
        type="textarea"
        name="description"
        cols="35"
        rows="4"
        required
        maxlength="100"
        placeholder="Beschreibe mit ein paar Worten, wobei du Hilfe benötigst 
            oder was du suchst. *"
      ></StyledTextArea>

      <StyledLabel for="name"></StyledLabel>
      <StyledInput
        type="text"
        name="name"
        required
        placeholder="Schreibe hier deinen Namen rein *"
      ></StyledInput>

      <Flex>
        <StyledLabel for="phonenumber"></StyledLabel>
        <StyledContactInput
          type="text"
          name="phonenumber"
          placeholder="Telefon"
        ></StyledContactInput>

        <StyledLabel for="email"></StyledLabel>
        <StyledContactInput
          type="text"
          name="email"
          placeholder="Email"
        ></StyledContactInput>
      </Flex>
      <legend>Felder mit * sind erforderlich</legend>
      <label for="Senden"></label>
      <StyledSubmit
        id="Senden"
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
const StyledLabel = styled.label`
  display: none;
`

const StyledInput = styled.input`
  background: #f3f7f6;
  border: none;

  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
`
const StyledContactInput = styled.input`
  background: #f3f7f6;
  border: none;
  width: 45%;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
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
const StyledTextArea = styled.textarea`
  background: #f3f7f6;
  border: none;

  padding: 10px;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  border-radius: 5px;
`
