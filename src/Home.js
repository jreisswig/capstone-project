import React, { useState } from 'react'
import Offer from './Offer'
import Wappen from './images/WappenSeestermuehe.svg'
import Categories from './Categories'
import Searchbar from './Searchbar'
import Sort from './images/sorticon.svg'

import styled from 'styled-components/macro'

export default function Home({ offers, toggleBookmarked }) {
  const [userInput, setUserInput] = useState('')
  const [selectedCategories, setSelectedCategories] = useState({
    'Haus & Garten': false,
    'Auto, Rad & Boot': false,
    'Familie & Tier': false,
    'Freizeit & Hobby': false,
    Elektro: false,
    Werkzeuge: false
  })

  const filteredOffers = filterOffers(offers)
  const [sortByAlphabet, setSortByAlphabet] = useState(false)

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
        onInput={event => setUserInput(event.target.value)}
        style={{ position: 'sticky', top: '50' }}
      />
      <Line />
      <Headline3>Filter nach Kategorien</Headline3>
      <Categories
        selectedCategories={selectedCategories}
        toggleCategory={toggleCategory}
      />

      <Line />
      <Headline3>Angebote von Seestermühern</Headline3>
      <Filter>
        <FilterButton
          onClick={() => sortOffers()}
          style={{ background: !sortByAlphabet && '#648e86' }}
        >
          <span>Datum</span>
          <img src={Sort} alt="FilterDate" height="8px" width="8px" />
        </FilterButton>
        <FilterButton
          onClick={() => sortOffers()}
          style={{ background: sortByAlphabet && '#648e86' }}
        >
          <span>A-Z</span>

          <img src={Sort} alt="FilterABC" height="8px" width="8px" />
        </FilterButton>
      </Filter>
      <OfferContainer>{renderOffers(filteredOffers)}</OfferContainer>
      <Line />
    </HomeContainer>
  )

  function toggleCategory(category) {
    setSelectedCategories({
      ...selectedCategories,
      [category]: !selectedCategories[category]
    })
  }

  function sortOffers() {
    setSortByAlphabet(!sortByAlphabet)
  }

  function filterOffers(offers) {
    return offers.filter(item => {
      const title = item.title.toLowerCase()
      const description = item.description.toLowerCase()
      const name = item.name.toLowerCase()
      const query = userInput.toLowerCase()
      const areAllCategoriesUnselected = Object.keys(selectedCategories).every(
        key => selectedCategories[key] === false
      )
      const isInCategory = selectedCategories[item.category]

      return (
        ((areAllCategoriesUnselected || isInCategory) &&
          (query === '' ||
            title.includes(query) ||
            description.includes(query))) ||
        name.includes(query)
      )
    })
  }
  function renderOffers(filteredOffers) {
    return filteredOffers.length ? (
      filteredOffers
        .sort((a, b) =>
          sortByAlphabet ? a.title.localeCompare(b.title) : b.date - a.date
        )
        .map((offer, index) => (
          <Offer
            {...offer}
            key={index}
            isBookmarked={offer.isBookmarked}
            toggleBookmarked={() => toggleBookmarked(offer.id)}
          />
        ))
    ) : (
      <div>
        Leider sind zu deiner Suche noch keine Angebote vorhanden. Sei der erste
        der ein Angebot erstellt.
      </div>
    )
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

const OfferContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`
const Headline3 = styled.h3`
  font-weight: unset;
  font-size: 1rem;
  margin-bottom: 1px;
`

const Paragraph = styled.p``
const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(90deg, rgba(123,172,160,0.5) 0%, rgba(123,172,160,1) 48%, rgba(123,172,160,0.5) 100%);
  );
 
`
const Filter = styled.div`
  display: flex;
   background: white;
  padding: 2px;
   position: sticky;
    top: 69px;
    z-index: 2;
`
const FilterButton = styled.button`
  
  background: #7aaca2;
  border: none;
  margin: 6px;
  width: 20%;
  font-size: 1rem;
  border-radius: 3px;
  color: white;
  font-size: 0.8rem;
  height: 15px;
  padding: 0 4px;
  span {
    margin-right: 6px;
  }
  
`
