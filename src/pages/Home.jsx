import { Link } from "react-router-dom";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("currentUser")) || {};

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to <span className="highlight">KL CAMPUS CONNECT</span></h1>
        <h3>🎓 Hello {user.firstName}! Where Learning Meets Passion! 🌈</h3>
        <p className="hero-description">
          🚀 Your gateway to endless opportunities! Join 20+ vibrant clubs, discover your talents, 
          build lifelong friendships, and create unforgettable memories. From tech innovations to artistic expressions, 
          sports achievements to community service - your journey of growth starts here! ✨
        </p>
      </div>

      <div className="home-buttons">
        <Link to="/dashboard" className="btn btn-purple">
          <span className="btn-icon">📊</span>
          Dashboard
        </Link>
        <Link to="/clubs" className="btn btn-blue">
          <span className="btn-icon">🎭</span>
          Clubs
        </Link>
        <Link to="/profile" className="btn btn-green">
          <span className="btn-icon">👤</span>
          Profile
        </Link>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">🔍</div>
          <h4>Discover 20+ Amazing Clubs</h4>
          <p>From Music & Dance to Robotics & AI, Sports to Entrepreneurship — explore diverse communities that match your interests and ignite your passion!</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📅</div>
          <h4>Seamless Event Management</h4>
          <p>One-click registration for workshops, competitions, cultural fests, and tech meetups. Never miss an opportunity to showcase your talents!</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🏆</div>
          <h4>Track Your Success Journey</h4>
          <p>Monitor your club activities, achievements, and skill development. Build an impressive portfolio that stands out in your academic and professional journey!</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🌐</div>
          <h4>Access Exclusive Resources</h4>
          <p>Get club-specific reference materials, tutorials, and learning resources. From coding guides to art techniques — everything you need to excel!</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤝</div>
          <h4>Build Lasting Connections</h4>
          <p>Connect with like-minded peers, experienced mentors, and industry professionals. Network, collaborate, and grow together in your chosen fields!</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h4>Real-time Updates & Notifications</h4>
          <p>Stay informed about club activities, upcoming events, deadlines, and announcements. Never miss important updates with our smart notification system!</p>
        </div>
      </div>
    </div>
  );
}