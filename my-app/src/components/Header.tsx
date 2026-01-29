import { Link } from "react-router-dom";
import "./Header.css";

// Header component with logo and link to home
export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <Link to="/home">
          <img src="/src/pages/Logo.png" alt="YCE Logo" className="logo-img" />
        </Link>
      </div>
    </header>
  );
}
