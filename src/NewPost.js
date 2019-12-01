import React from 'react'
import styled from 'styled-components/macro'
import Form from './Form'

export default function NewPost({ handleAddPost }) {
  return (
    <NewPostWrapper>
      <Title>Erstelle ein neues Gesuch</Title>
      <Paragraph>
        Du suchst Hilfe?
        <br />
        Erstelle ein neues Gesuch für die Pinnwand, damit deine Nachbarn es
        sehen können.
      </Paragraph>

      <Form handleAddPost={handleAddPost} />
    </NewPostWrapper>
  )
}
const Title = styled.h3`
  font-weight: unset;
`
const NewPostWrapper = styled.section`
  width: 100vw;
  padding: 0px 20px 17px 20px;
`
const Paragraph = styled.p``
