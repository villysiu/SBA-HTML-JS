const loginBtn = document.getElementById("login_button");

const changeColor = () =>{
  loginBtn.style.fontSize="1.2rem";
  // loginBtn.removeEventListener("mouseover", changeColor)
}
const resetColor = () => {
  loginBtn.style.fontSize=""; // Resets the color to its default
};

loginBtn.addEventListener("mouseover", changeColor)
loginBtn.addEventListener("mouseout", resetColor);  //


