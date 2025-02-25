const signupForm = document.getElementById("signup_form")
const emailEl = document.getElementById("email")
const passwordEl = document.getElementById("password")
const nameEl = document.getElementById("name")

const handleSubmit = e =>{
  e.preventDefault();

  let valid = true;
  if (!validateEmail(emailEl.value)) {
    valid = false;
    document.getElementById("emailError").style.display = "block";
  }
  if (!validateName(nameEl.value)) {
    valid = false;
    document.getElementById("nameError").style.display = "block";
  }
  if (!validatePassword(passwordEl.value)) {
    valid = false;
    document.getElementById("passwordError").style.display = "block";
  }
  if(valid)
    signupForm.submit();
}


signupForm.addEventListener("submit", handleSubmit)

emailEl.addEventListener("click", ()=>document.getElementById("emailError").style.display = "none")
passwordEl.addEventListener("click", ()=>document.getElementById("passwordError").style.display = "none")
nameEl.addEventListener("click", ()=>document.getElementById("nameError").style.display = "none")


const validateEmail = (email) =>{
  const re = /[a-zA-Z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$/
  return re.test(email);
}
function validatePassword(password) {
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return re.test(password);
}
function validateName(name) {
  const re = /^[a-zA-Z0-9.-]{2,20}$/
  return re.test(name);
}

