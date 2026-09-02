/* NAVBAR */

// Scroll suave para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


/* ANIMACIONES CON INTERSECTION OBSERVER */

// Función genérica para observar elementos y añadirles la clase "visible"
function activateOnScroll(elements) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  });

  elements.forEach(el => observer.observe(el));
}

// Proyectos
activateOnScroll(document.querySelectorAll(".project-card"));

// Diseños
activateOnScroll(document.querySelectorAll(".design-card"));

// Sobre mí
activateOnScroll(document.querySelectorAll(".about-text, .about-image img"));

// Contacto (solo animación, ya sin formulario)
activateOnScroll(document.querySelectorAll(".contact-direct, .contact-info"));

// Footer
const footer = document.querySelector(".footer");
const observerFooter = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      footer.classList.add("visible");
    }
  });
});
observerFooter.observe(footer);

// Abrir imagenes en el menu Diseños
document.addEventListener("DOMContentLoaded", () => {

  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("modal-img");
  const closeBtn = document.querySelector(".close-modal");

  document.querySelectorAll(".open-modal").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "flex";
      modalImg.src = img.src;
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

});

