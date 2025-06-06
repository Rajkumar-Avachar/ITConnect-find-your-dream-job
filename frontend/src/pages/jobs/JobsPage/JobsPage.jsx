import React from "react";
import Hero from "./Hero";
import JobFilters from "./JobFilters";
import JobResults from "./JobResults";

const JobsPage = () => {
  return (
    <div className="bg-light">
      <div className="container py-4 ">
        <Hero />
        <div className="main row gap-3 m-0 mb-5">
          <JobFilters />
          <JobResults />
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
