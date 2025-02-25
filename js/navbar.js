const navEl = document.getElementById("navbar")

const navContent = `<div id="logo">
  <a href="home.html">
    <img src="../img/iDonut_logo.png" alt="logp" style="width: 100%"/>
  </a>
</div>
<div class="navbar_buttons">
  <a href="login.html" id="login_button">Login</a>
  <a href="register.html" id="signup_button">Signup</a>

</div>`
navEl.innerHTML = navContent;
