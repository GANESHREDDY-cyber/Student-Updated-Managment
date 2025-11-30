import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (email.length > 30) {
      alert("Email must be 30 characters or less!");
      return;
    }

    if (id.length !== 10) {
      alert("Student ID must be exactly 10 characters!");
      return;
    }

    const idPrefix = id.substring(0, 2);
    if (parseInt(idPrefix) > 25) {
      alert("Error: Student ID doesn't exist!");
      return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const exists = users.find((u) => u.id === id);

    if (exists) {
      alert("User ID already exists!");
      return;
    }

    users.push({ firstName, lastName, email, id, password, clubs: [] });
    localStorage.setItem("users", JSON.stringify(users));
    alert(`Registration successful! Welcome, ${firstName}`);
    navigate("/login");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "100px auto", padding: "30px", border: "1px solid #ccc", borderRadius: "10px", textAlign: "center", background: "white" }}>
      <h2>Register Student</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          placeholder="First Name" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "6px", border: "1px solid #aaa" }} 
          required 
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "6px", border: "1px solid #aaa" }} 
          required 
        />
        <input 
          type="email" 
          placeholder="Email (max 30 characters)" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          maxLength="30"
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "6px", border: "1px solid #aaa" }} 
          required 
        />
        <input 
          type="text" 
          placeholder="Student ID (exactly 10 numbers)" 
          value={id} 
          onChange={(e) => {
            const value = e.target.value.replace(/[^0-9]/g, '');
            setId(value);
          }} 
          maxLength="10"
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "6px", border: "1px solid #aaa" }} 
          required 
        />
        <input 
          type="password" 
          placeholder="Create Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "6px", border: "1px solid #aaa" }} 
          required 
        />
        <input 
          type="password" 
          placeholder="Confirm Password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          style={{ width: "100%", padding: "10px", margin: "10px 0", borderRadius: "6px", border: "1px solid #aaa" }} 
          required 
        />
        <button type="submit" style={{ background: "skyblue", color: "white", padding: "10px 20px", border: "none", borderRadius: "6px", width: "100%" }}>
          Sign Up
        </button>
      </form>
    </div>
  );
}