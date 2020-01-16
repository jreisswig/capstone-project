import firebase from 'firebase'
import 'firebase/auth'

export const user = firebase.auth().currentUser
