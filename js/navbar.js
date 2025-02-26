const navEl = document.getElementById("navbar")



const navContent =
  `<div id="logo">
    <a href="home.html">
      <img src="../img/iDonut_logo.png" alt="logp" style="width: 100%"/>
    </a>
  </div>
  <div class="navbar_buttons">
    <a href="login.html" id="login_button">Login</a>
    <a href="register.html" id="signup_button">Signup</a>
  </div>`
navEl.innerHTML = navContent;


const loginBtn = document.getElementById("login_button");
const signupBtn = document.getElementById("signup_button");

const changeSize = (btn) =>{
  btn.style.fontSize="1.2rem";
}
const resetSize = (btn) => {
  btn.style.fontSize=""; // Resets the color to its default
};

loginBtn.addEventListener("mouseover", ()=>changeSize(loginBtn))
loginBtn.addEventListener("mouseout", ()=>resetSize(loginBtn));

signupBtn.addEventListener("mouseover", ()=>changeSize(signupBtn))
signupBtn.addEventListener("mouseout", ()=>resetSize(signupBtn));
