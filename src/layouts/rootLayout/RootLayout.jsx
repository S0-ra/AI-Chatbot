import "./rootLayout.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="rootLayout">
      <header>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>SORA AI</span>
        </Link>
        <div className="user">User</div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
