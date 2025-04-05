import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import LogoDevIcon from "@mui/icons-material/LogoDev";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white px-sm-5 border-bottom">
      <div className="container-fluid px-xl-5">
        <Link className="navbar-brand fw-bold fs-2 me-5" to="/">

          <LogoDevIcon className="fs-1 mb-2" />
          <span className="text-danger">Junction</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-7 gap-lg-3 mt-3 mt-lg-0 text-center ms-lg-5">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/jobs">
                Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/companies">
                Companies
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="text-center mt-4 mt-lg-0 d-flex flex-column flex-lg-row gap-2 gap-lg-3">
            <Link to="/login">
              <button className="btn btn-outline-dark me-lg-3 w-100">
                Login
              </button>
            </Link>
            <Link to="signup">
              <button className="btn btn-dark w-100">Signup</button>
            </Link>
          </div>
          <Avatar src="/broken-image.jpg" className="ms-5 d-none" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
