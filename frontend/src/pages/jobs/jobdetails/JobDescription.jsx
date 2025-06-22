import React from "react";

const JobDescription = ({ job }) => {
  if (!job) return null;
  const skills = [
    "HTML",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "RESTful API",
    "JSON",
    "API Testing",
  ];
  return (
    <div
      className="my-4 p-3 p-sm-4 shadow-sm rounded-3 bg-white"
      style={{ textAlign: "justify" }}
    >
      <h5 className="fw-semibold fs-18">Job Description</h5>
      <p className="text-muted mt-3 fs-14">{job.description}</p>
      <h5 className="fw-semibold fs-18 mt-4">Responsibilities</h5>
      <p className="text-muted mt-3 fs-14">{job.responsibilities}</p>
      <h5 className="fw-semibold fs-18 mt-4">Eligibility Criteria:</h5>
      <p className="text-muted fs-14">{job.eligibility}</p>

      <h5 className="fw-semibold fs-18 mt-4">Skills Required</h5>
      <div className="d-flex flex-wrap gap-2 mt-3">
        {job.skills.map((item, index) => (
          <span
            class="badge rounded-pill text-bg-light text-muted fw-normal border fs-14"
            key={index}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default JobDescription;
