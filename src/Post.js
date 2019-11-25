import React from 'react'
import styled from 'styled-components/macro'
import Pin from './Pin.js'
import PropTypes from 'prop-types'

export default function Post({ title, description, name, telnumber, email }) {
  return (
    <PostWrapper>
      <Pin></Pin>
      <PostSearch>ICH SUCHE</PostSearch>
      <PostTitle fontWeight="bold">{title}</PostTitle>
      <PostDescription>{description}</PostDescription>
      <Line />
      <PostName>{name}</PostName>
      <ContactWrapper>
        <PostTelNumber>{telnumber}</PostTelNumber>
        <p>•</p>
        <PostEmail>{email}</PostEmail>
      </ContactWrapper>
    </PostWrapper>
  )
}
const PostWrapper = styled.section`
  position: relative;
  background-color: #f3f7f6;
  border-radius: 2px;
  padding: 3px 15px;
  margin-top: 7px;
  box-shadow: 0 5px 5px #f0efef;
`
const PostTitle = styled.p`
  font-weight: ${props => props.fontWeight};
  color: #424242;
`
const PostDescription = styled.p``
const PostName = styled.p`
  color: #424242;
  font-size: 0.9rem;
  margin-bottom: 0px;
`
const PostTelNumber = styled.p`
  padding-right: 7px;
  font-size: 0.9rem;
`
const PostEmail = styled.p`
  padding-left: 7px;
  font-size: 0.9rem;
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
  telNumber: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired
}
