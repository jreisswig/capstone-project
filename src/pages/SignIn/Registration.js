import React from 'react'
import styled from 'styled-components/macro'
import 'firebase/app'
import 'firebase/auth'

export default function Registration({ handleSignUp }) {
  return (
    <NewProfileContainer>
      <Headline2>Lege ein neues Profil an</Headline2>
      <StyledForm method="post" action="" id="" onSubmit={handleSubmit}>
        <Label htmlFor="name"></Label>
        <Input
          type="text"
          name="name"
          id="username"
          required
          placeholder="Angezeigter Name *"
        ></Input>
        <Flex>
          <Label htmlFor="email"></Label>
          <ContactInput
            type="email"
            name="email"
            id="useremail"
            placeholder="Email *"
          ></ContactInput>
          <Label htmlFor="phonenumber"></Label>
          <ContactInput
            type="tel"
            name="phonenumber"
            id="userphonenumber"
            placeholder="Telefonnummer"
          ></ContactInput>
        </Flex>
        <Label htmlFor="password"></Label>
        <ContactInput
          type="password"
          name="ppassword"
          id="userpassword"
          placeholder="Passwort *"
        ></ContactInput>
        <legend>Felder mit * sind erforderlich</legend>

        <label htmlFor="submit"></label>
        <FlexBox>
          <StyledSubmit
            id="quickstart-sign-in"
            type="submit"
            name="senden"
            value="Los geht's"
          ></StyledSubmit>
        </FlexBox>
      </StyledForm>
    </NewProfileContainer>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const name = document.getElementById('username').value
    handleSignUp(name)
  }
}

const NewProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50%;
  border: 2px solid #f3f7f6;
  border-radius: 20px;
  margin-top: 38%;
`

const StyledForm = styled.form`
  display: grid;
  gap: 10px;
  width: 90%;
  align-items: center;
`

const Label = styled.label`
  display: none;
`
const Headline2 = styled.h2``
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
  width: 45%;
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

const FlexBox = styled.div`
  display: flex;
`
