import React from "react";
import { Calendar, ExternalLink } from "lucide-react";

const events = [
  {
    title: "Winter Internship 2025",
    date: "Oct 1, 2025",
    duration: "3 Months",
    mode: "Remote",
  },
  {
    title: "Off-Campus Drive",
    date: "July 15, 2025",
    duration: "1 Day",
    mode: "Onsite - Bangalore",
  },
  {
    title: "AI Webinar 2025",
    date: "Aug 10, 2025",
    duration: "2 Hours",
    mode: "Online",
  },
];

const UpcomingEvents = () => {
  return (
    <div className=" p-3 p-md-4 rounded-3 bg-white border shadow-sm">
      <h5 className="fs-18 fw-semibold mb-3">
        <Calendar size={18} className="text-blue me-2 mb-1" />
        Upcoming Events
      </h5>
      {events.map((e, index) => (
        <a
          href="#"
        //   target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-dark"
        >
          <div className=" rounded-3 p-3 bg-light hover-shadow-sm border mt-3">
            <div className="d-flex justify-content-between">
              <div>
                <h6 className="mb-1 fw-medium">{e.title}</h6>
                <p className="mb-1 text-muted fs-14">
                  {e.date} &#8226; {e.duration}
                </p>
                <p className="mb-0 text-muted fs-14">{e.mode}</p>
              </div>
              <ExternalLink size={16} className="text-primary" />
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default UpcomingEvents;
