import "../styles/services.css";

function Services() {
  return (
    <section className="services">
      <h2>Conheça nossos serviços</h2>
      <p>Potencialize sua operação com soluções de TI sob medida</p>
      <div className="service-grid">
        <div className="service-card">
          <img
            src="../assets/Home/icons/icon_suporte-tecnico.png"
            alt="Ícone"
          />
          <h3>Suporte técnico</h3>
          <button className="btn-small">Saiba mais</button>
        </div>
        <div className="service-card">
          <img
            src="../assets/Home/icons/icon_suporte-tecnico.png"
            alt="Ícone"
          />
          <h3>Instalação e Configuração de Software</h3>
          <button className="btn-small">Saiba mais</button>
        </div>
        <div className="service-card">
          <img
            src="../assets/Home/icons/icon_suporte-tecnico.png"
            alt="Ícone"
          />
          <h3>Instalação e Configuração de Software</h3>
          <button className="btn-small">Saiba mais</button>
        </div>
      </div>
    </section>
  );
}

export default Services;
