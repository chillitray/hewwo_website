function toggleMenu() {
  const mobileMenu = document.querySelector(".mobile-menu");
  const hamburgerIcon = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".close");

  mobileMenu.classList.toggle("show");
  hamburgerIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}
