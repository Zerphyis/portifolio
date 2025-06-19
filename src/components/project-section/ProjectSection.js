import "./ProjectSection.css";

export  default function projectSectioN({}){
document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      title: "Portfólio Pessoal",
      description: "Site responsivo com animações modernas.",
      image: "https://via.placeholder.com/400x200",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/seuusuario/portfolio",
      demo: "https://seuportfolio.com",
    },
    {
      title: "Dashboard Financeiro",
      description: "Visualize transações e gráficos em tempo real.",
      image: "https://via.placeholder.com/400x200",
      technologies: ["React", "Chart.js", "TailwindCSS"],
      github: "https://github.com/seuusuario/dashboard",
      demo: "",
    },
    // Adicione mais projetos conforme necessário
  ];

  const section = document.getElementById("projects-section");

  const titleContainer = document.createElement("div");
  titleContainer.className = "projects-title fade-in";
  titleContainer.innerHTML = `
    <h2>Meus Projetos</h2>
    <p>Conheça alguns dos projetos que desenvolvi</p>
  `;

  const grid = document.createElement("div");
  grid.className = "projects-grid";

  projects.forEach((project, index) => {
    const card = document.createElement("div");
    card.className = "project-card fade-in";
    card.style.animationDelay = `${index * 100}ms`;

    card.innerHTML = `
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
      </div>
      <div class="project-content">
        <h3>${project.title}</h3>
        <p class="description">${project.description}</p>
        <div class="badge-list">
          ${project.technologies
            .map((tech) => `<div class="badge">${tech}</div>`)
            .join("")}
        </div>
      </div>
      <div class="project-footer">
        ${
          project.github
            ? `<a class="btn-outline" href="${project.github}" target="_blank">Código</a>`
            : ""
        }
        ${
          project.demo
            ? `<a class="btn-solid" href="${project.demo}" target="_blank">Demo</a>`
            : ""
        }
      </div>
    `;

    grid.appendChild(card);
  });

  section.appendChild(titleContainer);
  section.appendChild(grid);
});
}
