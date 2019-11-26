import React from 'react'
import styled from 'styled-components/macro'

export default function Form() {
  return (
    <StyledForm method="post" action="" id="">
      <legend>Felder mit * sind erforderlich</legend>

      <StyledLabel for="title"></StyledLabel>
      <StyledInput
        type="text"
        name="title"
        required
        placeholder="Titel für deinen Aushang *"
      ></StyledInput>

      <StyledLabel for="description"></StyledLabel>
      <StyledTextArea
        type="textarea"
        name="description"
        cols="35"
        rows="4"
        required
        maxlength="100"
        placeholder="Beschreibe mit ein paar Worten, wobei du Hilfe benötigst,
            oder was du suchst. *"
      ></StyledTextArea>

      <StyledLabel for="name"></StyledLabel>
      <StyledInput
        type="text"
        name="name"
        required
        placeholder="Schreibe hier deinen Namen rein *"
      ></StyledInput>

      <FormContact>
        <StyledLabel for="phonenumber"></StyledLabel>
        <StyledInput
          type="text"
          name="phonenumber"
          placeholder="Telefon *"
        ></StyledInput>

        <StyledLabel for="email"></StyledLabel>
        <StyledInput
          type="text"
          name="email"
          placeholder="Email *"
        ></StyledInput>
      </FormContact>
      <label for="Senden"></label>
      <StyledSubmit
        id="Senden"
        type="submit"
        name="senden"
        value="Senden"
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
  width: 100%;
  padding: 10px;
  font-size: 1rem;
`
const FormContact = styled.div`
  display: flex;
`

const StyledSubmit = styled.input`
  background: #7aaca2;
  border: none;
  width: 50%;
`
const StyledTextArea = styled.textarea`
  background: #f3f7f6;
  border: none;
  width: 100%;
  padding: 10px;
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1rem;
`
