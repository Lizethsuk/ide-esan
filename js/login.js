

import {

  getAuth , signInWithEmailAndPassword
} from "./firebase.js";




// 
// // const auth = firebase.auth();


const formLogin = document.getElementById('form-login');
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const auth = getAuth();
  const email = formLogin["login-email"].value;
  const password = formLogin["login-password"].value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      window.location.href = "data.html";
    })
    .catch((error) => {
      console.log(error.code, error.message)
    });

  // Authenticate the User
  // auth
  //   .create(email, password)
  //   .then((userCredential) => {
  //     // clear the form
  //     // signInForm.reset();
  //     // close the modal
  //     window.location.href = "data.html";
  //   })
  //   .catch((error) => {
  //     console.log(error.code, error.message)
  //     // const errorCode =
  //     // const errorMessage = ;
  //   });




});



// import { auth } from "./firebase.js";


// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });
