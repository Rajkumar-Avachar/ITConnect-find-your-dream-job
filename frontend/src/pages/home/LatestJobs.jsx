import React from "react";
import LatestJobCard from "./LatestJobCard";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { jobs } = useSelector((store) => store.job);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="text-black fw-bold my-5">Latest Job Openings</h3>
        {/* <button className="btn btn-outline-primary">View All Jobs</button> */}
        <Link
          to="/jobs"
          className="text-decoration-none text-blue fw-medium d-none d-sm-block"
        >
          View All Jobs <ArrowRight size={16} />
        </Link>
      </div>
      <div className="row row-cols-lg-2">
        {jobs?.slice(0, 6).map((job) => (
          <div className="p-3" key={job._id}>
            <LatestJobCard job={job} />
          </div>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link
          to="/jobs"
          className="text-decoration-none text-blue d-sm-none fw-medium"
        >
          View All Jobs <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default LatestJobs;
