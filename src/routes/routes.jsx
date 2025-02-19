import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Public/Home";
import Servicos from "../pages/Public/Servicos";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRoutes;
