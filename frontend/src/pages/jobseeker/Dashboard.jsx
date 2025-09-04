import React from "react";
import {
  Briefcase,
  Users,
  UserCheck,
  Bookmark,
  Search,
  Clock,
  X,
  CircleCheckBig,
} from "lucide-react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useSelector } from "react-redux";
import useApplications from "../../hooks/useApplications";
import { Link } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API } from "../../utils/apis";
import { toast } from "react-toastify";

const Dashboard = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <h3 className="fw-medium mb-4">My Applications</h3>
        <div className="row g-4">
          <div className="col-2 flex-grow-1">
            <div className="d-flex justify-content-between align-items-center border bg-white rounded-3 p-4 hover-shadow-sm h-100">
              <div>
                <p className="text-muted fs-14 mb-0">Total Applications</p>
                <p className="fs-4 fw-bold mb-0 mt-2">12</p>
              </div>
              <div
                className="d-flex align-items-center justify-content-center bg-primary bg-opacity-10 rounded p-2"
                style={{ width: "40px", height: "40px" }}
              >
                <Briefcase size={20} className="text-primary" />
              </div>
            </div>
          </div>
          <div className="col-2 flex-grow-1">
            <div className="d-flex justify-content-between align-items-center border bg-white rounded-3 p-4 hover-shadow-sm h-100">
              <div>
                <p className="text-muted fs-14 mb-0">Shortlisted</p>
                <p className="fs-4 fw-bold mb-0 mt-2">3</p>
              </div>
              <div
                className="d-flex align-items-center justify-content-center bg-success bg-opacity-10 rounded p-2"
                style={{ width: "40px", height: "40px" }}
              >
                <UserCheck size={20} className="text-success" />
              </div>
            </div>
          </div>

          <div className="col-2 flex-grow-1">
            <div className="d-flex justify-content-between align-items-center border bg-white rounded-3 p-4 hover-shadow-sm h-100">
              <div>
                <p className="text-muted fs-14 mb-0">Pending</p>
                <p className="fs-4 fw-bold mb-0 mt-2">5</p>
              </div>
              <div
                className="d-flex align-items-center justify-content-center bg-warning bg-opacity-10 rounded p-2"
                style={{ width: "40px", height: "40px" }}
              >
                <Clock size={20} className="text-warning" />
              </div>
            </div>
          </div>
          <div className="col-2 flex-grow-1">
            <div className="d-flex justify-content-between align-items-center border bg-white rounded-3 p-4 hover-shadow-sm h-100">
              <div>
                <p className="text-muted fs-14 mb-0">Rejected</p>
                <p className="fs-4 fw-bold mb-0 mt-2">4</p>
              </div>
              <div
                className="d-flex align-items-center justify-content-center bg-danger bg-opacity-10 rounded p-2"
                style={{ width: "40px", height: "40px" }}
              >
                <X size={20} className="text-danger" />
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex bg-light my-5 gap-3 justify-content-between">
          <div style={{ position: "relative" }} className="flex-grow-1">
            <Search
              size={18}
              style={{
                position: "absolute",
                left: "12px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#64748b",
              }}
            />
            <input
              type="text"
              placeholder="Search by job or company"
              className="form-control ps-5 fs-14 lh-lg"
            />
          </div>
          <select
            className="form-select bg-white w-auto fs-14"
            // value={statusFilter}
            // onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="shortlisted">Shortlisted</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
        <div className="d-flex flex-column gap-3">
          {[1, 2, 3].map((application, index) => (
            <div className="d-flex bg-white border align-items-center justify-content-between p-4 rounded-3  hover-shadow-sm">
              <div className="">
                <h6 className="mb-0">Software Engineer</h6>
                <p className="fs-14 text-muted mb-0">Google</p>
              </div>
              <div className="fs-14 text-center">
                <p className="mb-0">
                  Applied on <br />{" "}
                  <span className="fw-semibold">Jan 15</span>
                </p>
              </div>
              <span class="badge bg-primary">
                <CircleCheckBig size={14} className="me-1"/> Shortlisted
              </span>
              <button className="btn fs-14 btn-dark lh-sm">View Details</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
