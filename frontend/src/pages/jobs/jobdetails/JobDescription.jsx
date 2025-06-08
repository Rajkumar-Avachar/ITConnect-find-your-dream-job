import React from "react";

const JobDescription = () => {
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
      className="my-4 p-3 p-sm-4 border rounded-3 bg-white"
      style={{ textAlign: "justify" }}
    >
      <h5 className="fw-semibold fs-18">Job Description</h5>
      <p className="text-muted mt-3 fs-14">
        We are looking for a skilled and passionate React Developer to join our
        dynamic product development team. You will be instrumental in designing
        and implementing high-performance user interfaces for complex enterprise
        applications that serve the pharmaceutical and healthcare sectors. The
        ideal candidate should have a deep understanding of modern JavaScript,
        React ecosystem, and front-end architecture principles. This is an
        exciting opportunity to work on impactful products in a domain where
        precision and compliance are paramount.
      </p>
      <h5 className="fw-semibold fs-18 mt-4">Responsibilities</h5>
      <ul className="text-muted mt-3 ps-3 fs-14">
        <li>
          Collaborate with cross-functional teams to design and implement new
          features for our web applications{" "}
        </li>
        <li>
          Write clean, efficient, and maintainable code for both frontend and
          backend development
        </li>
        <li>
          Conduct code reviews and provide feedback to junior developers to
          ensure best practices are followed
        </li>
        <li>
          Troubleshoot and resolve technical issues in a timely manner to ensure
          smooth operation of our applications
        </li>
        <li>
          Stay up-to-date on industry trends and technologies to continuously
          improve our development processes
        </li>
      </ul>
      <h5 className="fw-semibold fs-18 mt-4">Eligibility Criteria:</h5>
      <ul className="text-muted ps-3 fs-14">
        <li>B.E/B.Tech in Computer Science or related fields</li>
        <li>Experience: 2+ Years</li>
      </ul>

      <h5 className="fw-semibold fs-18 mt-4">Skills Required</h5>
      <div className="d-flex flex-wrap gap-2 mt-3">
        {skills.map((item, index) => (
          // <span className="px-3 py-1 bg-input rounded-4 border >
          //   {item}
          // </span>
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
