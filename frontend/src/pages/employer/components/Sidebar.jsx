import React from "react";
import { LayoutDashboard, Briefcase, Users, Building2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div
      className="border vh-100 d-flex flex-column"
      style={{ width: "300px" }}
    >
      <div className="p-3 border-bottom">
        <Link to={"/employer/dashboard"} className="text-decoration-none">
          <img src="/logo/itconnectlogo.png" alt="Logo" width={120} />
          <p className="fs-12 text-muted mb-0">Employer Dashboard</p>
        </Link>
      </div>
      <div className="p-3 border-bottom">
        <button className="btn bg-blue fs-14 w-100 text-start">
          <i className="bi bi-plus-lg me-2"></i> Post New Job
        </button>
      </div>
      <div className="p-3">
        <p className="text-muted fs-12 mt-2">Main Menu</p>
        <ul
          className="list-unstyled fs-14 text-blue"
          style={{ lineHeight: "2.1rem" }}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link hover ${isActive ? "active-link" : ""}`
              }
              to="/employer/dashboard"
            >
              <LayoutDashboard size={16} className="me-3" />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link hover ${isActive ? "active-link" : ""}`
              }
              to="/employer/job-postings"
            >
              <Briefcase size={16} className="me-3" />
              Job Postings
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link hover ${isActive ? "active-link" : ""}`
              }
              to="/employer/applications"
            >
              <Users size={16} className="me-3" />
              Applications
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `nav-link hover ${isActive ? "active-link" : ""}`
              }
              to="/employer/company-profile"
            >
              <Building2 size={16} className="me-3" />
              Company Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="d-flex align-items-center border-top p-3 mt-auto">
        <i className="bi bi-person-circle text-primary fs-2 me-2"></i>
        <div>
          <p className="mb-0 fs-14 fw-medium">Raj Kumar</p>
          <p className="text-muted fs-12 mb-0">HR Manager</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
