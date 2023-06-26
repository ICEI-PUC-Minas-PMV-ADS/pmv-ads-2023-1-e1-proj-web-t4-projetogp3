var firebase = require("firebase/app");

require("firebase/auth");

firebase.initializeApp(firebaseConfig);

// Function to handle login
function logar() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, senha)
        .then(function(userCredential) {
            // Sign-in successful
            var user = userCredential.user;
            alert('Sucesso');
            location.href = "principal.html";
        })
        .catch(function(error) {
            // Sign-in failed
            var errorCode = error.code;
            var errorMessage = error.message;
            alert('Email ou senha incorretos');
        });
}