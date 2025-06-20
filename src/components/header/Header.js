import { useState, useEffect } from "react";
import "./Header.css";

export default function Header() {
  const name = "Otávio Alexandre";
  const subname = "Desenvolvedor Java";

  const solIcon = "/Imgs/Sol.png";
  const luaIcon = "/Imgs/moon.png";

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  function toggleMobileMenu() {
    setMobileMenuOpen((prev) => !prev);
  }

  function scrollToSection(id) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  const themeIcon = theme === "dark" ? solIcon : luaIcon;

  return (
    <header id="header">
      <div className="header-inner">
        <div className="logo">
          <span className="name">{name}</span>
          <span className="subname">{subname}</span>
        </div>

        <nav className="nav-desktop">
          <a onClick={() => scrollToSection("sobre")} style={{ cursor: "pointer" }}>
            Sobre
          </a>
          <a onClick={() => scrollToSection("skills")} style={{ cursor: "pointer" }}>
            Skills
          </a>
          <a onClick={() => scrollToSection("projetos")} style={{ cursor: "pointer" }}>
            Projetos
          </a>
          <a onClick={() => scrollToSection("contato")} style={{ cursor: "pointer" }}>
            Contato
          </a>
          <button
            id="theme-toggle"
            className="icon-button"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            <img src={themeIcon} alt="Ícone de tema" className="theme-icon" />
          </button>
        </nav>

        <div className="nav-mobile-buttons">
          <button
            id="theme-toggle-mobile"
            className="icon-button"
            onClick={toggleTheme}
            aria-label="Alternar tema"
          >
            <img src={themeIcon} alt="Ícone de tema" className="theme-icon" />
          </button>
          <button
            id="menu-toggle"
            className="icon-button"
            onClick={toggleMobileMenu}
            aria-label="Alternar menu móvel"
          >
            {mobileMenuOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      <nav className={`mobile-menu ${mobileMenuOpen ? "" : "hidden"}`}>
        <a onClick={() => { scrollToSection("sobre"); setMobileMenuOpen(false); }}>Sobre</a>
        <a onClick={() => { scrollToSection("skills"); setMobileMenuOpen(false); }}>Skills</a>
        <a onClick={() => { scrollToSection("projetos"); setMobileMenuOpen(false); }}>Projetos</a>
        <a onClick={() => { scrollToSection("contato"); setMobileMenuOpen(false); }}>Contato</a>
      </nav>
    </header>
  );
}
