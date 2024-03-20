document.getElementById("nav-menu-button").addEventListener("click", () => {
  console.log("click");
  let slideMenu = document.getElementById("slide-menu");
  if (slideMenu.classList.contains("active")) {
    slideMenu.classList.remove("active");
    document.getElementById("menu-open-button").classList.add("shown");
    document.getElementById("menu-close-button").classList.remove("shown");
    document.getElementById("slide-cover").classList.remove("show");
  } else {
    slideMenu.classList.add("active");
    document.getElementById("menu-open-button").classList.remove("shown");
    document.getElementById("menu-close-button").classList.add("shown");
    document.getElementById("slide-cover").classList.add("show");
  }
});
