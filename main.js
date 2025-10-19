// js/main.js
// Navbar cambia de color al hacer scroll
window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  header.classList.toggle("shadow-md", window.scrollY > 50);
});

// Botón "volver arriba" (puedes agregarlo más adelante)
