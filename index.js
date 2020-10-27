const form = document.getElementById("form");
console.log(form);

const msgFname = document.querySelector(".fName");
const msgLname = document.querySelector(".lName");
const msgEmail = document.querySelector(".email");
const msgPassword = document.querySelector(".password");
const inputPassword = form["password"].value;
const errorImg = document.querySelector("img");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputFname = form["fName"].value;
  const inputLname = form["lName"].value;
  const inputEmail = form["email"].value;
  const inputPassword = form["password"].value;

  console.log(inputFname, inputLname, inputEmail, inputPassword);

  if (inputFname === "") {
    addError("fName", "First Name Cannot be empty");
  }
  if (inputLname === "") {
    addError("lName", "Last Name Cannot be empty");
  }
  if (validEmail(inputEmail)) {
    addError("email", "Looks like this is not an email");
  }
  if (inputPassword === "") {
    addError("password", "Password cannot be empty");
  }
});

function addError(input, text) {
  const small = form[input].parentNode.querySelector("small");
  small.innerText = text;
  small.style.opacity = 1;
}

function validEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
