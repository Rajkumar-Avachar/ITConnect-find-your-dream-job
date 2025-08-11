import React from "react";
import { Eye, Briefcase, Users, UserCheck } from "lucide-react";

const Summary = () => {
  return (
    <div className="p-4 bg-light h-100">
      <h3 className="fw-bold mb-0">Dashboard</h3>
      <p className="text-muted">
        Welcome back! Here's an overview of your hiring activity.
      </p>

      <div className="d-flex justify-content-between gap-3">
        <div className="border bg-white flex-grow-1 rounded-3 p-3 hover-shadow-sm">
          <div className="d-flex align-items-center justify-content-between">
            <p className="text-muted fs-14 mb-0">Active Job Postings</p>
            <Briefcase size={16} className="text-blue"/>
          </div>
          <p className="fs-4 fw-bold mb-0 mt-2">12</p>
        </div>
        <div className="border bg-white flex-grow-1 rounded-3 p-3 hover-shadow-sm">
          <div className="d-flex align-items-center justify-content-between">
            <p className="text-muted fs-14 mb-0">Total Applications</p>
            <Users size={16}className="text-danger"/>
          </div>
          <p className="fs-4 fw-bold mb-0 mt-2">486</p>
        </div>
        <div className="border bg-white flex-grow-1 rounded-3 p-3 hover-shadow-sm">
          <div className="d-flex align-items-center justify-content-between">
            <p className="text-muted fs-14 mb-0">Profile Views</p>
            <Eye size={16} className="text-warning"/>
          </div>
          <p className="fs-4 fw-bold mb-0 mt-2">2,547</p>
        </div>
        <div className="border bg-white flex-grow-1 rounded-3 p-3 hover-shadow-sm">
          <div className="d-flex align-items-center justify-content-between">
            <p className="text-muted fs-14 mb-0">Hired Candidates</p>
            <UserCheck size={16} className="text-success"/>
          </div>
          <p className="fs-4 fw-bold mb-0 mt-2">20</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
