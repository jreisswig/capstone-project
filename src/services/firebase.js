function toggleSignIn() {
   
    const email = document.getElementById('loginuseremail').value
    const password = document.getElementById('loginuserpassword').value
    if (email.length < 4) {
      alert('Bitte gebe eine Email Adresse ein.')
      return
    }
    if (password.length < 4) {
      alert('Bitte gebe ein Passwort ein.')
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
  }
  document.getElementById('quickstart-sign-in').disabled = true
}