import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../App";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();

  const menuItems = [
    { path: "/", icon: "🏠", label: "Home" },
    { path: "/dashboard", icon: "📊", label: "Dashboard" },
    { path: "/clubs", icon: "🎭", label: "Clubs" },
    { path: "/profile", icon: "👤", label: "Profile" },
    { path: "/reference", icon: "📚", label: "Reference" },
    { path: "/events", icon: "🎪", label: "Events" },
  ];

  return (
    <>
      <button className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3>Menu</h3>
          <button onClick={() => setIsOpen(false)} className="close-btn">×</button>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? "active" : ""}`}
              onClick={() => setIsOpen(false)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <button onClick={toggleTheme} className="theme-toggle">
            {isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>
      </div>
      
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)} />}
    </>
  );
}