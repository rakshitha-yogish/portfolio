function showSection(id) {
  const sections = document.querySelectorAll(".content-section");
  sections.forEach(section => {
    section.classList.remove("active");
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

function toggleDetails(id) {
  const el = document.getElementById(id);
  if (el) {
    el.style.display = el.style.display === "block" ? "none" : "block";
  }
}

window.onload = function () {
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
  }
  showSection("about");
};
