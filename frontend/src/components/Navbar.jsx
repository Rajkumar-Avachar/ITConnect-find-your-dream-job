import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Popover from "./Popover";
import "./Navbar.css";
import { TiHomeOutline } from "react-icons/ti";
import { AiFillHome } from "react-icons/ai";
import { BsBuildingsFill } from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";

const Navbar = () => {
  const { user } = useSelector((store) => store.auth);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const closeMobileDrawer = () => setMobileDrawerOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white px-sm-5 border-bottom py-1 sticky-top">
        <div className="container-fluid px-xl-5">
          <Link
            className="navbar-brand fw-bold fs-2 me-5"
            to="/"
            onClick={closeMobileDrawer}
          >
            <span className="text-danger">Dev</span>
            <span className="navy">Junction</span>
          </Link>

          {/* Hamburger toggle */}
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={() => setMobileDrawerOpen(true)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Nav */}
          <div
            className="collapse navbar-collapse d-none d-lg-flex"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-7 gap-lg-3 text-center ms-lg-5">
              <li className="nav-item">
                <Link className="nav-link" to="/" onClick={closeMobileDrawer}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/jobs"
                  onClick={closeMobileDrawer}
                >
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/companies"
                  onClick={closeMobileDrawer}
                >
                  Companies
                </Link>
              </li>
            </ul>

            <div className="d-flex align-items-center ms-auto">
              {user ? (
                <Popover />
              ) : (
                <div className="d-flex gap-2">
                  <Link to="/login">
                    <button className="btn text-light nav-btn">Login</button>
                  </Link>
                  <Link to="/signup">
                    <button className="btn text-light nav-btn">Signup</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileDrawerOpen ? "show" : ""}`}>
        {!user ? (
          <div className="account p-4 border-bottom">
            <img
              src="images/codingBoy.webp"
              alt="Avatar"
              className="rounded-circle"
              width="70"
              height="70"
              data-bs-toggle="dropdown"
              style={{ cursor: "pointer" }}
            />
            <p className="fw-bold fs-5 navy mt-3 mb-1">Rajkumar Avachar</p>
            <p className="fs-8 mb-2">Full Stack Web Developer</p>
            <p className="text-muted fs-8 mb-0">Jalgaon, Maharashtra, India</p>
          </div>
        ) : (
          <div className="border p-4 text-center">
            <Link
              className="navbar-brand fw-bold fs-2"
              to="/"
              onClick={closeMobileDrawer}
            >
              <span className="text-danger">Dev</span>
              <span className="navy">Junction</span>
            </Link>
          </div>
        )}

        <div className="drawer-body p-4">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link " to="/" onClick={closeMobileDrawer}>
                <AiFillHome className="fs-5 mb-1 me-2" /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/dashboard" onClick={closeMobileDrawer}>
              <i class="bi bi-grid-fill me-2 fs-7"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link "
                to="/jobs"
                onClick={closeMobileDrawer}
              >
                <i className="bi bi-briefcase-fill me-2"></i> Jobs
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/companies"
                onClick={closeMobileDrawer}
              >
                <BsBuildingsFill className=" me-2" /> Companies
              </Link>
            </li>
          </ul>

          <hr />

          {user ? (
            <div className="mt-3 d-none d-lg-block">
              <Popover />
            </div>
          ) : (
            <div className="d-flex flex-column gap-2 mt-3">
              <Link to="/login" onClick={closeMobileDrawer}>
                <button className="btn text-light nav-btn w-100">Login</button>
              </Link>
              <Link to="/signup" onClick={closeMobileDrawer}>
                <button className="btn text-light nav-btn w-100">Signup</button>
              </Link>
            </div>
          )}

          {user && (
            <Link
              className="dropdown-item d-flex align-items-center gap-2 mt-5 pt-5"
              to="/logout"
              onClick={closeMobileDrawer}
            >
              <IoLogOut className="fs-2" />
              Logout
            </Link>
          )}
        </div>
      </div>

      {/* Overlay */}
      {mobileDrawerOpen && (
        <div className="drawer-overlay" onClick={closeMobileDrawer}></div>
      )}
    </>
  );
};

export default Navbar;
