import React from "react";
import JobCard from "./JobCard";

const JobResults = () => {
  return (
    <div className="col px-0">
      <p className="text-muted">
        Found <b>10</b> jobs
        <hr />
      </p>
      <div
        className="col rounded-4"
        // style={{ maxHeight: "60rem" }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((job, index) => (
          <JobCard />
        ))}
      </div>
    </div>
  );
};

export default JobResults;
