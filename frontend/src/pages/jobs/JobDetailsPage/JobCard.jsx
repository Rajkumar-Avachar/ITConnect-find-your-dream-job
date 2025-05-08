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
    <div className="border rounded-4 p-3 p-sm-4 latestJobCard">
      <div className="d-flex justify-content-between">
        <div>
          <p className="fs-5 mb-1 fw-bold dark-blue">Full stack developer</p>
          <p className="navy fs-7">Google</p>
        </div>
        <img src="/logo/companyLogo.jpg" alt="Logo" width={60} />
      </div>

      <div className="d-flex gap-3 flex-wrap fs-8">
        <div className="text-muted d-flex">
          <LocationOnOutlinedIcon className="mb-1" /> &nbsp;&nbsp;
          <p className="mb-0">Banglore</p>
        </div>
        <div className="text-muted d-flex">
          <WorkOutlineOutlinedIcon className="mb-1" /> &nbsp;&nbsp;
          <p className="mb-0">Full-time</p>
        </div>
        <div className="text-muted d-flex">
          <PaymentOutlinedIcon className="mb-1" /> &nbsp;&nbsp;
          <p className="mb-0">₹ 30k - 50k</p>
        </div>
      </div>

      <div className="mt-3  border-top py-3">
        <span
          class="badge rounded-pill text-bg-light text-muted fw-normal border align-items-center"
          style={{ fontSize: "14px" }}
        >
          <UpdateOutlinedIcon className="fs-5 me-2" />
          Posted 3 days ago
        </span>
        <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-4">
          <div className="d-flex gap-3 fs-8 text-muted">
            <span>
              <PeopleOutlinedIcon /> 100+ applicants
            </span>
            <span>Openings: 5</span>
          </div>
          <div className="d-flex gap-4 align-items-center flex-grow-1 justify-content-end">
            <BookmarkBorderOutlinedIcon />
            <ShareOutlinedIcon />
            <button className="btn bg-dark-blue text-light">Apply Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
