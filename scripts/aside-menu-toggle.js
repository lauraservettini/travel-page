const mobileMenuBtnElement = document.querySelector(".mobile-menu-btn");
const asideElement = document.getElementById("nav-aside");
function toggleAsideMenu() {
  console.dir(asideElement);
  if (asideElement.style.display === "none") {
    asideElement.style.display = "block";
  } else {
    asideElement.style.display = "none";
  }
}

mobileMenuBtnElement.addEventListener("click", toggleAsideMenu);
