import { NavLink } from "react-router-dom";
import "../style/sidebar.css";
import Logo from "../../../assets/Logo/Logo - ProdTech 1.svg";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="logo">
        <img src={Logo} alt="ProTech Logo" className="logo-image" />
      </div>
      <ul>
        <li>
          <NavLink to="/chamados" className="nav-item">
            <span className="icon">ℹ</span> Chamados
          </NavLink>
        </li>
        <li>
          <NavLink to="/relatorios" className="nav-item">
            <span className="icon">📈</span> Relatórios
          </NavLink>
        </li>
        <li>
          <NavLink to="/criar-chamado" className="nav-item">
            <span className="icon">➕</span> Criar chamados
          </NavLink>
        </li>
        <li>
          <NavLink to="/configuracoes" className="nav-item">
            <span className="icon">⚙</span> Configurações
          </NavLink>
        </li>
        <li>
          <NavLink to="/home" className="nav-item">
            <span className="icon">⬅️</span> Sair
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
