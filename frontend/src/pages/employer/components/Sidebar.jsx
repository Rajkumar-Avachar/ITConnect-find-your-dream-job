import React from "react";
import { LayoutDashboard, Briefcase, Users, Building2 } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";
import UserActions from "./UserActions";

const Sidebar = () => {
  return (
    <div className="border d-flex flex-column sidebar ">
      <div className="p-3 border-bottom">
        <Link to={"/employer/dashboard"} className="text-decoration-none">
          {/* <img src="/logo/itconnectlogo.png" alt="Logo" width={120} /> */}
          <img src="/logo/jobgridslogo1.png" alt="Logo" width={130}/>
          <p className="fs-14 text-black mb-0">Employer Dashboard</p>
        </Link>
      </div>
      <div className="p-3 border-bottom">
        <Link to={"/employer/post-job"} className="text-decoration-none">
          <button className="btn bg-blue fs-14 w-100 text-start">
            <i className="bi bi-plus-lg me-2"></i> Post New Job
          </button>
        </Link>
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
              to="/employer/company/profile"
            >
              <Building2 size={16} className="me-3" />
              Company Profile
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="p-2 mt-auto">
        <UserActions />
      </div>
    </div>
  );
};

export default Sidebar;
