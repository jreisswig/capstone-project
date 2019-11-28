import React from 'react'
import Offer from './Offer'
import Categories from './Categories'
import styled from 'styled-components/macro'

export default function Home({ offers, posts }) {
  return (
    <HomeContainer>
      <Paragraph>
        Hallo User, <br /> schaue was in Seestermühe los ist.
      </Paragraph>
      <Line />
      <Headline3>Filter nach Kategorien</Headline3>
      <Categories />
      <Line />
      <Headline3>Angebote von Seestermühern</Headline3>
      <TagContainer>
        {offers
          .filter(offer => offer.title)
          .map((offer, index) => (
            <Offer {...offer} key={index} />
          ))}
      </TagContainer>
      <Line />
      {/*   <PostContainer>
        {posts.map((post, index) => (
          <Post {...post} key={index} />
        ))}
      </PostContainer> */}
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  padding: 20px;
  overflow: scroll;
`
const TagContainer = styled.section`
  display: flex;
  flex-wrap: wrap;
`
const Headline3 = styled.h3`
  font-weight: unset;
`

const Paragraph = styled.p``
const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(90deg, rgba(123,172,160,0.5088235123150823) 0%, rgba(123,172,160,1) 48%, rgba(123,172,160,0.5144257532114409) 100%);
  );
`
