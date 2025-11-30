import { useState, useEffect } from "react";

export default function Reference() {
  const [userClubs, setUserClubs] = useState([]);

  const clubReferences = {
    "Music Club": [
      { name: "Music Theory Basics", url: "https://musictheory.net", icon: "🎵" },
      { name: "Instrument Learning Guide", url: "https://example.com/instruments", icon: "🎸" },
      { name: "Performance Tips", url: "https://example.com/performance", icon: "🎤" }
    ],
    "Dance Club": [
      { name: "Dance Styles Guide", url: "https://example.com/dance-styles", icon: "💃" },
      { name: "Choreography Basics", url: "https://example.com/choreography", icon: "🕺" },
      { name: "Dance Competitions", url: "https://example.com/competitions", icon: "🏆" }
    ],
    "Coding Club": [
      { name: "Programming Languages", url: "https://github.com", icon: "💻" },
      { name: "Hackathon Guidelines", url: "https://example.com/hackathon", icon: "⚡" },
      { name: "Open Source Projects", url: "https://opensource.org", icon: "🔓" }
    ],
    "Sports Club": [
      { name: "Fitness Training", url: "https://example.com/fitness", icon: "🏋️" },
      { name: "Sports Rules & Regulations", url: "https://example.com/sports-rules", icon: "📋" },
      { name: "Tournament Schedule", url: "https://example.com/tournaments", icon: "🏆" }
    ],
    "Art Club": [
      { name: "Drawing Techniques", url: "https://example.com/drawing", icon: "🎨" },
      { name: "Color Theory", url: "https://example.com/colors", icon: "🌈" },
      { name: "Art Exhibitions", url: "https://example.com/exhibitions", icon: "🖼️" }
    ],
    "Photography Club": [
      { name: "Camera Settings Guide", url: "https://example.com/camera", icon: "📷" },
      { name: "Photo Editing Software", url: "https://example.com/editing", icon: "✂️" },
      { name: "Photography Contests", url: "https://example.com/photo-contests", icon: "🏅" }
    ],
    "Robotics Club": [
      { name: "Arduino Programming", url: "https://arduino.cc", icon: "🤖" },
      { name: "Sensor Integration", url: "https://example.com/sensors", icon: "📡" },
      { name: "AI & Machine Learning", url: "https://example.com/ai", icon: "🧠" }
    ],
    "Literary Club": [
      { name: "Writing Guidelines", url: "https://example.com/writing", icon: "✍️" },
      { name: "Debate Techniques", url: "https://example.com/debate", icon: "🗣️" },
      { name: "Poetry Resources", url: "https://example.com/poetry", icon: "📝" }
    ],
    "Science Club": [
      { name: "Research Methods", url: "https://example.com/research", icon: "🔬" },
      { name: "Lab Safety Guidelines", url: "https://example.com/safety", icon: "⚗️" },
      { name: "Science Journals", url: "https://example.com/journals", icon: "📊" }
    ],
    "Drama Club": [
      { name: "Acting Techniques", url: "https://example.com/acting", icon: "🎭" },
      { name: "Script Writing", url: "https://example.com/scripts", icon: "📜" },
      { name: "Stage Production", url: "https://example.com/production", icon: "🎬" }
    ],
    "Eco Club": [
      { name: "Environmental Guidelines", url: "https://example.com/environment", icon: "🌱" },
      { name: "Sustainability Practices", url: "https://example.com/sustainability", icon: "♻️" },
      { name: "Green Initiatives", url: "https://example.com/green", icon: "🌍" }
    ],
    "Gaming Club": [
      { name: "Game Development", url: "https://example.com/gamedev", icon: "🎮" },
      { name: "eSports Guidelines", url: "https://example.com/esports", icon: "🏆" },
      { name: "Gaming Tournaments", url: "https://example.com/gaming", icon: "🎯" }
    ],
    "Film Club": [
      { name: "Cinematography Basics", url: "https://example.com/cinema", icon: "🎥" },
      { name: "Video Editing", url: "https://example.com/video-edit", icon: "🎞️" },
      { name: "Film Festivals", url: "https://example.com/festivals", icon: "🎪" }
    ],
    "Cooking Club": [
      { name: "Recipe Collection", url: "https://example.com/recipes", icon: "👨‍🍳" },
      { name: "Cooking Techniques", url: "https://example.com/cooking", icon: "🍳" },
      { name: "Nutrition Guide", url: "https://example.com/nutrition", icon: "🥗" }
    ],
    "Fitness Club": [
      { name: "Workout Plans", url: "https://example.com/workout", icon: "💪" },
      { name: "Yoga Poses", url: "https://example.com/yoga", icon: "🧘" },
      { name: "Health Tips", url: "https://example.com/health", icon: "❤️" }
    ],
    "Debate Club": [
      { name: "Debate Formats Guide", url: "https://example.com/debate-formats", icon: "🗣️" },
      { name: "Public Speaking Tips", url: "https://example.com/public-speaking", icon: "🎤" },
      { name: "Argumentation Techniques", url: "https://example.com/argumentation", icon: "⚖️" }
    ],
    "Astronomy Club": [
      { name: "Star Maps & Constellations", url: "https://example.com/star-maps", icon: "🌟" },
      { name: "Telescope Usage Guide", url: "https://example.com/telescope", icon: "🔭" },
      { name: "Space Research Papers", url: "https://example.com/space-research", icon: "🚀" }
    ],
    "Chess Club": [
      { name: "Chess Openings Database", url: "https://example.com/chess-openings", icon: "♟️" },
      { name: "Strategy & Tactics", url: "https://example.com/chess-strategy", icon: "🧠" },
      { name: "Tournament Rules", url: "https://example.com/chess-rules", icon: "📋" }
    ],
    "Volunteer Club": [
      { name: "Community Service Projects", url: "https://example.com/community-service", icon: "🤝" },
      { name: "Volunteer Guidelines", url: "https://example.com/volunteer-guide", icon: "📖" },
      { name: "Social Impact Reports", url: "https://example.com/social-impact", icon: "📊" }
    ],
    "Entrepreneurship Club": [
      { name: "Business Plan Templates", url: "https://example.com/business-plans", icon: "📈" },
      { name: "Startup Resources", url: "https://example.com/startup-resources", icon: "💡" },
      { name: "Investor Pitch Guides", url: "https://example.com/pitch-guides", icon: "💼" }
    ]
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser")) || {};
    setUserClubs(currentUser.clubs || []);
  }, []);

  const getAllReferences = () => {
    let allRefs = [];
    userClubs.forEach(clubName => {
      if (clubReferences[clubName]) {
        allRefs = [...allRefs, ...clubReferences[clubName]];
      }
    });
    return allRefs;
  };

  const references = getAllReferences();

  return (
    <div className="reference-container">
      <div className="reference-header">
        <h2>My Club References</h2>
        <p>Resources for your registered clubs ({userClubs.length} clubs)</p>
      </div>

      {userClubs.length === 0 ? (
        <div className="no-clubs">
          <h3>No clubs registered yet!</h3>
          <p>Join clubs to access their reference materials and resources.</p>
        </div>
      ) : (
        <>
          {userClubs.map((clubName, index) => (
            <div key={index} className="club-section">
              <h3 className="club-title">{clubName}</h3>
              <div className="resources-grid">
                {clubReferences[clubName]?.map((ref, i) => (
                  <a
                    key={i}
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-card"
                  >
                    <div className="resource-icon">{ref.icon}</div>
                    <h3>{ref.name}</h3>
                    <p>Click to access resource</p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}