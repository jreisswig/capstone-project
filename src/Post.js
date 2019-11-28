import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Pin from './Pin.js'
import ArrowShow from './images/ArrowShow.svg'
import ArrowHide from './images/ArrowHide.svg'
import PropTypes from 'prop-types'

export default function Post({ title, description, name, phonenumber, email }) {
  const [isHidden, setIsHidden] = useState(true)

  return (
    <PostWrapper>
      <Pin></Pin>
      <PostSearch>ICH SUCHE</PostSearch>
      <PostTitle>{title}</PostTitle>

      <PostDescription>{description}</PostDescription>
      <Icon onClick={toggleIsHidden}>
        {isHidden ? (
          <Button>Kontakt</Button>
        ) : (
          <Button>Kontakt</Button>
          /* <img src={ArrowShow} alt="IconShow" height="17px" width="17px" /> */
          /* <img src={ArrowHide} alt="IconHide" height="17px" width="17px" /> */
        )}
      </Icon>
      <Line />
      {!isHidden && (
        <>
          <PostName>{name}</PostName>
          <ContactWrapper>
            <PostPhoneNumber>{phonenumber} </PostPhoneNumber>
            <p>•</p>
            <PostEmail>{email}</PostEmail>
          </ContactWrapper>
        </>
      )}
    </PostWrapper>
  )
  function toggleIsHidden() {
    setIsHidden(!isHidden)
  }
}
const Button = styled.button`
  background: #99c4c7;
  border: none;
  border-radius: 3px;
  width: 53px;
  font-weight: lighter;
  font-size: 0.8rem;
`

const PostWrapper = styled.section`
  position: relative;
  background-color: #f3f7f6;
  border-radius: 18px;
  padding: 3px 15px;
  box-shadow: 0 5px 5px #f0efef;

  &: hover {
    animation-name: swing;
    animation-duration: 1s;
    @keyframes swing {
      0% {
        transform: rotate(0deg);
      }
      20% {
        transform: rotate(1deg);
      }

      50% {
        transform: rotate(-2deg);
      }
      50% {
        transform: rotate(-1deg);
      }

      100% {
        transform: rotate(0deg);
      }
    }
  }
`
const PostTitle = styled.p`
  font-weight: bold;
  color: #424242;
`
const PostDescription = styled.p`
  position: relative;
`
const Icon = styled.div`
  position: absolute;
  bottom: 19px;
  right: 17px;
`
const PostName = styled.p`
  color: #424242;

  margin-bottom: 0px;
`
const PostPhoneNumber = styled.p`
  padding-right: 7px;
`
const PostEmail = styled.p`
  padding-left: 7px;
`
const PostSearch = styled.p`
  font-weight: lighter;
`
const ContactWrapper = styled.section`
  display: flex;
`
const Line = styled.hr`
  border: 0;
  height: 1px;
  background-image: linear-gradient(90deg, rgba(123,172,160,0.5088235123150823) 0%, rgba(123,172,160,1) 48%, rgba(123,172,160,0.5144257532114409) 100%);
  );
`

Post.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phonenumber: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}
