/* toggling between modes */
function lightMode() {
  let dayMode = document.getElementById("body");
  dayMode.classList.toggle("light-mode");
  let dayLightNav = document.querySelector(".navbar");
  dayLightNav.classList.toggle("light-mode-nav");

  if (document.getElementById("moon").className == "fa fa-sun-o fa-lg") {
    document.getElementById("moon").className = "fa fa-moon-o fa-lg";
  } else {
    document.getElementById("moon").className = "fa fa-sun-o fa-lg";
  }
}
/* overlay nav */
let menuBtn = document.querySelector(".btn-menu");
let overlayAside = document.querySelector(".nav-overlay-nav");
let closeBtn = document.getElementById("btn-close");

function openOverlay() {
  overlayAside.style.visibility = "visible";
}

function closeOverlay() {
  if ((overlayAside.style.visibility = "visible")) {
    overlayAside.style.visibility = "hidden";
  } else {
    overlayAside.style.visibility = "visible";
  }
}
