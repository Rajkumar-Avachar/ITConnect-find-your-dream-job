import React from "react";
import LatestJobCard from "../../home/LatestJobCard";
import { useSelector } from "react-redux";

const JobResults = () => {
  const { jobs } = useSelector((store) => store.job);
  return (
    <div className="col px-0">
      <p className="text-muted">
        Found <b>{jobs?.length}</b> jobs
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
