import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect, createContext, useContext } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Home from "./pages/Home";
import Clubs from "./pages/Clubs";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Reference from "./pages/Reference";
import Events from "./pages/Events";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import "./App.css";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedIn");
    const theme = localStorage.getItem("theme");
    if (loggedIn === "true") setIsLoggedIn(true);
    if (theme) setIsDark(JSON.parse(theme));
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
    localStorage.setItem("theme", JSON.stringify(!isDark));
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <Router>
        {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />}
        {isLoggedIn && <Sidebar />}
        <div className={isLoggedIn ? "main-content" : ""}>
          <Routes>
            {!isLoggedIn ? (
              <>
                <Route path="/login" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/register" element={<RegisterForm />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/clubs" element={<Clubs />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
              <Route path="/reference" element={<Reference />} />
              <Route path="/events" element={<Events />} />
                <Route path="*" element={<Navigate to="/" />} />
              </>
            )}
          </Routes>
        </div>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App;