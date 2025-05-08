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
    <div className="my-4 p-3 p-sm-4 border rounded-4" style={{textAlign: "justify"}}>
      <p className="fs-7 fw-bold">Job Description</p>
      <p className="fs-8 text-muted">
        We are looking for a skilled and passionate React Developer to join our
        dynamic product development team. You will be instrumental in designing
        and implementing high-performance user interfaces for complex enterprise
        applications that serve the pharmaceutical and healthcare sectors. The
        ideal candidate should have a deep understanding of modern JavaScript,
        React ecosystem, and front-end architecture principles. This is an
        exciting opportunity to work on impactful products in a domain where
        precision and compliance are paramount.
      </p>
      <p className="fs-7 fw-bold mt-4">Responsibilities</p>
      <ol className="fs-8 text-muted">
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
      </ol>
      <p className="fs-7 fw-bold mt-4">Eligibility Criteria:</p>
      <ul className="text-muted">
        <li>B.E/B.Tech in Computer Science or related fields</li>
        <li>Experience: 1+ Years</li>
      </ul>

      <p className="fs-7 fw-bold mt-4">Skills Required</p>
      <div className="d-flex flex-wrap gap-2">
        {skills.map((item, index) => (
          // <span className="px-3 py-1 bg-input rounded-4 border fs-8">
          //   {item}
          // </span>
          <span
            class="badge rounded-pill text-bg-light text-muted fw-normal border"
            style={{ fontSize: "14px" }}
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
