import React, { useState } from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import AboutCompanyCard from "./AboutCompanyCard";
import JobDescription from "./JobDescription";

const JobDetailsPage = () => {
  return (
    <div className="bg-light">
      <div className="container pb-5">
        <JobCard />
        <JobDescription />
        <AboutCompanyCard />
      </div>
    </div>
  );
};

export default JobDetailsPage;

{
  /* <div className="py-3 stickyTop bg-light d-flex align-items-center justify-content-between">
  <Link to="/jobs" className="text-decoration-none fw-medium">
    <i class="bi bi-arrow-left"></i> Back to Jobs
  </Link>
  <div className="d-flex gap-4 me-3 d-sm-none">
    {save === false ? (
      <i
        class="bi bi-bookmark rounded-3 bg-light fs-4"
        onClick={handleSave}
      ></i>
    ) : (
      <i
        class="bi bi-bookmark-fill rounded-3 bg-light fs-4"
        onClick={handleSave}
      ></i>
    )}
    <i
      class="bi bi-share rounded-3 bg-light fs-4"
      onClick={handleSave}
    ></i>
  </div>
</div> */
}
