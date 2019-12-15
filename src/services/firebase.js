import * as firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import {db} from './constants'


//export const user = firebase.auth().currentUser

export const currentUser = firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
});






// Database
export const docRef = db.collection('Offers').doc('IHLUCy8hwRiL7bm9Tqn6')

docRef
  .get()
  .then(function(doc) {
    if (doc.exists) {
      console.log('Document data:', doc.data())
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
    }
  })
  .catch(function(error) {
    console.log('Error getting document:', error)
  })

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
      document.getElementById('quickstart-sign-in').disabled = false
    })

  document.getElementById('quickstart-sign-in').disabled = true
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

/* export function update() {
  user
    .updateProfile({
      displayName: document.getElementById('username').value
    })
    .then(function() {
      // Update successful.
    })
    .catch(function(error) {
      // An error happened.
    })
} */

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
