/* NAVBAR */

const toggle = document.getElementById("navbar-toggle");
const links = document.querySelector(".navbar-links");

toggle.addEventListener("click", () => {
  // Comprobamos si el menú está actualmente expandido (abierto)
  const expanded = toggle.getAttribute("aria-expanded") === "true";

  // Actualizamos el estado accesible del botón
  toggle.setAttribute("aria-expanded", !expanded);

  // Alternamos la visibilidad del menú añadiendo o quitando la clase 'active'
  links.classList.toggle("active");
});
