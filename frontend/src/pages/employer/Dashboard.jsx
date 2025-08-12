import React from "react";
import Sidebar from "./components/Sidebar";
import { Routes, Route } from "react-router-dom";
import Summary from "./Summary";
import JobPostings from "./JobPostings";
import Applications from "./Applications";
import CompanyProfile from "./CompanyProfile";
import CompanySetup from "./components/CompanySetup";
import CreateCompany from "./components/CreateCompany";
import JoinCompany from "./components/JoinCompany";
import EditCompany from "./components/EditCompany";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="content main-content flex-grow-1">
        <Routes>
          <Route path="" element={<Summary />} />
          <Route path="dashboard" element={<Summary />} />
          <Route path="job-postings" element={<JobPostings />} />
          <Route path="applications" element={<Applications />} />
          <Route path="company/setup" element={<CompanySetup />} />
          <Route path="company/create" element={<CreateCompany />} />
          <Route path="company/join" element={<JoinCompany />} />
          <Route path="company/profile" element={<CompanyProfile />} />
          <Route path="company/edit" element={<EditCompany />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
