document.addEventListener("DOMContentLoaded", () => {
  const navbarToggle = document.getElementById("navbar-toggle");
  const navbarLinks = document.querySelector(".navbar-links");

  if (!navbarToggle || !navbarLinks) return;

  // Abrir / cerrar menú en móvil
  navbarToggle.addEventListener("click", () => {
    const isExpanded = navbarToggle.getAttribute("aria-expanded") === "true";
    navbarToggle.setAttribute("aria-expanded", String(!isExpanded));
    navbarLinks.classList.toggle("active");
  });

  // Cerrar menú al cambiar a escritorio
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      navbarLinks.classList.remove("active");
      navbarToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Cerrar menú al hacer clic en un enlace (en móvil)
  navbarLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        navbarLinks.classList.remove("active");
        navbarToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
});



