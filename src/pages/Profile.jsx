import { useState, useEffect } from "react";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
      setPhoto(currentUser.photo || null);
    }
  }, []);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imgData = reader.result;
      setPhoto(imgData);

      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      currentUser.photo = imgData;
      localStorage.setItem("currentUser", JSON.stringify(currentUser));

      const users = JSON.parse(localStorage.getItem("users")) || [];
      const updated = users.map((u) => u.id === currentUser.id ? currentUser : u);
      localStorage.setItem("users", JSON.stringify(updated));
    };
    reader.readAsDataURL(file);
  };

  const getYearInfo = (studentId) => {
    const prefix = studentId.substring(0, 2);
    const year = parseInt(prefix);
    
    if (year === 25) return "1st Year (2025-2026)";
    if (year === 24) return "2nd Year (2025-2026)";
    if (year === 23) return "3rd Year (2025-2026)";
    if (year === 22) return "4th Year (2025-2026)";
    if (year < 22) return "Passed Out";
    return "Invalid ID";
  };

  const getBatchInfo = (studentId) => {
    const prefix = studentId.substring(0, 2);
    const year = parseInt(prefix);
    
    if (year === 25) return "2025-2029";
    if (year === 24) return "2024-2028";
    if (year === 23) return "2023-2027";
    if (year === 22) return "2022-2026";
    if (year < 22) return "Graduated";
    return "Invalid ID";
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-photo-section">
        {photo ? (
          <>
            <img src={photo} alt="Profile" className="profile-photo" />
            <button onClick={() => {
              setPhoto(null);
              const currentUser = JSON.parse(localStorage.getItem("currentUser"));
              delete currentUser.photo;
              localStorage.setItem("currentUser", JSON.stringify(currentUser));
              const users = JSON.parse(localStorage.getItem("users")) || [];
              const updated = users.map((u) => u.id === currentUser.id ? currentUser : u);
              localStorage.setItem("users", JSON.stringify(updated));
            }} className="remove-photo-btn">
              Remove Photo
            </button>
          </>
        ) : (
          <>
            <div className="profile-placeholder">
              <span>📷</span>
              <p>No Photo</p>
            </div>
            <input type="file" accept="image/*" onChange={handleUpload} className="photo-upload" />
          </>
        )}
      </div>
      <div className="profile-info">
        <p><strong>Student ID:</strong> {user.id}</p>
        <p><strong>Name:</strong> {user.firstName} {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Academic Year:</strong> {getYearInfo(user.id)}</p>
        <p><strong>Batch:</strong> {getBatchInfo(user.id)}</p>
        <p><strong>Registered Clubs:</strong> {user.clubs?.join(", ") || "None"}</p>
      </div>
    </div>
  );
}