import React, { useState, useEffect } from 'react'
import Offer from './Offer'
import Wappen from './images/WappenSeestermuehe.svg'
import Categories from './Categories'
import Searchbar from './Searchbar'
import styled from 'styled-components/macro'
import { updateExpression } from '@babel/types'

export default function Home({ offers, posts }) {
  //const [searchPhrase, setSearchPhrase] = useState('')
  const [input, setInput] = useState('')
  console.log(offers)
  /*  const [fuzzySearch, setFuzzySearch] = useState(offers)

  useEffect(() => {
    let offersLower = offers.ConvertAll(offersLower, x => x.ToLower())
    setFuzzySearch(offersLower)
  }) */

  return (
    <HomeContainer>
      <Welcome>
        <Image>
          <img src={Wappen} alt="Wappen" height="50px" width="50px" />
        </Image>
        <Paragraph>
          Hallo User, <br /> schaue was in Seestermühe los ist.
        </Paragraph>
      </Welcome>
      <Searchbar
        onInput={event => setInput(event.target.value.toLowerCase())}
        onSubmit={event => setInput(event.target.value.toLowerCase())}
      />
      <Line />
      <Headline3>Filter nach Kategorien</Headline3>
      <Categories />
      <Line />
      <Headline3>Angebote von Seestermühern</Headline3>
      <TagContainer>
        {input !== ''
          ? offers
              .filter(
                item =>
                  item.title.includes(input) || item.description.includes(input)
              )
              .map((offer, index) => <Offer {...offer} key={index} />)
          : offers.map((offer, index) => <Offer {...offer} key={index} />)}
      </TagContainer>
      <Line />
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  padding: 20px;
  overflow: scroll;
`
const Welcome = styled.section`
  display: flex;
`

const Image = styled.div`
  margin-right: 15px;
`

const TagContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`
const Headline3 = styled.h3`
  font-weight: unset;
  font-size: 1rem;
`

const Paragraph = styled.p``
const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(90deg, rgba(123,172,160,0.5088235123150823) 0%, rgba(123,172,160,1) 48%, rgba(123,172,160,0.5144257532114409) 100%);
  );
`
