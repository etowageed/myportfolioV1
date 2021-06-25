function darkMode() {
  let nightMode = document.getElementById("body");
  nightMode.classList.toggle("dark-mode");
  let nightModeNav = document.getElementById("nav-navbar");
  nightModeNav.classList.toggle("dark-mode-nav");

  if (document.getElementById("moon").className == "fa fa-moon-o fa-lg") {
    document.getElementById("moon").className = "fa fa-sun-o fa-lg";
  } else {
    document.getElementById("moon").className = "fa fa-moon-o fa-lg";
  }
}

let menuBtn = document.querySelector(".btn-menu");
let overlayAside = document.getElementById("slide-nav");
let closeBtn = document.getElementById("btn-close");

function openOverlay() {
  overlayAside.style.visibility = "visible";
}

function closeOverlay() {
  if (openOverlay == true) {
    overlayAside.style.visibility = "hidden";
  }
}
