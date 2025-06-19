export default function ContactSection({}){
document.addEventListener("DOMContentLoaded", () => {
  const personalInfo = {
    email: "exemplo@email.com",
    phone: "+55 11 91234-5678",
    location: "São Paulo, Brasil",
  };

  const contactSection = document.getElementById("contact-section");

  contactSection.innerHTML = `
    <div class="section-title fade-in">
      <h2>Entre em Contato</h2>
      <p>Tem alguma pergunta ou proposta? Ficarei feliz em conversar com você!</p>
    </div>

    <div class="contact-grid">
      <div class="contact-card fade-in">
        <h3>Informações de Contato</h3>
        <div class="contact-info">
          <div class="icon-block">
            📧
          </div>
          <div>
            <p>Email</p>
            <a href="mailto:${personalInfo.email}">${personalInfo.email}</a>
          </div>
        </div>

        <div class="contact-info">
          <div class="icon-block">
            📞
          </div>
          <div>
            <p>Telefone</p>
            <a href="tel:${personalInfo.phone}">${personalInfo.phone}</a>
          </div>
        </div>

        <div class="contact-info">
          <div class="icon-block">
            📍
          </div>
          <div>
            <p>Localização</p>
            <span>${personalInfo.location}</span>
          </div>
        </div>
      </div>

      <div class="contact-card fade-in">
        <h3>Envie uma Mensagem</h3>
        <form id="contact-form" class="form">
          <input type="text" name="name" placeholder="Seu nome" required />
          <input type="email" name="email" placeholder="Seu email" required />
          <textarea name="message" placeholder="Sua mensagem" rows="5" required></textarea>
          <button type="submit" id="submit-btn">Enviar Mensagem</button>
          <p id="success-msg" class="success-msg hidden">Mensagem enviada com sucesso!</p>
        </form>
      </div>
    </div>
  `;

  const form = document.getElementById("contact-form");
  const successMsg = document.getElementById("success-msg");
  const submitBtn = document.getElementById("submit-btn");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando...";

    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simula envio

    form.reset();
    successMsg.classList.remove("hidden");
    submitBtn.disabled = false;
    submitBtn.textContent = "Enviar Mensagem";

    setTimeout(() => successMsg.classList.add("hidden"), 3000);
  });
});
}