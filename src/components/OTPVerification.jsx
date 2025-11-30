import { useState, useEffect } from "react";
import "./Form.css";

export default function OTPVerification({ email, onVerify, onResend }) {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer(timer - 1), 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleVerify = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      onVerify(otp);
    } else {
      alert("Please enter a valid 6-digit OTP");
    }
  };

  const handleResend = () => {
    onResend();
    setTimer(60);
    setCanResend(false);
    setOtp("");
  };

  return (
    <div className="form-container">
      <h2>Email Verification</h2>
      <p>We've sent a 6-digit OTP to {email}</p>
      <form onSubmit={handleVerify}>
        <input
          type="text"
          placeholder="Enter 6-digit OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
          maxLength="6"
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
      <div style={{ marginTop: "15px" }}>
        {canResend ? (
          <button onClick={handleResend} style={{ background: "#28a745" }}>
            Resend OTP
          </button>
        ) : (
          <p>Resend OTP in {timer}s</p>
        )}
      </div>
    </div>
  );
}