import React from "react";

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

const Skills = () => {
  return (
    <>
      <div className="skills shadow-small rounded-4 mt-4 p-2 p-sm-4">
        <p className="fs-4 fw-bold mb-4 dark-blue">Skills</p>
        <div className="d-flex flex-wrap gap-3">
          {skills.map((item, index) => (
            <span className="badge rounded-pill text-bg-dark">{item}</span>
          ))}
        </div>
      </div>

      <hr className="bg-dark d-sm-none mt-4" style={{ height: "7px" }} />
    </>
  );
};

export default Skills;
