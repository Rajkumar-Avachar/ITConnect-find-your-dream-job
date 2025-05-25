import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { USER_API } from "../utils/apis";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/authSlice";
import { toast } from "react-toastify";

const Popover = () => {
  const closeNavbar = () => {
    const navbar = document.querySelector(".navbar-collapse");
    if (navbar && navbar.classList.contains("show")) {
      new window.bootstrap.Collapse(navbar).toggle();
    }
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success("Logout successful!", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error(error.response?.data?.message || "Logout failed.", {
        position: "bottom-right",
        autoClose: 2000,
      });
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
          <button className="btn dropdown-item d-flex align-items-center gap-2" onClick={logoutHandler}>
            <i className="bi bi-box-arrow-right"></i>Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Popover;
