import React from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Summary from "./Summary";
import JobPostings from "./JobPostings";
import Applications from "./Applications";
import CompanyProfile from "./CompanyProfile";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content w-100">
        <Routes>
          <Route path="" element={<Summary />} />
          <Route path="dashboard" element={<Summary />} />
          <Route path="job-postings" element={<JobPostings />} />
          <Route path="applications" element={<Applications/>} />
          <Route path="company-profile" element={<CompanyProfile/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
