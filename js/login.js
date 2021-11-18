


const formLogin = document.getElementById('form-login');
const auth = firebase.auth();
formLogin.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = formLogin["login-email"].value;
  const password = formLogin["login-password"].value;

  // Authenticate the User
  auth.signInWithEmailAndPassword( email, password).then((userCredential) => {
    // clear the form
    // signInForm.reset();
    // close the modal
    window.location.href = "data.html";
  })
  .catch((error) => {
    console.log(  error.code ,error.message  )
    // const errorCode =
    // const errorMessage = ;
  });
});
