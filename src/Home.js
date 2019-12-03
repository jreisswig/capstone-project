import React, { useState, useEffect } from 'react'
import Offer from './Offer'
import Wappen from './images/WappenSeestermuehe.svg'
import Categories from './Categories'
import Searchbar from './Searchbar'
import styled from 'styled-components/macro'
import { updateExpression } from '@babel/types'

export default function Home({ offers }) {
  const [input, setInput] = useState('')
  const [selectedCategories, setSelectedCategories] = useState(['Haus und Garten'])
  const [isHomeAndGarden, setIsHomeAndGarden] = useState(false)
  const [isCarAndBike, setIsCarAndBike] = useState(false)
  const [isFamilyAndAnimal, setIsFamilyAndAnimal] = useState(false)
  const [isHobby, setIsHobby] = useState(false)

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
        handleHomeAndGarden={toggleHomeAndGarden}
        handleCarAndBike={toggleCarAndBike}
        handleFamilyAndAnimal={toggleFamilyAndAnimal}
        handleHobby={toggleHobby}
      />
      <Line />
      <Headline3>Angebote von Seestermühern</Headline3>
      <TagContainer>
          {offers
            .filter(
              item =>
                {
                  const title = item.title.toLowerCase()
                  const description = item.description.toLowerCase()
                  const query = input.toLowerCase()

                  return selectedCategories.includes(item.category)) && (query === '' || title.includes(query) || description.includes(query))
                }
            )
            .map((offer, index) => (
              <Offer {...offer} key={index} />
            ))}
        </TagContainer>
      {input === '' && isHomeAndGarden && (
       
      )}
      {input === '' && isCarAndBike && (
        <TagContainer>
          {offers
            .filter(item => item.category === 'Auto, Rad und Boot')
            .map((offer, index) => (
              <Offer {...offer} key={index} />
            ))}
        </TagContainer>
      )} 
      {input === '' && isFamilyAndAnimal && (
        <TagContainer>
          {offers
            .filter(item => item.category === 'Familie und Tier')
            .map((offer, index) => (
              <Offer {...offer} key={index} />
            ))}
        </TagContainer>
      )} 
      {input === '' && isHobby && (
        <TagContainer>
          {offers
            .filter(item => item.category === 'Freizeit und Hobby')
            .map((offer, index) => (
              <Offer {...offer} key={index} />
            ))}
        </TagContainer>
      )}
      
      {input !== '' && isHomeAndGarden && (
        <TagContainer>
          {offers
            .filter(item => item.category === 'Haus und Garten')
            .filter(
              item =>
                item.title.toLowerCase().includes(input.toLowerCase()) ||
                item.description.toLowerCase().includes(input.toLowerCase())
            )

            .map((offer, index) => (
              <Offer {...offer} key={index} />
            ))}
        </TagContainer>
      )}
      {input !== '' && isCarAndBike && (
        <TagContainer>
          {offers
            .filter(item => item.category === 'Auto, Rad und Boot')
            .filter(
              item =>
                item.title.toLowerCase().includes(input.toLowerCase()) ||
                item.description.toLowerCase().includes(input.toLowerCase())
            )
            .map((offer, index) => (
              <Offer {...offer} key={index} />
            ))}
        </TagContainer>
      )}
      {input !== '' && isFamilyAndAnimal && (
        <TagContainer>
          {offers
            .filter(item => item.category === 'Familie und Tier')
            .filter(
              item =>
                item.title.toLowerCase().includes(input.toLowerCase()) ||
                item.description.toLowerCase().includes(input.toLowerCase())
            )
            .map((offer, index) => (
              <Offer {...offer} key={index} />
            ))}
        </TagContainer>
      )}
      {input !== '' && isHobby && (
        <TagContainer>
          {offers
            .filter(item => item.category === 'Freizeit und Hobby')
            .filter(
              item =>
                item.title.toLowerCase().includes(input.toLowerCase()) ||
                item.description.toLowerCase().includes(input.toLowerCase())
            )
            .map((offer, index) => (
              <Offer {...offer} key={index} />
            ))}
        </TagContainer>
      )}

      {input !== '' && !isCarAndBike && !isHomeAndGarden && !isFamilyAndAnimal && !isHobby &&(
        <TagContainer>
          {offers
            .filter(
              item =>
                item.title.toLowerCase().includes(input.toLowerCase()) ||
                item.description.toLowerCase().includes(input.toLowerCase())
            )

            .map((offer, index) => (
              <Offer {...offer} key={index} />
            ))}
        </TagContainer>
      )}
      
      {input === '' && !isCarAndBike && !isHomeAndGarden && !isFamilyAndAnimal && !isHobby &&(
        <TagContainer>
          {offers.map((offer, index) => (
            <Offer {...offer} key={index} />
          ))}
        </TagContainer>
      )}
 
      <Line />
    </HomeContainer>
  )
  function toggleHomeAndGarden() {
    setIsHomeAndGarden(!isHomeAndGarden)
  }
  function toggleCarAndBike() {
    setIsCarAndBike(!isCarAndBike)
  }
  function toggleFamilyAndAnimal(){
    setIsFamilyAndAnimal(!isFamilyAndAnimal)
  }


function toggleHobby () {
  setIsHobby(!isHobby)
}



  function CategoryFilter(isClicked) {
    if (isClicked) {
      return offers
        .filter(item => item.category === 'Haus und Garten')
        .map((offer, index) => <Offer {...offer} key={index} />)
    } else if (input !== '') {
      return offers
        .filter(
          item => item.title.includes(input) || item.description.includes(input)
        )
        .map((offer, index) => <Offer {...offer} key={index} />)
    } else {
      return offers.map((offer, index) => <Offer {...offer} key={index} />)
    }
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
