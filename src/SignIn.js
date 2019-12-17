import React /* , { useState } */ from 'react'
import styled from 'styled-components/macro'
import handleSignIn from './services/firebase'
import { Link } from 'react-router-dom'

export default function SigngIn() {
  return (
    <NewProfileContainer>
      <Headline2>Logge dich ein</Headline2>
      <StyledForm method="post" action="" id="" onSubmit={handleSubmit}>
        <Label htmlFor="email"></Label>
        <Input
          type="email"
          name="email"
          id="loginuseremail"
          placeholder="Email"
        ></Input>

        <Label htmlFor="password"></Label>
        <PasswordInput
          type="password"
          name="password"
          id="loginuserpassword"
          placeholder="Passwort"
        ></PasswordInput>

        <label htmlFor="submit"></label>
        <FlexBox>
          <StyledSubmit
            id="quickstart-sign-in"
            type="submit"
            name="senden"
            value="Login"
          ></StyledSubmit>
          <NewAccount>
            <Link to="/registrieren">Registrieren</Link>
          </NewAccount>
        </FlexBox>
      </StyledForm>
    </NewProfileContainer>
  )

  function handleSubmit(event) {
    event.preventDefault()
    handleSignIn()
  }
  /* function handleSubmit(event) {
    event.preventDefault()
    event.target[0].focus()
    event.target.reset()
    handleAddUser(addUser)
    handleState()
  } */
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
const PasswordInput = styled.input`
  background: #f3f7f6;
  border: none;
  padding: 9px;
  font-size: 1rem;
  border-radius: 5px;
  color: #7d7b7b;
`

const StyledSubmit = styled.input`
  background: #7aaca2;
  border: none;
  width: 50%;
  border-radius: 5px;
  color: white;
  padding: 5px;
  font-size: 1rem;
  height: 35px;
`

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`
const NewAccount = styled.div`
  margin-top: 7px;
  a:link,
  a:visited {
    color: #7aaca2;
  }

  a:active,
  a:hover {
    color: #7aaca2;
  }
`
