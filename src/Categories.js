import React from 'react'
import styled from 'styled-components/macro'
import Boot from './images/Boot.svg'
import HausUndGarten from './images/HausUndGarten.svg'
export default function Categories({ selectedCategories, toggleCategory }) {
  return (
    <Flex>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border: selectedCategories['Haus und Garten'] && '2px solid #7aaca2'
          }}
          src={HausUndGarten}
          alt="Haus und Garten"
          height="40px"
          width="40px"
          onClick={() => toggleCategory('Haus und Garten')}
        />
        <Headline5>Haus & Garten</Headline5>
      </Categorie>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border:
              selectedCategories['Auto, Rad und Boot'] && '2px solid #7aaca2'
          }}
          src={Boot}
          alt="Boot"
          height="40px"
          width="40px"
          onClick={() => toggleCategory('Auto, Rad und Boot')}
        />
        <Headline5>Auto, Rad & Boot</Headline5>
      </Categorie>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border:
              selectedCategories['Familie und Tier'] && '2px solid #7aaca2'
          }}
          src={HausUndGarten}
          alt=""
          height="40px"
          width="40px"
          onClick={() => toggleCategory('Familie und Tier')}
        />
        <Headline5>Familie & Tier</Headline5>
      </Categorie>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border:
              selectedCategories['Freizeit und Hobby'] && '2px solid #7aaca2'
          }}
          src={HausUndGarten}
          alt="Family"
          height="40px"
          width="40px"
          onClick={() => toggleCategory('Freizeit und Hobby')}
        />
        <Headline5>Freizeit & Hobby</Headline5>
      </Categorie>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border: selectedCategories['Elektro'] && '2px solid #7aaca2'
          }}
          src={HausUndGarten}
          alt="Family"
          height="40px"
          width="40px"
          onClick={() => toggleCategory('Elektro')}
        />
        <Headline5>Elektro</Headline5>
      </Categorie>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border: selectedCategories['Werkzeuge'] && '2px solid #7aaca2'
          }}
          src={HausUndGarten}
          alt="Family"
          height="40px"
          width="40px"
          onClick={() => toggleCategory('Werkzeuge')}
        />
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
