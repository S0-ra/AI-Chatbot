import "./homePage.scss";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="homepage">
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
};

export default HomePage;
