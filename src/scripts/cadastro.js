var firebase = require("firebase/app");

require("firebase/auth");

firebase.initializeApp(firebaseConfig);

// Function to handle form submission
function cadastrar(event) {
    event.preventDefault();

    var nome = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('password').value;

    firebase.auth().createUserWithEmailAndPassword(email, senha)
        .then(function(userCredential) {
            // Sign-up successful
            var user = userCredential.user;
            alert('Cadastro realizado com sucesso');
            location.href = "login.html";
        })
        .catch(function(error) {
            // Sign-up failed
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

// Add form submission event listener
var form = document.getElementById('form');
form.addEventListener('submit', cadastrar);