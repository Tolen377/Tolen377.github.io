// Animación al hacer scroll
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => {
  observer.observe(section);
});

// Google Maps
function initMap() {
  const cafe = { lat: 19.432608, lng: -99.133209 }; // Cambia a tu ubicación
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15,
    center: cafe,
  });
  const marker = new google.maps.Marker({
    position: cafe,
    map: map,
  });
}

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});
