import { TypeAnimation } from "react-type-animation";
import "./homePage.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

const HomePage = () => {
  const [typingStatus, setTypingStatus] = useState("human1");

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
          <div className="chat">
            <img
              src={
                typingStatus === "human1"
                  ? "/human1.jpeg"
                  : typingStatus === "human2"
                  ? "/human2.jpeg"
                  : "bot.png"
              }
              alt="bot image"
            />
            <TypeAnimation
              sequence={[
                "Hey Sora, what's a good way to stay productive?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Break tasks into small chunks and stay focused ✨",
                2000,
                () => {
                  setTypingStatus("human2");
                },
                "Any tips for creative blocks?",
                2000,
                () => {
                  setTypingStatus("bot");
                },
                "Step away for a bit. Inspiration loves calm minds 🧘‍♂️",
                2000,
                () => {
                  setTypingStatus("humman1");
                },
              ]}
              wrapper="span"
              repeat={Infinity}
              cursor={true}
              omitDeletionAnimation={true}
            />
          </div>
        </div>
      </div>
      <div className="terms">
        <img src="/logo.png" alt="Logo" />
        <div className="links">
          <Link to="/">Terms of Service</Link>
          <span>|</span>
          <Link to="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
