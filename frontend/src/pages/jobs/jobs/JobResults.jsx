import React from "react";
import JobCard from "./JobCard";
import LatestJobCard from "../../home/LatestJobCard";
import { useSelector } from "react-redux";

const JobResults = () => {
  const { jobs } = useSelector((store) => store.job);
  return (
    <div className="col px-0">
      <p className="text-muted">
        Found <b>10</b> jobs
        <hr />
      </p>
      <div className="row row-cols-lg-2 gy-4">
        {jobs?.map((job) => (
          <LatestJobCard job={job} key={job._id} />
        ))}
      </div>
    </div>
  );
};

export default JobResults;
