const signupBtn = document.getElementById("signup_button");

const changeColor = () =>{
  signupBtn.style.fontSize="1.2rem";
  // loginBtn.removeEventListener("mouseover", changeColor)
}
const resetColor = () => {
  signupBtn.style.fontSize=""; // Resets the color to its default
};


signupBtn.addEventListener("mouseover", changeColor)
signupBtn.addEventListener("mouseout", resetColor);  //
