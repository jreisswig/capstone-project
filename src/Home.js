import React, { useState } from 'react'
import Offer from './Offer'
import Wappen from './images/WappenSeestermuehe.svg'
import Categories from './Categories'
import Searchbar from './Searchbar'
import styled from 'styled-components/macro'

export default function Home({ offers }) {
  const [input, setInput] = useState('')
  const [selectedCategories, setSelectedCategories] = useState({
    'Haus und Garten': false,
    'Auto, Rad und Boot': false,
    'Familie und Tier': false,
    'Freizeit und Hobby': false,
    Elektro: false,
    Werkzeuge: false
  })
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
        onInput={event => setInput(event.target.value)}
        onSubmit={event => setInput(event.target.value.toLowerCase())}
      />
      <Line />
      <Headline3>Filter nach Kategorien</Headline3>
      <Categories
        selectedCategories={selectedCategories}
        toggleCategory={toggleCategory}
      />
      <Line />
      <Headline3>Angebote von Seestermühern</Headline3>
      <TagContainer>
        {offers
          .filter(item => {
            const title = item.title.toLowerCase()
            const description = item.description.toLowerCase()
            const query = input.toLowerCase()
            const areAllCategoriesUnselected = Object.keys(
              selectedCategories
            ).every(key => selectedCategories[key] === false)
            const isInCategory = selectedCategories[item.category]
            return (
              areAllCategoriesUnselected ||
              (isInCategory &&
                (query === '' ||
                  title.includes(query) ||
                  description.includes(query)))
            )
          })
          .map((offer, index) => (
            <Offer {...offer} key={index} />
          ))}
      </TagContainer>
      <Line />
    </HomeContainer>
  )

  function toggleCategory(category) {
    setSelectedCategories({
      ...selectedCategories,
      [category]: !selectedCategories[category]
    })
  }
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
