import { useState } from "react";

export default function Clubs() {
  const [selectedClub, setSelectedClub] = useState(null);
  const [clubs] = useState([
    { name: "Music Club", description: "Explore vocals, instruments, and stage performance.", instructor: "Mr. Ramesh", registered: 15, details: "Join our vibrant music community where students learn various instruments, vocal techniques, and perform in college events. We organize concerts, music competitions, and collaborate with professional artists." },
    { name: "Dance Club", description: "Perform freestyle, classical, and modern dance.", instructor: "Ms. Kavya", registered: 12, details: "Express yourself through various dance forms including classical, contemporary, hip-hop, and folk dances. Regular workshops, performances, and inter-college competitions await you." },
    { name: "Coding Club", description: "Work on hackathons and build innovative software.", instructor: "Ms. Priya", registered: 30, details: "Enhance your programming skills through hackathons, coding competitions, and collaborative projects. Learn latest technologies, participate in open source contributions, and build your tech portfolio." },
    { name: "Sports Club", description: "Cricket, football, volleyball, athletics, and more.", instructor: "Mr. Rajesh", registered: 25, details: "Stay fit and competitive with various sports activities. Regular tournaments, fitness training, and inter-college matches. Facilities include cricket ground, football field, and indoor courts." },
    { name: "Art Club", description: "Painting, sketching, and creative crafts.", instructor: "Mr. Akhil", registered: 18, details: "Unleash your creativity through painting, sketching, sculpture, and digital art. Regular exhibitions, art competitions, and workshops with renowned artists to enhance your artistic skills." },
    { name: "Photography Club", description: "Learn photography and editing techniques.", instructor: "Mr. Venkat", registered: 8, details: "Capture moments and tell stories through lens. Learn professional photography techniques, photo editing, and participate in photography contests and exhibitions." },
    { name: "Robotics Club", description: "Design and build robots using sensors and AI.", instructor: "Mr. Teja", registered: 22, details: "Build intelligent robots and automation systems. Participate in robotics competitions, learn AI/ML integration, and work on innovative projects using Arduino, Raspberry Pi, and advanced sensors." },
    { name: "Literary Club", description: "Debate, write poetry, and storytelling.", instructor: "Ms. Sneha", registered: 14, details: "Enhance your communication and writing skills through debates, poetry sessions, storytelling events, and literary competitions. Publish college magazine and organize literary festivals." },
    { name: "Science Club", description: "Innovate and experiment for a better tomorrow.", instructor: "Mr. Vivek", registered: 20, details: "Conduct scientific experiments, research projects, and innovation challenges. Participate in science fairs, organize seminars, and collaborate on cutting-edge research initiatives." },
    { name: "Drama Club", description: "Learn acting, direction, and stage production.", instructor: "Mr. Arjun", registered: 10, details: "Develop acting skills, learn stage direction, and participate in theatrical productions. Regular plays, street performances, and drama competitions to showcase your talent." },
    { name: "Eco Club", description: "Promote sustainability and environmental care.", instructor: "Ms. Anjali", registered: 9, details: "Work towards environmental conservation through tree plantation drives, awareness campaigns, and sustainable living initiatives. Organize eco-friendly events and promote green practices." },
    { name: "Gaming Club", description: "Participate in eSports and game design.", instructor: "Mr. Sameer", registered: 11, details: "Compete in eSports tournaments, learn game development, and explore virtual reality. Regular gaming competitions, game design workshops, and collaboration with gaming industry professionals." },
    { name: "Film Club", description: "Cinematography and short film creation.", instructor: "Mr. Ravi", registered: 13, details: "Learn filmmaking from script to screen. Create short films, documentaries, and music videos. Participate in film festivals and collaborate with local film industry professionals." },
    { name: "Cooking Club", description: "Discover recipes and culinary arts.", instructor: "Ms. Pooja", registered: 7, details: "Explore culinary arts through cooking workshops, recipe competitions, and food festivals. Learn various cuisines, food presentation, and nutrition awareness programs." },
    { name: "Fitness Club", description: "Yoga, workouts, and healthy living tips.", instructor: "Ms. Keerthi", registered: 19, details: "Maintain physical and mental wellness through yoga sessions, fitness training, and health awareness programs. Regular fitness challenges and wellness workshops for holistic development." },
    { name: "Debate Club", description: "Enhance public speaking and argumentation skills.", instructor: "Mr. Suresh", registered: 16, details: "Develop critical thinking and public speaking through structured debates, mock parliaments, and oratory competitions. Participate in inter-college debate tournaments." },
    { name: "Astronomy Club", description: "Explore the wonders of space and celestial bodies.", instructor: "Dr. Sharma", registered: 12, details: "Study stars, planets, and galaxies through telescope observations, planetarium visits, and space research projects. Organize stargazing events and astronomy workshops." },
    { name: "Chess Club", description: "Strategic thinking through the game of chess.", instructor: "Mr. Prakash", registered: 21, details: "Improve analytical and strategic thinking skills through chess tournaments, puzzle solving, and coaching sessions. Participate in state and national level competitions." },
    { name: "Volunteer Club", description: "Community service and social responsibility.", instructor: "Ms. Lakshmi", registered: 28, details: "Engage in community service projects, blood donation drives, and social awareness campaigns. Make a positive impact on society through organized volunteer activities." },
    { name: "Entrepreneurship Club", description: "Business ideas and startup development.", instructor: "Mr. Arun", registered: 24, details: "Learn business fundamentals, develop startup ideas, and connect with industry mentors. Participate in business plan competitions and entrepreneurship workshops." }
  ]);

  const handleRegister = (clubName) => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser.clubs) currentUser.clubs = [];
    if (currentUser.clubs.includes(clubName)) return alert("Already registered!");

    currentUser.clubs.push(clubName);
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    alert(`You joined ${clubName}!`);
  };

  return (
    <div className="clubs-container">
      <h2>Explore Clubs & Societies</h2>
      <div className="clubs-grid">
        {clubs.map((club) => (
          <div key={club.name} className="club-card">
            <h3>{club.name}</h3>
            <p>{club.description}</p>
            <p><strong>Members:</strong> {club.registered}</p>
            <div className="club-actions">
              <button onClick={() => handleRegister(club.name)} className="btn-register">
                Join Club
              </button>
              <button onClick={() => setSelectedClub(club)} className="btn-details">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedClub && (
        <div className="modal-backdrop" onClick={() => setSelectedClub(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>{selectedClub.name}</h3>
              <button className="modal-close" onClick={() => setSelectedClub(null)}>×</button>
            </div>
            <div className="modal-body">
              <p><strong>Instructor:</strong> {selectedClub.instructor}</p>
              <p><strong>Currently Registered:</strong> {selectedClub.registered} students</p>
              <p><strong>About:</strong></p>
              <p>{selectedClub.details}</p>
            </div>
            <div className="modal-footer">
              <button className="btn-register" onClick={() => {
                handleRegister(selectedClub.name);
                setSelectedClub(null);
              }}>
                Join This Club
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}