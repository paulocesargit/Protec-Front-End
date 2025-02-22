import Prodtech from "./components/Prodtechbanner";
import Proposito from "./components/Proposito";
import Sprod from "./components/Sprod";
import Respsocial from "./components/Respsocial";
import Events from "./components/Events";
import Compromise from "./components/Compromise";
import Donation from "./components/Donation";

const Home = () => {
  return (
    <>
      <div>
        <Prodtech />
        <Proposito />
        <Sprod />
        <Respsocial />
        <Events />
        <Compromise />
        <Donation />
      </div>
    </>
  );
};

export default Home;
