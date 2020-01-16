import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyC1DS8tlqAeLKB3Uj9fakcvMUwhalWV2oo',
  authDomain: 'hallodorf-37e4f.firebaseapp.com',
  databaseURL: 'https://hallodorf-37e4f.firebaseio.com',
  projectId: 'hallodorf-37e4f',
  storageBucket: 'hallodorf-37e4f.appspot.com',
  messagingSenderId: '212112447808',
  appId: '1:212112447808:web:56a817d1040990578fc2a5',
  measurementId: 'G-4Y2JQMDZJY'
}
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore()

export const storage = firebase.storage()

// Database
export const docRef = db.collection('Offers').doc('IHLUCy8hwRiL7bm9Tqn6')

export default function handleSignIn() {
  const email = document.getElementById('loginuseremail').value
  const password = document.getElementById('loginuserpassword').value

  if (email.length < 4) {
    alert('Bitte gebe eine Email Adresse ein.')
    return
  }
  if (password.length < 4) {
    alert('Bitte gebe ein stärkeres Passwort ein.')
    return
  }

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function(error) {
      const errorCode = error.code
      const errorMessage = error.message
      if (errorCode === 'auth/wrong-password') {
        alert('Falsches Passwort.')
      } else {
        alert(errorMessage)
      }
      console.log(error)
    })
    .then(
      setTimeout(function() {
        window.location.replace('/')
      }, 1500)
    )
}

export function signUp(email, password) {
  saveUser()
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)

    .then(function() {
      const user = firebase.auth().currentUser
      user.sendEmailVerification()
    })

    .then(function() {
      const user = firebase.auth().currentUser
      user.updateProfile({
        displayName: document.getElementById('username').value
      })
    })
    .then(saveUser)

    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // [START_EXCLUDE]
      if (errorCode === 'auth/weak-password') {
        alert('Wähle ein stärkeres Passwort')
      } else {
        alert(errorMessage)
      }
      console.log(error)
      // [END_EXCLUDE]
    })
}

export function logout() {
  return firebase.auth().signOut()
}

export function saveUser() {
  firebase.auth().onAuthStateChanged(function(user) {
    return db
      .collection(`users`)
      .add({
        email: document.getElementById('useremail').value,
        uid: user.uid,
        displayName: document.getElementById('username').value
      })
      .then(docRef => docRef)
      .catch(function(error) {
        console.error('Error adding document: ', error)
      })
  })
}
