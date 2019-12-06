import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Boot from './images/Boot.svg'
import HausUndGarten from './images/HausUndGarten.svg'
export default function CategorieForm({ addCategory }) {
  const [selectedCategory, setSelectedCategory] = useState('')
  console.log(selectedCategory)
  return (
    <Flex>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border:
              selectedCategory === 'Haus und Garten' && '2px solid #7aaca2'
          }}
          src={HausUndGarten}
          alt="Haus und Garten"
          height="40px"
          width="40px"
          onClick={() => handleClick('Haus und Garten')}
        />
        <Headline5>Haus & Garten</Headline5>
      </Categorie>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border:
              selectedCategory === 'Auto, Rad & Boot' && '2px solid #7aaca2'
          }}
          src={Boot}
          alt="Boot"
          height="40px"
          width="40px"
          onClick={() => handleClick('Auto, Rad & Boot')}
        />
        <Headline5>Auto, Rad & Boot</Headline5>
      </Categorie>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border: selectedCategory === 'Familie & Tier' && '2px solid #7aaca2'
          }}
          src={HausUndGarten}
          alt=""
          height="40px"
          width="40px"
          onClick={() => handleClick('Familie & Tier')}
        />
        <Headline5>Familie & Tier</Headline5>
      </Categorie>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border:
              selectedCategory === 'Freizeit & Hobby' && '2px solid #7aaca2'
          }}
          src={HausUndGarten}
          alt="Family"
          height="40px"
          width="40px"
          onClick={() => handleClick('Freizeit & Hobby')}
        />
        <Headline5>Freizeit & Hobby</Headline5>
      </Categorie>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border: selectedCategory === 'Elektro' && '2px solid #7aaca2'
          }}
          src={HausUndGarten}
          alt="Family"
          height="40px"
          width="40px"
          onClick={() => handleClick('Elektro')}
        />
        <Headline5>Elektro</Headline5>
      </Categorie>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border: selectedCategory === 'Werkzeuge' && '2px solid #7aaca2'
          }}
          src={HausUndGarten}
          alt="Family"
          height="40px"
          width="40px"
          onClick={() => handleClick('Werkzeuge')}
        />
        <Headline5>Werkzeuge</Headline5>
      </Categorie>
    </Flex>
  )
  function handleClick(name) {
    addCategory(name)
    setSelectedCategory(name)
  }
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
