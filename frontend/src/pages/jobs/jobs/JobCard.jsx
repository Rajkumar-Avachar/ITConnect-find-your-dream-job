import React from "react";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";

const JobCard = () => {
  const jobId = "12345";
  return (
    <div className="border rounded-4 p-3 p-sm-4 latestJobCard mb-3">
      <div className="d-flex justify-content-between">
        <div>
          <Link to={`/job/${jobId}`} className="text-decoration-none ">
            <p className="fs-18 mb-1 fw-semibold text-black jobtitle-hover">
              Full stack developer
            </p>
          </Link>
          <p className="text-muted fs-6 fw-semibold">Google</p>
        </div>
        <img src="logo/companyLogo.jpg" alt="Logo" width={50} className="rounded-3"/>
      </div>

      <div className="d-flex gap-3 flex-wrap fs-15">
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
          <p className="mb-0">₹ 30k - 50k</p>
        </div>
      </div>

      <div className="mt-2 d-flex justify-content-between align-items-center">
        <div className="text-blue fs-14">
          <UpdateOutlinedIcon className="fs-18" /> 2 days ago
        </div>
        <Link to={`/job/${jobId}`}>
          <button
            className="btn bg-blue"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
