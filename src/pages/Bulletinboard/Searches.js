import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

export default function Post({ title, description, name, phonenumber, email }) {
  return (
    <PostWrapper>
      <PostSearch>ICH SUCHE</PostSearch>
      <PostTitle>{title}</PostTitle>
      <PostDescription>{description}</PostDescription>
      <Line />
      <PostName>{name}</PostName>
      <ContactWrapper>
        <PostPhoneNumber>{phonenumber} </PostPhoneNumber>
        <p>•</p>
        <PostEmail>{email}</PostEmail>
      </ContactWrapper>
      )}
    </PostWrapper>
  )
}

const PostWrapper = styled.section`
  position: relative;
  background-color: #f3f7f6;
  border-radius: 18px;
  padding: 3px 15px;
  box-shadow: 0 5px 5px #f0efef;
`
const PostTitle = styled.p`
  font-weight: bold;
  color: #424242;
`
const PostDescription = styled.p``
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
