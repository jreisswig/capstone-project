import React from 'react'
import styled from 'styled-components/macro'
import FamilyIcon from './images/FamilyIcon.svg'

export default function Categories() {
  return (
    <Flex>
      <Categorie>
        <img src={FamilyIcon} alt="Family" height="40px" width="40px" />
        <Headline5>Haus & Garten</Headline5>
      </Categorie>
      <Categorie>
        <img src={FamilyIcon} alt="Family" height="40px" width="40px" />
        <Headline5>Auto, Rad & Boot</Headline5>
      </Categorie>
      <Categorie>
        <img src={FamilyIcon} alt="Family" height="40px" width="40px" />
        <Headline5>Familie & Tier</Headline5>
      </Categorie>
      <Categorie>
        <img src={FamilyIcon} alt="Family" height="40px" width="40px" />
        <Headline5>Freizeit & Hobby</Headline5>
      </Categorie>
      <Categorie>
        <img src={FamilyIcon} alt="Family" height="40px" width="40px" />
        <Headline5>Elektro</Headline5>
      </Categorie>
      <Categorie>
        <img src={FamilyIcon} alt="Family" height="40px" width="40px" />
        <Headline5>Werkzeuge</Headline5>
      </Categorie>
    </Flex>
  )
}

const Flex = styled.section`
  display: flex;
  justify-content: space-between;
  border: none;
  padding: 0;
  margin: 0;
`
const Categorie = styled.div`
  width: 16%;
`
const Headline5 = styled.h5`
  margin: 0;
  font-weight: normal;
`
