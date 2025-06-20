import Header from "./components/header/Header";
import SectionSkills from "./components/section-skills/SectionSkills";
import ProjectSection from "./components/project-section/ProjectSection";
import ContactSection from "./components/contact-section/ContactSection";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SectionSkills />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;