import React from "react";
import Hero from "./Hero";
import JobFilters from "./JobFilters";
import JobResults from "./JobResults";

const JobsPage = () => {
  return (
    <div className="px-3 px-sm-5 py-4 bg-light">
      <Hero />
      <div className="main row gap-3 m-0 mx-xl-5 mb-5">
        <JobFilters />
        <JobResults />
      </div>
    </div>
  );
};

export default JobsPage;
