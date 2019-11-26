import React from 'react'
import styled from 'styled-components/macro'
import Form from './Form'

export default function NewPost() {
  return (
    <NewPostWrapper>
      <h2>Erstelle ein neues Gesuch</h2>
      <p> Du suchst Hilfe?</p>
      <p>
        Erstelle ein neues Gesuch für die Pinnwand, damit deine Nachbarn es
        sehen können.
      </p>

      <Form />
    </NewPostWrapper>
  )
}
const NewPostWrapper = styled.section`
  display: grid;
  height: 100%;
  padding: 20px;
`
