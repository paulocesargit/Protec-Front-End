import "../styles/header.css";

function Header() {
  return (
    <header className="header">
      <img src="../assets/Logo/logo_preta.png" alt="Logo" className="logo" />
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
          <li>
            <button className="btn">Entrar</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
