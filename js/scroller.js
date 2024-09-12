document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling behavior
  document.querySelectorAll(".titles a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      console.log("Clicked section:", this.getAttribute("href"));

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      const offset = 100;
      const targetPosition =
        targetElement.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    });
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".titles a");

  function changeLinkState() {
    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const isInViewport =
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2;

      if (isInViewport) {
        currentSection = "#" + section.id;
      }
    });

    navLinks.forEach((link) => {
      if (link.getAttribute("href") === currentSection) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  changeLinkState();

  window.addEventListener("scroll", changeLinkState);
});
