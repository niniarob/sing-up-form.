const nameInp = document.querySelector("#name");
const surnameInp = document.querySelector("#surname");
const email = document.querySelector("#mail");
const pass = document.querySelector("#pass");
const nam = document.querySelector("#nameError")
const sur = document.querySelector("#surnameError")
const mailerr = document.querySelector("#mailError")
const passer = document.querySelector("#passwordError")
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    addCard(e)
});

const nameRegex = /^[a-zA-Z]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+.[^\s@]+$/;
const passwordRegex = /^.{8,}$/;

function addCard(e) {
    e.preventDefault();
  
    if (nameInp.value === "") {
      nam.innerHTML = "First Name cannot be empty";
      nameInp.classList.add("err");
      return;
    } else if (!nameRegex.test(nameInp.value)) {
      nam.innerHTML = "First Name is not valid";
      nameInp.classList.add("err");
      return;
    } else {
      nam.innerHTML = "";
      nameInp.classList.remove("err");
    }
  
    if (surnameInp.value === "") {
      sur.innerHTML = "Last Name cannot be empty";
      surnameInp.classList.add("err");
      return;
    } else {
      sur.innerHTML = "";
      surnameInp.classList.remove("err");
    }
  
    if (!emailRegex.test(email.value)) {
      mailerr.innerHTML = "Looks like this is not an email";
      email.classList.add("err");
      return;
    } else {
      mailerr.innerHTML = "";
      email.classList.remove("err");
    }
  
    if (!passwordRegex.test(pass.value)) {
      passer.innerHTML = "Password cannot be empty";
      pass.classList.add("err");
      return;
    } else {
      passer.innerHTML = "";
      pass.classList.remove("err");
    }
  
    console.log("First Name:", nameInp.value);
    console.log("Last Name:", surnameInp.value);
    console.log("Email:", email.value);
    console.log("Password:", pass.value);
  }


nameInp.addEventListener("input", clearError);
surnameInp.addEventListener("input", clearError);
email.addEventListener("input", clearError);
pass.addEventListener("input", clearError);

function clearError() {
  if (this.classList.contains("err")) {
    this.classList.remove("err");
    const errorId = this.id + "Error";
    document.querySelector(`#${errorId}`).innerHTML = "";
  }
}