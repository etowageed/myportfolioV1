function darkMode() {
  var nightMode = document.getElementById("body");
  nightMode.classList.toggle("dark-mode");
  var nightModeNav = document.getElementById("nav-navbar");
  nightModeNav.classList.toggle("dark-mode-nav");

  if (document.getElementById("moon").className == "fa fa-moon-o fa-lg") {
    document.getElementById("moon").className = "fa fa-sun-o fa-lg";
  } else {
    document.getElementById("moon").className = "fa fa-moon-o fa-lg";
  }
}
