function showSection(id) {
    const sections = document.querySelectorAll(".content-section");
  
    sections.forEach(section => {
      if (section.id === id) {
        section.style.display = "block";
        section.classList.add("fade-in");
      } else {
        section.style.display = "none";
        section.classList.remove("fade-in");
      }
    });
  }
  
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDark);
  }
  
  window.onload = function () {
    const darkMode = localStorage.getItem("darkMode");
    if (darkMode === "true") {
      document.body.classList.add("dark-mode");
    }
    showSection('about'); // Show About by default
  };
  