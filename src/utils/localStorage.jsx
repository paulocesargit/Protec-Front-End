const usersCliente = [
  { email: "cliente@Gmail.com", password: "cliente123", type: "cliente" },
];

const usersTecnico = [
  { email: "tecnico@Prodtech.com", password: "tecnico123", type: "tecnico" },
];

localStorage.setItem("users_cliente", JSON.stringify(usersCliente));
localStorage.setItem("users_tecnico", JSON.stringify(usersTecnico));
