import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutesTecnico from "./PrivateRoutesTecnico";

function AppRoutesTech() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoutesTecnico />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutesTech;
