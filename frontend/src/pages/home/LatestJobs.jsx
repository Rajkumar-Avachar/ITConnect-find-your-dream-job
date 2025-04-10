import React from "react";
import LatestJobCard from "./LatestJobCard";
import { Link } from "react-router-dom";

const array = ["raj", "akshay", "rahul", "raju", "gaurav", "anuj"];
const LatestJobs = () => {
  return (
    <div className="container my-5 py-5">
      <div className="d-flex justify-content-between align-items-center">
        <h3 className="navy fw-bold my-5">Latest Job Openings</h3>
        {/* <button className="btn btn-outline-primary">View All Jobs</button> */}
        <Link className="text-decoration-none navy d-none d-sm-block fw-bold">
          View All Jobs →
        </Link>
      </div>
      <div className="row row-cols-lg-2">
        {array.slice(0, 6).map((item, index) => (
          <div className="p-3">
            <LatestJobCard />
          </div>
        ))}
      </div>
      <div className=" text-center mt-5">
        <Link className="text-decoration-none navy fw-bold d-sm-none">View All Jobs →</Link>
      </div>
    </div>
  );
};

export default LatestJobs;
