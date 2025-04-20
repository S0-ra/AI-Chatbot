import "./homePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <img src="/orbital.png" alt="background-image" className="orbital" />
      <div className="left">
        <h1>SORA AI</h1>
        <h2>Enhance your productivity and creativity</h2>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur,
          mollitia adipisci nostrum sint est ad blanditiis, animi incidunt
          officia perferend.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right">
        <div className="imgContainer">
          <div className="bgContainer">
            <div className="bg"></div>
          </div>
          <img src="/bot.png" alt="bot image" className="bot" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
