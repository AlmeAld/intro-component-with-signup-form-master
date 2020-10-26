const inputFname = document.querySelector("#fName");
const inputLname = document.querySelector("#lName");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

const msgFname = document.querySelector(".fName");
const msgLname = document.querySelector(".lName");
const msgEmail = document.querySelector(".email");
const msgPassword = document.querySelector(".password");

const btnSend = document.querySelector(".btnSend");

btnSend.addEventListener("click", (e) => {
  e.preventDefault();
  // console.log(inputEmail);

  if (!inputFname.value) {
    msgFname.textContent = "First Name Cannot be empty";
  }

  if (inputLname.value === "")
    msgLname.textContent = "Last Name Cannot be empty";

  if (inputEmail.value === "")
    msgEmail.textContent = "Looks like this is not an email";
  inputEmail.value = "email@example.com";

  if (inputPassword.value === "")
    msgPassword.textContent = "Password cannot be empty";
});

function validEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
