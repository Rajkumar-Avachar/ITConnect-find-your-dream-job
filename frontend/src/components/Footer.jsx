import React from "react";
import { Link } from "react-router-dom";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="p-4 bg-dark-blue text-light">
      <div className="row ms-lg-5 ps-lg-5 gx-5">
        <div className="col-12 col-md-3">
          <Link
            className="navbar-brand fw-bold text-light fs-2 me-5 mb-5"
            to="/"
          >
            {/* <LogoDevIcon className="fs-1 mb-1" /> */}
            <span className="text-danger">Dev</span>
            <span className="text-light">Junction</span>
          </Link>
          <p className="mt-2">
            Your destination for discovering career opportunities and connecting
            with top companies.
          </p>
          <div className="d-flex fw-bold gap-2">
            <span>
              <FacebookIcon className="fs-3" />
            </span>

            <span>
              <XIcon />
            </span>
            <span>
              <InstagramIcon />
            </span>
            <span>
              <LinkedInIcon className="fs-3" />
            </span>
          </div>
        </div>
        <div className="col-6 col-md-3 mt-5 mt-md-0">
          <p className="fs-5 mb-3 mt-2 fw-bold">For Job Seekers</p>
          <p>Browse Jobs</p>
          <p>My Dashboard</p>
          <p>Job Alerts</p>
          <p>Saved Jobs</p>
        </div>
        <div className="col-6 col-md-3 mt-5 mt-md-0">
          <p className="fs-5 mb-3 mt-2 fw-bold">For Recruiters &nbsp;&nbsp;</p>
          <p>Post a Job</p>
          <p>Hiring Solutions</p>
          <p>Pricing</p>
          <p>Branding</p>
        </div>
        <div className="col-6 col-md-3 mt-5 mt-md-0">
          <p className="fs-5 mb-3 mt-2 fw-bold">Resources</p>
          <p>Help Center</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <hr className="mt-4" />
      </div>

      <p className="text-center mt-4">
        &copy; 2025 DevJunction. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
