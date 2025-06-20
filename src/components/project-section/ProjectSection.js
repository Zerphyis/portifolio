import "./ProjectSection.css";

export default function ProjectSection() {
  const projects = [
    {
      title: "Portfólio Pessoal",
      description: "Site responsivo com animações modernas.",
      technologies: ["React"],
      github: "https://github.com/Zerphyis/portifolio",
    },
    {
      title: "Gasto$mart",
      description: "Visualize transações e gráficos em tempo real.",
      technologies: ["React"],
      github: "https://github.com/Zerphyis/GastoSmart",
    },
     {
      title: " Adopet",
      description: "Visualize transações e gráficos em tempo real.",
      technologies: ["Java,SpringBoot,SQL"],
      github: "https://github.com/Zerphyis/Adopet",
    },
     {
      title: "AluraFlix",
      description: "Visualize transações e gráficos em tempo real.",
      technologies: ["Java,SpringBoot,SQL"],
      github: "https://github.com/Zerphyis/AluraFlix",
    },


  ];

  return (
    <section id="projects-section">
      <div className="projects-title fade-in">
        <h2>Meus Projetos</h2>
        <p>Conheça alguns dos projetos que desenvolvi</p>
      </div>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
        
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <div className="badge-list">
                {project.technologies.map((tech, idx) => (
                  <div key={idx} className="badge">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
            <div className="project-footer">
              {project.github && (
                <a className="btn-outline" href={project.github} target="_blank" rel="noopener noreferrer">
                  Código
                </a>
              )}
              {project.demo && (
                <a className="btn-solid" href={project.demo} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
