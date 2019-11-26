import React from 'react'
import styled from 'styled-components/macro'
import Form from './Form'

export default function NewPost() {
  return (
    <NewPostWrapper>
      <Title>Erstelle ein neues Gesuch</Title>
      <p>
        Du suchst Hilfe?
        <br />
        Erstelle ein neues Gesuch für die Pinnwand, damit deine Nachbarn es
        sehen können.
      </p>

      <Form />
    </NewPostWrapper>
  )
}
const Title = styled.h2`
  font-weight: unset;
`
const NewPostWrapper = styled.section`
  display: grid;
  width: 100vw;
  padding: 0px 20px 17px 20px;
`
