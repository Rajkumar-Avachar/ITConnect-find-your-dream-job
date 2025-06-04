import React from "react";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";

const LatestJobCard = () => {
  const jobId = "12345";
  return (
    <div className="rounded-3 shadow-sm border p-3 p-sm-4 latestJobCard  bg-white">
      <div className="d-flex align-items-center mb-4">
        <img
          src="logo/google.webp"
          alt="Logo"
          width={50}
          className="me-3 rounded-3"
        />
        <div>
          <Link to={`/job/${jobId}`} className="text-decoration-none">
            <h5 className="mb-2 jobtitle-hover text-black fw-semibold fs-18">
              Software Engineer
            </h5>
          </Link>{" "}
          <h6 className="text-muted mb-0">Google</h6>
        </div>
      </div>

      <div className="d-flex gap-3 flex-wrap fs-14">
        <div className="text-muted d-flex align-items-center">
          <LocationOnOutlinedIcon className="fs-18" />
          &nbsp;
          <p className="mb-0">Bangalore</p>
        </div>
        <div className="text-muted d-flex align-items-center">
          <WorkOutlineOutlinedIcon className="fs-18" />
          &nbsp;
          <p className="mb-0">Full-time</p>
        </div>
        <div className="text-muted d-flex align-items-center">
          <PaymentOutlinedIcon className="fs-18" />
          &nbsp;
          <p className="mb-0">₹ 20L - 30L</p>
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-between align-items-center">
        <div className="text-blue fs-14">
          <UpdateOutlinedIcon className="fs-18" /> 2 days ago
        </div>
        <Link to={`/job/${jobId}`} className="text-decoration-none">
          <button className="btn bg-blue text-light fs-14 fw-medium">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LatestJobCard;
