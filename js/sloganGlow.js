const sloganTxt = document.getElementById("slogan")

let glowState = false;

setInterval(() => {
  if (glowState) {
    sloganTxt.style.textShadow = '0 0 10px rgba(255, 255, 0, 0.8)';
  } else {
    sloganTxt.style.textShadow = 'none';
  }
  glowState = !glowState;
}, 500);
