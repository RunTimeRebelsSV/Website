// Typing effect
const text = "S-VYASA Coding Club";
let index = 0;
function typeEffect() {
  document.getElementById("typing-text").textContent = text.slice(0, index++);
  if (index <= text.length) {
    setTimeout(typeEffect, 150);
  }
}
window.onload = typeEffect;
// ====== MOBILE NAVBAR TOGGLE ======
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
// Close the mobile menu when a link is clicked
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});