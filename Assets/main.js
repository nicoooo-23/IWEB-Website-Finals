// Responsive navigation menu
document.addEventListener("DOMContentLoaded", function () {
  const menuBtn = document.getElementById("menu-btn");
  const navMenu = document.getElementById("nav-menu");

  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});

// For closing automatically
const navLinks = navMenu.querySelectorAll("a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});
