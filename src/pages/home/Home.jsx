import "./style.scss";

import HeroBanner from "./heroBanner/HeroBanner";
import Tranding from "./tranding/Tranding";

const Home = () => {
  return (
    <div className="homePage">
      <HeroBanner />
      <Tranding />
      <div style={{ height: 1000 }}></div>
    </div>
  );
};

export default Home;
