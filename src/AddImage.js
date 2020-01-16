import React, { useState } from 'react'
import { storage } from './services/firebase'
import styled from 'styled-components/macro'

import camera from './images/camera.svg'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { db } from './services/firebase'

export default function AddImage(handleClick) {
  const allInputs = { imgUrl: '' }
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)
  const user = firebase.auth().currentUser

  console.log(imageAsFile)
  console.log(imageAsUrl)

  function handleImageAsFile(event) {
    const image = event.target.files[0]
    setImageAsFile(imageFile => image)
  }

  function handleFireBaseUpload(event) {
    event.preventDefault()
    console.log('start of upload')

    if (imageAsFile === '') {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`)
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile)

    //initiates the firebase side uploading
    uploadTask.on(
      'state_changed',
      snapShot => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot)
      },
      err => {
        //catches the errors
        console.log(err)
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref('images')
          .child(imageAsFile.name)
          .getDownloadURL()
          .then(fireBaseUrl => {
            setImageAsUrl(prevObject => ({
              ...prevObject,
              imgUrl: fireBaseUrl
            }))

            user
              .updateProfile({
                photoURL: fireBaseUrl
              })
              .then(function() {
                console.log('Update successful.')
              })
              .catch(function(error) {
                // An error happened.
              })
            db.collection('users')
              .where('uid', '==', user.uid)
              .get()
              .then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                  db.collection('users')
                    .doc(doc.id)
                    .update({
                      photoURL: fireBaseUrl
                    })
                    .then(function() {
                      console.log('Document successfully updated!')
                    })
                })
              })
          })
      }
    )
  }
  return (
    <Form onSubmit={handleFireBaseUpload}>
      {imageAsFile === '' ? (
        <label htmlFor="file-input">
          <input
            type="file"
            name="file"
            id="file-input"
            onChange={handleImageAsFile}
            style={{ display: 'none' }}
          />
          <BtnCamera
            src={camera}
            alt=""
            width="30px"
            height="30px"
            /* onClick={handleFireBaseUpload} */
          />
        </label>
      ) : (
        <Add>
          ein Bild ausgewählt
          <Button

          /* onClick={handleFireBaseUpload} */
          >
            hinzufügen
          </Button>
        </Add>
      )}
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 55px;
  width: 70px;
`
const Button = styled.button`
  background: #7aaca2;
  color: white;
  border: none;
  border-radius: 2px;
  margin-top: 6px;
`
const BtnCamera = styled.img`
  border: 0;
  cursor: default;
  z-index: 2;
`
const Add = styled.div`
  margin-left: 17px;
  width: 70px;
`
