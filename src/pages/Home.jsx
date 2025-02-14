import Header from "../components/Header.jsx";
import Hero from "../components/Hero";
import Services from "../components/Services.jsx";
import Productivity from "../components/Productivity";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <Productivity />
      <SocialMedia />
      <Footer />
    </div>
  );
};

export default Home;
