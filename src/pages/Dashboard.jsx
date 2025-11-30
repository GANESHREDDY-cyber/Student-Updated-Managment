import { useState, useEffect } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({ totalStudents: 0, totalClubs: 20, myClubs: 0 });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    setUser(currentUser);
    setStats({
      totalStudents: users.length,
      totalClubs: 20,
      myClubs: currentUser.clubs?.length || 0
    });
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>🎯 Welcome Back, {user?.firstName}!</h1>
        <p>Here's your campus activity overview</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card primary">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <h3>{stats.totalStudents}</h3>
            <p>Active Students</p>
            <span className="stat-trend">+12% this month</span>
          </div>
        </div>
        <div className="stat-card secondary">
          <div className="stat-icon">🎭</div>
          <div className="stat-content">
            <h3>{stats.totalClubs}</h3>
            <p>Amazing Clubs</p>
            <span className="stat-trend">Explore now!</span>
          </div>
        </div>
        <div className="stat-card success">
          <div className="stat-icon">⭐</div>
          <div className="stat-content">
            <h3>{stats.myClubs}</h3>
            <p>Your Clubs</p>
            <span className="stat-trend">{stats.myClubs > 0 ? 'Great progress!' : 'Join clubs!'}</span>
          </div>
        </div>
        <div className="stat-card warning">
          <div className="stat-icon">🏆</div>
          <div className="stat-content">
            <h3>85%</h3>
            <p>Activity Score</p>
            <span className="stat-trend">Keep it up!</span>
          </div>
        </div>
      </div>

      <div className="dashboard-content">
        <div className="activity-section">
          <h3>🔥 Recent Activities</h3>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">🎉</div>
              <div className="activity-content">
                <p>Welcome to KL Campus Connect!</p>
                <span>Just now</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">📚</div>
              <div className="activity-content">
                <p>Explore 20+ clubs available</p>
                <span>Today</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">🚀</div>
              <div className="activity-content">
                <p>Start your journey now!</p>
                <span>Ready</span>
              </div>
            </div>
          </div>
        </div>

        <div className="quick-actions">
          <h3>⚡ Quick Actions</h3>
          <div className="action-buttons">
            <button className="action-btn explore">
              <span>🔍</span>
              Explore Clubs
            </button>
            <button className="action-btn profile">
              <span>👤</span>
              Update Profile
            </button>
            <button className="action-btn events">
              <span>📅</span>
              View Events
            </button>
            <button className="action-btn achievements">
              <span>🏆</span>
              Achievements
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}