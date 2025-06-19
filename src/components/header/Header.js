import "./Header.css";

export default function Header({}){
    document.addEventListener("DOMContentLoaded", () => {
  const name = "Seu Nome"; 
  const header = document.getElementById("header");
  const theme = localStorage.getItem("theme") || "light";
  setTheme(theme);

  header.innerHTML = `
    <div class="header-inner">
      <div class="logo">${name}</div>
      <nav class="nav-desktop">
        <a href="#sobre">Sobre</a>
        <a href="#habilidades">Habilidades</a>
        <a href="#projetos">Projetos</a>
        <a href="#contato">Contato</a>
        <button id="theme-toggle" class="icon-button">${theme === "dark" ? "☀️" : "🌙"}</button>
      </nav>
      <div class="nav-mobile-buttons">
        <button id="theme-toggle-mobile" class="icon-button">${theme === "dark" ? "☀️" : "🌙"}</button>
        <button id="menu-toggle" class="icon-button">☰</button>
      </div>
    </div>
    <div id="mobile-menu" class="mobile-menu hidden">
      <a href="#sobre">Sobre</a>
      <a href="#habilidades">Habilidades</a>
      <a href="#projetos">Projetos</a>
      <a href="#contato">Contato</a>
    </div>
  `;

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const themeToggles = [document.getElementById("theme-toggle"), document.getElementById("theme-toggle-mobile")];

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
    menuToggle.textContent = mobileMenu.classList.contains("hidden") ? "☰" : "✖";
  });

  themeToggles.forEach((btn) =>
    btn.addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme") || "light";
      const newTheme = current === "dark" ? "light" : "dark";
      setTheme(newTheme);
      themeToggles.forEach((t) => (t.textContent = newTheme === "dark" ? "☀️" : "🌙"));
    })
  );

  function setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }
});
}
