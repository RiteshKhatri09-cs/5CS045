// Mobile menu toggle
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");
menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuButton.innerHTML = navLinks.classList.contains("open") ? "✕" : "☰";
});

// Contact form validation
const form = document.getElementById("contact-form");
const messageDiv = document.getElementById("form-message");
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("message").value;
  if (!name || !email || !msg) {
    messageDiv.textContent = "Fill all fields";
    messageDiv.style.color = "red";
  } else {
    messageDiv.textContent = "Message sent!";
    messageDiv.style.color = "lightgreen";
    form.reset();
  }
});

// About Me popup
const popupBtn = document.getElementById("popup-btn");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");

popupBtn.addEventListener("click", () => popup.classList.add("active"));
closePopup.addEventListener("click", () => popup.classList.remove("active"));
window.addEventListener("click", e => { if(e.target === popup) popup.classList.remove("active"); });
