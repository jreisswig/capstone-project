import firebase from 'firebase'
import 'firebase/firestore'

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


export const user = firebase.auth().currentUser