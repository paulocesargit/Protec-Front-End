import "./app.css";
import AppRoutes from "./routes/routes";
import AppRoutesTech from "./routes/Routestech";
import AppRoutesClient from "./routes/Routesclient";

function App() {
  return (
    <>
      <AppRoutes />
      <AppRoutesTech />
      <AppRoutesClient />
    </>
  );
}

export default App;
