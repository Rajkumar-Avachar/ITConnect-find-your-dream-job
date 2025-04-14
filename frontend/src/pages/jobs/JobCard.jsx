import React from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";

const JobCard = () => {
  return (
    <div className="border rounded-4 p-3 p-sm-4 latestJobCard mb-3">
      <div className="d-flex justify-content-between">
        <div>
          <p className="fs-7 mb-1 fw-bold dark-blue">Full stack developer</p>
          <p className="text-muted fs-8 fw-bold ">Google</p>
        </div>
        <img src="logo/companyLogo.jpg" alt="Logo" width={60}/>
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
      <div className="mt-2 d-flex justify-content-between align-items-center">
        <div className="navy fs-8">
          <UpdateOutlinedIcon /> 2 days ago
        </div>
        <button className="btn bg-dark-blue text-light" style={{fontSize:"14px"}}>View Details</button>
      </div>
    </div>
  );
};

export default JobCard;
