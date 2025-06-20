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

  const themeIcon = theme === "dark" ? solIcon : luaIcon;

  return (
    <header id="header">
      <div className="header-inner">
        <div className="logo">
          {name}
          <br />
          {subname}
        </div>

        <nav className="nav-desktop">
          <a href="#sobre">Sobre</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
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

      <div className={`mobile-menu ${mobileMenuOpen ? "" : "hidden"}`}>
        <a href="#sobre" onClick={() => setMobileMenuOpen(false)}>Sobre</a>
        <a href="#habilidades" onClick={() => setMobileMenuOpen(false)}>Habilidades</a>
        <a href="#projetos" onClick={() => setMobileMenuOpen(false)}>Projetos</a>
        <a href="#contato" onClick={() => setMobileMenuOpen(false)}>Contato</a>
      </div>
    </header>
  );
}
