// Hämta element för Basic modal
const basicImage = document.getElementById("basicImage");
const modal = document.getElementById("popupModal");
const closeBtn = document.querySelector(".close");

// Visa modal vid klick på Basic-bilden
basicImage.addEventListener("click", () => {
  modal.style.display = "block";
});

// Dölj modal vid klick på stäng-knappen
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Dölj modal om användaren klickar utanför modalinnehållet
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});