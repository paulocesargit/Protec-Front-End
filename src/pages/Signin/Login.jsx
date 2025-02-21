import { useState } from "react";
import "./style/Login.css";

export default function Login() {
  const [isClient, setIsClient] = useState(true);

  return (
    <div className="login-container">
      <div
        className={`login-container__side-panel ${
          isClient ? "client" : "tech"
        }`}
      >
        <h1>ProdTech Services</h1>
        <div className="login-container__toggle-buttons">
          <button
            className={isClient ? "active" : ""}
            onClick={() => setIsClient(true)}
          >
            Sou cliente
          </button>
          <button
            className={!isClient ? "active" : ""}
            onClick={() => setIsClient(false)}
          >
            Sou técnico
          </button>
        </div>
      </div>
      <div className="login-container__form">
        <div className="login-container__form .user-icon">👤</div>
        <label>E-mail</label>
        <input type="email" placeholder="Digite seu e-mail" />
        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" />
        <div className="login-container__form .remember-me">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Lembre-se de mim</label>
          <a href="#" className="login-container__form .forgot-password">
            Esqueceu a senha?
          </a>
        </div>
        <button className="login-container__form .login-button">Entrar</button>
      </div>
    </div>
  );
}
