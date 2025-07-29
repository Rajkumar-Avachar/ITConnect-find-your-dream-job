import React from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Summary from "./Summary";
import JobPostings from "./JobPostings";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="content">
        <Routes>
          <Route index element={<Summary />} />
          <Route path="/job-postings" element={<JobPostings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
