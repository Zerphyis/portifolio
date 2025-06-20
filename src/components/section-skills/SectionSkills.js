import "./SectionSkills.css";

export default function SectionSkills() {
  const skills = {
    languages: ["JavaScript","Python", "Java"],
    frameworks: ["React", "SpringBoot","MySql"],
    tools: ["Git", "Docker" ],
  };

  const createCard = (title, items) => (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <div className="badge-list">
        {items.map((item, index) => (
          <div
            key={index}
            className="badge fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills-section">
      <div className="section-title fade-in">
        <h2>Minhas Habilidades</h2>
        <p>Tecnologias e ferramentas com as quais tenho experiência</p>
      </div>
      <div className="card-grid">
        {createCard("Linguagens de Programação", skills.languages)}
        {createCard("Frameworks & Bibliotecas", skills.frameworks)}
        {createCard("Ferramentas & Outros", skills.tools)}
      </div>
    </section>
  );
}