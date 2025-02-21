import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("users_cliente")) {
      const usersCliente = [
        {
          email: "cliente@example.com",
          password: "cliente123",
          type: "cliente",
        },
      ];
      localStorage.setItem("users_cliente", JSON.stringify(usersCliente));
    }

    if (!localStorage.getItem("users_tecnico")) {
      const usersTecnico = [
        {
          email: "tecnico@example.com",
          password: "tecnico123",
          type: "tecnico",
        },
      ];
      localStorage.setItem("users_tecnico", JSON.stringify(usersTecnico));
    }
  }, []);

  const handleLogin = () => {
    const usersCliente =
      JSON.parse(localStorage.getItem("users_cliente")) || [];
    const usersTecnico =
      JSON.parse(localStorage.getItem("users_tecnico")) || [];

    const usersList = isClient ? usersCliente : usersTecnico;

    const user = usersList.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      if (
        (isClient && user.type !== "cliente") ||
        (!isClient && user.type !== "tecnico")
      ) {
        alert(
          "Tipo de usuário incorreto! Verifique se você está na aba correta."
        );
        return;
      }

      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate(user.type === "tecnico" ? "/chamados" : "/client-dashboard");
    } else {
      alert("Email ou senha inválidos!");
    }
  };

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
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Entrar</button>
      </div>
    </div>
  );
}
