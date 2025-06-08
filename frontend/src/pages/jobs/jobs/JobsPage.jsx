import React from "react";
import SearchJobs from "./SearchJobs";
import JobFilters from "./JobFilters";
import JobResults from "./JobResults";

const JobsPage = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <SearchJobs />
        <div className="main row gap-3 m-0 mb-5">
          <JobFilters />
          <JobResults />
        </div>
      </div>
    </div>
  );
};

export default JobsPage;
