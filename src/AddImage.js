import React, { useState } from 'react'
import { storage } from './services/firebase'
import styled from 'styled-components/macro'

import camera from './images/camera.svg'
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default function AddImage() {
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
          })
      }
    )
  }

  /* let fileInput = React.createRef()
  const user = firebase.auth().currentUser

  function upload(event) {
    const formData = new FormData()
    const file = event.target.files[0]
    const storageRef = firebase
      .storage()
      .ref(user + '/profilePicture/' + file.name)
    storageRef.put(file)
    user
      .updateProfile({
        photoURL: formData.append('file', file)
      })
      .then(function() {
        // Update successful.
      })
      .catch(function(error) {
        // An error happened.
      })
  }

  function handleClick() {
    fileInput.current.click()
  } */

  return (
    <Form onSubmit={handleFireBaseUpload}>
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
          width="25px"
          height="25px"
          /* onClick={handleFireBaseUpload} */
        />
      </label>
      <button

      /* onClick={handleFireBaseUpload} */
      ></button>
    </Form>
  )
}

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 2px solid #7aaca2;
  height: 50px;
  width: 50px;
`

const BtnCamera = styled.img`
  border: 0;
  cursor: default;
  z-index: 2;
`
