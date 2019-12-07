import React from 'react'
import styled from 'styled-components/macro'
import Form from './Form'

export default function NewPost({
  handleAddPost,
  handleAddOffer,
  addCategory
}) {
  return (
    <NewPostWrapper>
      <Title>Erstelle ein neues Gesuch oder Angebot</Title>
      <Paragraph>
        <b>
          Du suchst Hilfe? <br />
          Du möchtest deine Hilfe anbieten?
        </b>
        <br />
        Erstelle ein neues Gesuch für die Pinnwand oder erstelle Angebote, damit
        deine Nachbarn es sehen können.
      </Paragraph>

      <Form
        handleAddPost={handleAddPost}
        handleAddOffer={handleAddOffer}
        addCategory={addCategory}
      />
    </NewPostWrapper>
  )
}
const Title = styled.h3`
  font-weight: unset;
  margin-bottom: 6px;
`
const NewPostWrapper = styled.section`
  width: 100vw;
  padding: 0px 20px 17px 20px;
`
const Paragraph = styled.p`
  margin-top: 5px;
`
