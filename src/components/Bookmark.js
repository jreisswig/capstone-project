import React from 'react'
import styled from 'styled-components/macro'
import StarFill from '../images/star-fill.svg'
import Star from '../images/star.svg'
import * as firebase from 'firebase/app'

export default function Bookmark({ toggleBookmarked, isBookmarked }) {
  const user = firebase.auth().currentUser

  return (
    <BookmarkWrapper onClick={toggleBookmarked}>
      {isBookmarked.includes(user && user.uid) ? (
        <img src={StarFill} alt="Gemerkt" height="15px" width="15px" />
      ) : (
        <img src={Star} alt="Merken" height="15px" width="15px" />
      )}
    </BookmarkWrapper>
  )
}

const BookmarkWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 30px;
  width: 0;
`
