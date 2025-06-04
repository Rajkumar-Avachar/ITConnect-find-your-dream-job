import React from "react";
import JobCard from "./JobCard";
import LatestJobCard from "../../home/LatestJobCard";

const JobResults = () => {
  return (
    <div className="col px-0">
      <p className="text-muted">
        Found <b>10</b> jobs
        <hr />
      </p>
      <div className="col rounded-4 d-flex flex-column gap-4">
        {[1, 2, 3, 4, 5, 6, 7].map((job, index) => (
          <LatestJobCard />
        ))}
      </div>
    </div>
  );
};

export default JobResults;
