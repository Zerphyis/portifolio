import { useState } from "react";
import "./ContactSection.css";

export default function ContactSection() {
  const personalInfo = {
    email: "otavio.alexandredev@gmail.com",
    location: "Fortaleza Ceara, Brasil",
  };

  const [isSending, setIsSending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    await new Promise((res) => setTimeout(res, 1500)); 
    setIsSending(false);
    setShowSuccess(true);
    e.target.reset();
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <section id="contact-section">
      <div className="section-title fade-in">
        <h2>Entre em Contato</h2>
        <p>Tem alguma pergunta ou proposta? Ficarei feliz em conversar com você!</p>
      </div>

      <div className="contact-grid">
        <div className="contact-card fade-in">
          <h3>Informações de Contato</h3>
          <div className="contact-info">
            <div className="icon-block">📧</div>
            <div>
              <p>Email</p>
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            </div>
          </div>

          <div className="contact-info">
            <div className="icon-block">📍</div>
            <div>
              <p>Localização</p>
              <span>{personalInfo.location}</span>
            </div>
          </div>
        </div>

        <div className="contact-card fade-in">
          <h3>Envie uma Mensagem</h3>
          <form className="form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Seu nome" required />
            <input type="email" name="email" placeholder="Seu email" required />
            <textarea name="message" placeholder="Sua mensagem" rows="5" required></textarea>
            <button type="submit" disabled={isSending}>
              {isSending ? "Enviando..." : "Enviar Mensagem"}
            </button>
            {showSuccess && <p className="success-msg">Mensagem enviada com sucesso!</p>}
          </form>
        </div>
      </div>
    </section>
  );
}