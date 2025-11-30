import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Remarks.css";

export default function Remarks() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="remarks-container">
      <div className="remarks-header">
        <h2>Remarks & Event Calendar</h2>
        <p>Track your activities and upcoming events</p>
      </div>

      <div className="remarks-content">
        <div className="calendar-section">
          <h3>📅 Event Calendar</h3>
          <div className="calendar-wrapper">
            <Calendar onChange={setDate} value={date} />
            <p className="selected-date">
              Selected: {date.toDateString()}
            </p>
          </div>
        </div>

        <div className="remarks-section">
          <h3>📝 Activity Remarks</h3>
          <div className="remarks-list">
            <div className="remark-item">
              <div className="remark-header">
                <span className="remark-title">Music Club Performance</span>
                <span className="remark-date">Dec 15, 2024</span>
              </div>
              <p className="remark-content">Excellent performance in the annual music fest. Great teamwork and coordination.</p>
            </div>
            <div className="remark-item">
              <div className="remark-header">
                <span className="remark-title">Coding Competition</span>
                <span className="remark-date">Dec 10, 2024</span>
              </div>
              <p className="remark-content">Participated in hackathon. Innovative solution for campus management system.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}