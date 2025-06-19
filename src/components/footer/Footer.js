import"./Footer.css";
export default function Footer({}){
document.addEventListener("DOMContentLoaded", () => {
  const personalInfo = {
    name: "Seu Nome", // substitua com seu nome real
    github: "https://github.com/seuusuario",
    linkedin: "https://linkedin.com/in/seuperfil",
    email: "email@exemplo.com",
  };

  const currentYear = new Date().getFullYear();
  const footer = document.getElementById("footer");

  footer.innerHTML = `
    <div class="footer-container">
      <div class="footer-text">
        <p>© ${currentYear} ${personalInfo.name}. Todos os direitos reservados.</p>
      </div>
      <div class="footer-links">
        <a href="${personalInfo.github}" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="${personalInfo.linkedin}" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:${personalInfo.email}">Email</a>
      </div>
    </div>
  `;
});
}
