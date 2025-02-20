import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutesCliente from "./PrivateRoutesCliente";

function AppRoutesClient() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutesCliente />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutesClient;
