const menuBtn = document.querySelector(".btn-menu");
const overlayAside = document.querySelector(".nav-overlay-nav");
const closeBtn = document.getElementById("btn-close");
const dayMode = document.getElementById("body");
const dayLightNav = document.querySelector(".navbar");
const lightDivs = document.querySelectorAll("div.rect, div.tiles");
// const changeBtn = document.getElementsByClassName("toggleBtn");

/* toggling between modes */
function lightMode() {
  dayMode.classList.toggle("light-mode");
  dayLightNav.classList.toggle("light-mode-nav");
 

  if (document.getElementById("moon").className == "fa fa-sun-o fa-lg") {
    document.getElementById("moon").className = "fa fa-moon-o fa-lg";
  } else {
    document.getElementById("moon").className = "fa fa-sun-o fa-lg";
  }
}

// changeBtn.addEventListener('click', function(){
//   lightDivs.classList.toggle("rect-White");
// })

/* overlay nav */
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

