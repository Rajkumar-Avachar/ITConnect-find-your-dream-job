import React from "react";
import { Link } from "react-router-dom";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <footer className="p-5 bg-dark-blue text-light">
      <div className="row ms-5 ps-5">
        <div className="col">
          <Link className="navbar-brand fw-bold text-light fs-2 me-5" to="/">
            <LogoDevIcon className="fs-1 mb-2" />
            <span className="text-light">Junction</span>
          </Link>
          <p>
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
        <div className="col">
          <p className="fs-5 mb-4 fw-bold">For Job Seekers</p>
          <p>Browse Jobs</p>
          <p>My Dashboard</p>
          <p>Job Alerts</p>
          <p>Saved Jobs</p>
        </div>
        <div className="col">
          <p className="fs-5 mb-4 fw-bold">For Recruiters</p>
          <p>Post a Job</p>
          <p>Hiring Solutions</p>
          <p>Pricing</p>
          <p>Branding</p>
        </div>
        <div className="col">
          <p className="fs-5 mb-4 fw-bold">Resources</p>
          <p>Help Center</p>
          <p>About Us</p>
          <p>Privacy Policy</p>
          <p>Terms of Service</p>
        </div>
        <hr className="mt-4" />
      </div>
      
      <p className="text-center mt-4">&copy; 2025 DevJunction. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
