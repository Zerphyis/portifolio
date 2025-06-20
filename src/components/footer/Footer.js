import "./Footer.css";

export default function Footer() {
  const personalInfo = {
    name: "Otávio Alexandre", // substitua com seu nome real
    github: "https://github.com/Zerphyis",
    linkedin: "https://www.linkedin.com/in/otavio-alexandre-656a7926a/",
    email: " otavio.alexandredev@gmail.com",
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="footer-container">
      <div className="footer-text">
        <p>© {currentYear} {personalInfo.name}. Todos os direitos reservados.</p>
      </div>
      <div className="footer-links">
        <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${personalInfo.email}`}>
          Email
        </a>
      </div>
    </footer>
  );
}
