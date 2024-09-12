document.addEventListener("DOMContentLoaded", () => {
  // Get modal element
  const modal = document.getElementById("coming-soon-modal");
  // Get the close button
  const closeButton = document.querySelector(".close-button");
  // Get download button
  const downloadButton = document.querySelector(".download-button");

  // Show modal
  downloadButton.addEventListener("click", () => {
    modal.classList.remove("hidden");
  });

  // Close modal when close button is clicked
  closeButton.addEventListener("click", () => {
    modal.classList.add("hidden");
  });

  // Close modal when clicking outside of modal content
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hidden");
    }
  });
});
