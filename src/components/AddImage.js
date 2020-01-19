// import utils
import React, { useState } from 'react'
import { storage } from '../services/firebase'
import styled from 'styled-components/macro'

// import firebase utils
import * as firebase from 'firebase/app'
import 'firebase/auth'
import { db } from '../services/firebase'

// import images
import camera from '../images/camera.svg'

export default function AddImage(handleClick) {
  const allInputs = { imgUrl: '' }
  const [imageAsFile, setImageAsFile] = useState('')
  const [setImageAsUrl] = useState(allInputs)
  const user = firebase.auth().currentUser

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

    uploadTask.on(
      'state_changed',
      snapShot => {
        console.log(snapShot)
      },
      err => {
        console.log(err)
      },
      () => {
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
              .catch(function(error) {})

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
          <BtnCamera src={camera} alt="" width="30px" height="30px" />
        </label>
      ) : (
        <Add>
          ein Bild ausgewählt
          <Button>hinzufügen</Button>
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
