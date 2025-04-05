import React from "react";
import { Link } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
// import WorkIcon from "@mui/icons-material/Work";
import LogoDevIcon from "@mui/icons-material/LogoDev";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-white px-sm-5 border-bottom">
      <div class="container-fluid px-xl-5">
        <Link class="navbar-brand fw-bold fs-2 me-5" to="/">
          {/* <WorkIcon className="fs-2 me-1"/> */}

          <LogoDevIcon className="fs-1 mb-2" />
          <span className="text-danger">Junction</span>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0 fs-7 gap-lg-3 mt-3 mt-lg-0 text-center ms-lg-5">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/jobs">
                Jobs
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/companies">
                Companies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
          <div className="text-center mt-4 mt-lg-0 d-flex flex-column flex-lg-row gap-2 gap-lg-0">
            <Link to="/login">
              <button className="btn btn-outline-dark me-lg-3 flex-grow-1">
                Login
              </button>
            </Link>
            <Link to="signup">
              <button className="btn btn-dark flex-grow-1">Signup</button>
            </Link>
          </div>
          <Avatar src="/broken-image.jpg" className="ms-5 d-none" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
