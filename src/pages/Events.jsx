import { useState, useEffect } from "react";

export default function Events() {
  const [userClubs, setUserClubs] = useState([]);
  const [events, setEvents] = useState([]);

  const venues = ["R Block", "M Block", "New Seminar Hall", "Indoor Corridor", "Cricket Ground"];
  
  const generateEvents = (clubs) => {
    const eventTypes = {
      "Music Club": "Annual Music Concert",
      "Dance Club": "Dance Competition",
      "Coding Club": "Hackathon 2025",
      "Sports Club": "Inter-College Tournament",
      "Art Club": "Art Exhibition",
      "Photography Club": "Photo Contest",
      "Robotics Club": "Robot Wars",
      "Literary Club": "Poetry Slam",
      "Science Club": "Science Fair",
      "Drama Club": "Theatre Performance",
      "Eco Club": "Green Campus Drive",
      "Gaming Club": "eSports Championship",
      "Film Club": "Short Film Festival",
      "Cooking Club": "Master Chef Competition",
      "Fitness Club": "Fitness Challenge",
      "Debate Club": "Inter-College Debate",
      "Astronomy Club": "Stargazing Night",
      "Chess Club": "Chess Tournament",
      "Volunteer Club": "Community Service Day",
      "Entrepreneurship Club": "Startup Pitch Event"
    };

    return clubs.map((club, index) => ({
      id: index + 1,
      clubName: club,
      eventName: eventTypes[club] || `${club} Event`,
      date: new Date(2025, 0, 15 + index * 3).toLocaleDateString(),
      time: `${10 + (index % 8)}:00 AM`,
      venue: venues[index % venues.length],
      status: "Upcoming"
    }));
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    const clubs = currentUser.clubs || [];
    setUserClubs(clubs);
    setEvents(generateEvents(clubs));
  }, []);

  return (
    <div className="events-container">
      <div className="events-header">
        <h2>🎪 My Club Events</h2>
        <p>Events for your registered clubs ({userClubs.length} clubs)</p>
      </div>

      {userClubs.length === 0 ? (
        <div className="no-events">
          <h3>No events available!</h3>
          <p>Join clubs to see their upcoming events and activities.</p>
        </div>
      ) : (
        <div className="events-grid">
          {events.map((event) => (
            <div key={event.id} className="event-card">
              <div className="event-header">
                <h3>{event.eventName}</h3>
                <span className="event-status">{event.status}</span>
              </div>
              <div className="event-details">
                <div className="event-info">
                  <span className="event-icon">🎭</span>
                  <span>{event.clubName}</span>
                </div>
                <div className="event-info">
                  <span className="event-icon">📅</span>
                  <span>{event.date}</span>
                </div>
                <div className="event-info">
                  <span className="event-icon">⏰</span>
                  <span>{event.time}</span>
                </div>
                <div className="event-info">
                  <span className="event-icon">📍</span>
                  <span>{event.venue}</span>
                </div>
              </div>
              <button className="register-btn">Register for Event</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}