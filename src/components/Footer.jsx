import "../styles/Footer.css";
import logo from "../assets/Logo/logo_branca.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo-container">
          <img src={logo} alt="Logo" />
        </div>
        <div className="social-media">
          <a href="#" target="_blank" aria-label="Instagram">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
          <a href="#" target="_blank" aria-label="WhatsApp">
            <ion-icon name="logo-whatsapp"></ion-icon>
          </a>
          <a href="#" target="_blank" aria-label="TikTok">
            <ion-icon name="logo-tiktok"></ion-icon>
          </a>
        </div>
      </div>
      <hr />
      <div className="footer-nav">
        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Serviços</a>
            </li>
            <li>
              <a href="#">A ProdTech</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
