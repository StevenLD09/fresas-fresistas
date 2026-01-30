// ================= PROCESOS CON IMAGEN =================
document.querySelectorAll(".step").forEach(step => {
  step.addEventListener("click", () => {
    const section = step.closest(".section");
    const infoBox = section.querySelector(".step-info");
    const textBox = infoBox.querySelector(".step-text");
    const image = infoBox.querySelector(".step-image");

    // Texto
    textBox.textContent = step.dataset.info;

    // Imagen
    if (step.dataset.img) {
      image.src = step.dataset.img;
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  });
});

// ================= MODO OSCURO =================
document.getElementById("darkToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// ================= FRESITA KAWAII =================
const fresitaData = {
  origen: {
    title: "¡Tengo Pedigrí!",
    text: "Vengo de un vivero certificado 🍓. Aquí nada es improvisado.",
    fact: "Tengo pasaporte fitosanitario 🌍 Viajo por todo el mundo!"
  },
  campo: {
    title: "Mi Diario de Spa",
    text: "Cada riego y cuidado queda anotado ✨",
    fact: "La paciencia protege tu salud 😌"
  },
  viaje: {
    title: "¡Abran Paso!",
    text: "Viajo fría y protegida 🚚❄️",
    fact: "Sensores vigilan mi viaje 🚨"
  }
};

document.querySelectorAll(".fresita-side").forEach(f => {
  f.querySelector(".fresita-icon").addEventListener("click", () => {
    f.classList.toggle("active");
    const data = fresitaData[f.dataset.section];
    if (!data) return;

    f.querySelector(".f-title").textContent = data.title;
    f.querySelector(".f-text").textContent = data.text;
    f.querySelector(".f-fact").textContent = data.fact;
  });
});
