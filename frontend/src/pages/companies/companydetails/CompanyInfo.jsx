import React, { useState } from "react";
import CompanyOverview from "./CompanyOverview";
import CompanyJobs from "./CompanyJobs";

const CompanyInfo = () => {
  const [content, setContent] = useState("overview");

  return (
    <div className="row mx-auto d-flex gap-5">
      <div className="border rounded-3 p-2 px-md-4 mb-5 col-lg-8 bg-white">
        <div className="d-flex gap-5 border-bottom">
          <button
            className={`fs-14 border-0 bg-white py-2 px-0 fw-medium ${content === "overview" ? "text-blue border-bottom  border-primary" : "text-black"}`}
            onClick={() => setContent("overview")}
          >
            Overview
          </button>
          <button
            className={`fs-14 border-0 bg-white py-2 px-0 fw-medium ${content === "jobs" ? "text-blue border-bottom  border-primary" : "text-black"}`}
            onClick={() => setContent("jobs")}
          >
            Jobs (5)
          </button>
        </div>
        {content === "overview" ? <CompanyOverview /> : <CompanyJobs />}
      </div>
      <div className="border bg-white rounded-3 col p-2 p-md-4"></div>
    </div>
  );
};

export default CompanyInfo;

{
  /* <div className="border bg-white rounded-3 col p-2 p-md-4 h-100">
        <h5 className="fs-18 fw-semibold">Connect with Microsoft</h5>
        <div className="d-flex gap-2 mt-3 fs-5 align-items-center">
          <i class="bi bi-youtube text-light bg-danger  border px-2 rounded-3 border-danger "></i>
          <i class="bi bi-facebook text-light bg-blue border px-2 rounded-3 border-bottom-primary"></i>
          <i class="bi bi-twitter-x text-light bg-dark border px-2 rounded-3 border-black"></i>
          <i class="bi bi-instagram text-light bg-danger border px-2 rounded-3 border-danger"></i>
        </div>
      </div> */
}
