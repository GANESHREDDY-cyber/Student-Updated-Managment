
  import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginForm({ setIsLoggedIn }) {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOtp] = useState("");
  const [generatedOTP, setGeneratedOTP] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [timer, setTimer] = useState(60);
  const [captcha, setCaptcha] = useState("");
  const [captchaInput, setCaptchaInput] = useState("");
  const navigate = useNavigate();

  const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();
  
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (captchaInput !== captcha) {
      alert("❌ Invalid Captcha! Please try again.");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
      return;
    }
    
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.id === id && u.password === password);

    if (user) {
      const otpCode = generateOTP();
      setGeneratedOTP(otpCode);
      setUserEmail(user.email);
      setShowOTP(true);
      setTimer(60);
      alert(`OTP sent to ${user.email}`);
      console.log(`OTP: ${otpCode}`);
    } else {
      alert("❌ Login Failed: Invalid Student ID or Password. Please check your credentials and try again.");
      setCaptcha(generateCaptcha());
      setCaptchaInput("");
    }
  };

  const handleOTPVerify = (e) => {
    e.preventDefault();
    if (otp === generatedOTP) {
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const user = users.find((u) => u.id === id);
      localStorage.setItem("currentUser", JSON.stringify(user));
      localStorage.setItem("loggedIn", "true");
      setIsLoggedIn(true);
      navigate("/");
    } else {
      alert("❌ Invalid OTP: The code you entered is incorrect. Please check and try again.");
      setOtp("");
    }
  };

  useEffect(() => {
    if (showOTP && timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [showOTP, timer]);

  if (showOTP) {
    return (
      <div className="form-container" style={{ textAlign: "center" }}>
        <h2>Email Verification</h2>
        <p>Enter OTP sent to {userEmail}</p>
        <p>Time remaining: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}</p>
        <form onSubmit={handleOTPVerify}>
          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
            maxLength="6"
            required
          />
          <button type="submit" disabled={timer === 0}>Verify OTP</button>
        </form>
        {timer === 0 && <p style={{color: 'red'}}>OTP expired. Please login again.</p>}
      </div>
    );
  }

  return (
    <div className="form-container" style={{ textAlign: "center" }}>
      <h1>KL Campus Connect</h1>
      <h2>Student Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Student ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="captcha-section">
          <div className="captcha-display">{captcha}</div>
          <button type="button" onClick={() => setCaptcha(generateCaptcha())} className="refresh-captcha">
            🔄
          </button>
        </div>
        <input
          type="text"
          placeholder="Enter Captcha"
          value={captchaInput}
          onChange={(e) => setCaptchaInput(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
}