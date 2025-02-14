import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services.jsx";
import Productivity from "./components/Productivity";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import "./app.css";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Services />
      <Productivity />
      <SocialMedia />
      <Footer />
    </div>
  );
}

export default App;
