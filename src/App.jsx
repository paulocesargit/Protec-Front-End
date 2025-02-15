import "./app.css";
import Home from "./pages/Home";
import Servicos from "./pages/Servicos";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
