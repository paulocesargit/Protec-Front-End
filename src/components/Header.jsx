import "../styles/header.css";
import logo from "../assets/Logo/logo_branca.png";

function Header() {
  return (
    <header className="header">
      <div className="nav-container">
        <img src={logo} alt="Logo" className="logo" />
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#" className="active">
                Home
              </a>
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
      <a href="#" className="btn">
        Entrar
      </a>
    </header>
  );
}

export default Header;
