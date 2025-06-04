import React from "react";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";

const JobCard = () => {
  return (
    <div className="border rounded-3 p-3 p-sm-4 latestJobCard mt-4 bg-white">
      <div className="d-flex align-items-center mb-4">
        <img
          src="/logo/google.webp"
          alt="Logo"
          width={60}
          className="me-3 rounded-3"
        />

        <div>
          <h5 className="mb-1 fw-semibold dark-blue">Software Engineer</h5>
          <h5 className="text-muted mb-0 fs-18">Google</h5>
        </div>
      </div>

      <div className="d-flex gap-3 gap-sm-4 flex-wrap flex-column flex-sm-row fs-14 fw-medium">
        <div className="text-muted d-flex align-items-center">
          <LocationOnOutlinedIcon className="fs-18" />
          &nbsp; &nbsp;
          <p className="mb-0"> Bangalore</p>
        </div>
        <div className="text-muted d-flex align-items-center">
          <WorkOutlineOutlinedIcon className="fs-18" />
          &nbsp; &nbsp;
          <p className="mb-0"> Full-time</p>
        </div>
        <div className="text-muted d-flex align-items-center">
          <PaymentOutlinedIcon className="fs-18" />
          &nbsp; &nbsp;
          <p className="mb-0"> ₹ 20L - 30L</p>
        </div>
      </div>

      <div className="mt-3 fs-15 border-top py-3">
        <span class="badge rounded-pill text-bg-light text-muted fw-normal border align-items-center fs-14">
          <UpdateOutlinedIcon className="fs-14 me-2" />
          Posted 3 days ago
        </span>
        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-4">
          <div className="d-flex gap-3 fs-8 text-muted">
            <span>
              <PeopleOutlinedIcon /> 100+ applicants
            </span>
            <span>Openings: 5</span>
          </div>
          <div className="d-flex gap-4 align-items-center flex-grow-1 justify-content-sm-end justify-content-evenly mt-2">
            <i class="bi bi-bookmark border px-2 py-1 rounded-3"></i>
            <i class="bi bi-share border px-2 py-1 rounded-3"></i>
            <button className="btn bg-blue fw-medium px-4">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
