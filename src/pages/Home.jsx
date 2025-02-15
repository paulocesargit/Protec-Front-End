import Hero from "../components/Hero";
import Services from "../components/Services.jsx";
import Productivity from "../components/Productivity";
import SocialMedia from "../components/SocialMedia";

const Home = () => {
  return (
    <>
      <div>
        <Hero />
        <Services />
        <Productivity />
        <SocialMedia />
      </div>
    </>
  );
};

export default Home;
