var firebase = require("firebase/app");

require("firebase/auth");

firebase.initializeApp(firebaseConfig);

// Function to handle password recovery
function recoverPassword() {
    var email = document.querySelector('.bar').value;

    firebase.auth().sendPasswordResetEmail(email)
        .then(function() {
            // Password recovery email sent
            alert('Um email de recuperação de senha foi enviado para o endereço fornecido.');
            location.href = "login.html";
        })
        .catch(function(error) {
            // Error occurred while sending password recovery email
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage);
        });
}

// Add event listener to the button
var button = document.querySelector('button');
button.addEventListener('click', recoverPassword);