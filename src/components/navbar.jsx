import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <Link to="/">Home</Link> | <Link to="/dashboard">Dashboard</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
};

export default Navbar;
