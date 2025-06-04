import React from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import AboutCompanyCard from "./AboutCompanyCard";
import JobDescription from "./JobDescription";

const JobDetailsPage = () => {
  return (
    <div className="bg-light py-4">
      <div className="col-11 col-lg-8 mx-auto">
        <div>
          <Link
            to="/jobs"
            className="text-decoration-none fw-medium"
          >
            <i class="bi bi-arrow-left"></i> Back to Jobs
          </Link>
        </div>
        <JobCard />
        <JobDescription />
        <AboutCompanyCard />
      </div>
    </div>
  );
};

export default JobDetailsPage;
