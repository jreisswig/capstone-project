import React, { useState } from 'react'
import styled from 'styled-components/macro'

// import images
import Boot from '../../images/BootIcon.svg'
import HausUndGarten from '../../images/HausUndGarten.svg'
import Family from '../../images/FamilyBig.svg'
import Freizeit from '../../images/Freizeit icon.svg'
import Elektro from '../../images/Elektro2Icon.svg'
import Werkzeug from '../../images/Werkzeug2.svg'

export default function CategorieForm({ addCategory }) {
  const [selectedCategory, setSelectedCategory] = useState('Haus & Garten')

  return (
    <Flex>
      <Categorie>
        <img
          style={{
            borderRadius: '50%',
            border: selectedCategory === 'Haus & Garten' && '2px solid #7aaca2'
          }}
          src={HausUndGarten}
          alt="Haus und Garten"
          height="40px"
          width="40px"
          onClick={() => handleClick('Haus & Garten')}
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
          src={Family}
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
          src={Freizeit}
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
          src={Elektro}
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
          src={Werkzeug}
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
