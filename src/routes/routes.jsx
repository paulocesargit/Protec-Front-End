import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Public/Home";
import Servicos from "../pages/Public/Servicos";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/Signin/Login";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/servicos" element={<Servicos />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
