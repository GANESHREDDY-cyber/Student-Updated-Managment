import { Link } from "react-router-dom";
import { useTheme } from "../App";

export default function Navbar({ setIsLoggedIn }) {
  const { isDark, toggleTheme } = useTheme();

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("currentUser");
      setIsLoggedIn(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-left">
        <h2>KL Campus Connect</h2>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/clubs">Clubs</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/reference">Reference</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li>
          <button onClick={toggleTheme} className="theme-btn">
            {isDark ? "☀️" : "🌙"}
          </button>
        </li>
        <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
      </ul>
    </nav>
  );
}