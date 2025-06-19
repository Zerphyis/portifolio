import "./SectionSkills.css";

export default function SectionSkills({}){
document.addEventListener("DOMContentLoaded", () => {
  const skills = {
    languages: ["JavaScript", "Python", "Java"],
    frameworks: ["React", "Next.js", "Express"],
    tools: ["Git", "Docker", "Figma"],
  };

  const container = document.getElementById("skills-section");

  const createCard = (title, items) => {
    const card = document.createElement("div");
    card.className = "card";

    const heading = document.createElement("h3");
    heading.className = "card-title";
    heading.textContent = title;

    const list = document.createElement("div");
    list.className = "badge-list";

    items.forEach((item, index) => {
      const badge = document.createElement("div");
      badge.className = "badge fade-in";
      badge.style.animationDelay = `${index * 100}ms`;
      badge.textContent = item;
      list.appendChild(badge);
    });

    card.appendChild(heading);
    card.appendChild(list);
    return card;
  };

  const sectionTitle = document.createElement("div");
  sectionTitle.className = "section-title fade-in";
  sectionTitle.innerHTML = `
    <h2>Minhas Habilidades</h2>
    <p>Tecnologias e ferramentas com as quais tenho experiência</p>
  `;

  const grid = document.createElement("div");
  grid.className = "card-grid";

  grid.appendChild(createCard("Linguagens de Programação", skills.languages));
  grid.appendChild(createCard("Frameworks & Bibliotecas", skills.frameworks));
  grid.appendChild(createCard("Ferramentas & Outros", skills.tools));

  container.appendChild(sectionTitle);
  container.appendChild(grid);
});
}
