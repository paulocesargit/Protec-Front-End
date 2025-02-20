import { NavLink } from "react-router-dom";
import "../style/sidebar.css";
import Logo from "../../../assets/Logo/logo_branca.png";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="logo">
        <img src={Logo} alt="ProTech Logo" className="logo-image" />
        <p className="services">services</p>
      </div>
      <ul>
        <li>
          <NavLink to="/chamados" className="nav-item">
            <span className="icon">ℹ</span> Chamados
          </NavLink>
        </li>
        <li>
          <NavLink to="/relatorios" className="nav-item">
            <span className="icon">📈</span> Relatorios
          </NavLink>
        </li>
        <li>
          <NavLink to="/criar-chamado" className="nav-item">
            <span className="icon">➕</span> Criar chamados
          </NavLink>
        </li>
        <li>
          <NavLink to="/configuracoes" className="nav-item">
            <span className="icon">⚙</span> Configurações
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
