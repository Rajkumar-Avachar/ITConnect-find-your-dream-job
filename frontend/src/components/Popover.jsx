import React from "react";
import { Link } from "react-router-dom";

const Popover = () => {
  const closeNavbar = () => {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar && navbar.classList.contains("show")) {
      new window.bootstrap.Collapse(navbar).toggle();
    }
  };
  return (
    <div className="dropdown">
      <img
        src="images/codingBoy.webp"
        alt="Avatar"
        className="rounded-circle"
        width="40"
        height="40"
        data-bs-toggle="dropdown"
        style={{ cursor: "pointer" }}
      />
      <ul className="dropdown-menu dropdown-menu-end mt-2">
        <li>
          <Link
            className="dropdown-item d-flex align-items-center gap-2"
            to="/profile"
            onClick={closeNavbar}
          >
            <i class="bi bi-person"></i>
            Profile
          </Link>
        </li>
        <li>
          <Link
            className="dropdown-item d-flex align-items-center gap-2"
            to="/dashboard"
            onClick={closeNavbar}
          >
            <i className="bi bi-grid"></i>
            Dashboard
          </Link>
        </li>
        <li>
          <hr className="dropdown-divider" />
        </li>
        <li>
          <Link
            className="dropdown-item d-flex align-items-center gap-2"
            to="/logout"
            onClick={closeNavbar}
          >
            <i className="bi bi-box-arrow-right"></i>
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Popover;
