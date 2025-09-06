import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Wallet } from "lucide-react";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import moment from "moment";

const LatestJobCard = ({ job }) => {
  const [save, setSave] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSave(!save);
  };
  return (
    <Link to={`/job/${job._id}`} className="text-decoration-none">
      <div className="rounded-3 p-3 border hover-shadow-sm latestJobCard  bg-white">
        {/* <div className=" text-end">
          <span className="fs-14 bg-light-blue rounded-pill px-1">
            Internship
          </span>
        </div> */}
        <div className="d-flex align-items-center mb-3">
          <img
            src={job.company?.logo}
            alt="Logo"
            width={50}
            className="me-3 rounded-3"
          />
          <div>
            <h6 className="mb-1 text-black fw-semibold">{job.title}</h6>

            <h6 className="text-muted mb-0 fs-14">{job.company?.name}</h6>
          </div>
        </div>
        <div className="d-flex gap-3 flex-wrap fs-14">
          <div className="text-muted d-flex align-items-center">
            <MapPin size={14} />
            &nbsp;
            <p className="mb-0">
              {job.location} ({job.workMode})
            </p>
          </div>
          <div className="text-muted d-flex align-items-center ">
            <Wallet size={14} />
            &nbsp;
            <p className="mb-0">
              <p className="mb-0">
                {job.salary === "Not Disclosed"
                  ? job.salary
                  : `₹ ${job.salary}`}
              </p>
            </p>
          </div>
          <div className="text-muted d-flex align-items-center">
            <Briefcase size={14} />
            &nbsp;
            <p className="mb-0">{job.experience}</p>
          </div>
        </div>
        <div className="mt-3 d-flex align-items-center gap-3 fs-12">
          <div className="text-primary e rounded-pill px-1">
            <UpdateOutlinedIcon className="fs-6" />{" "}
            {moment(job.createdAt).fromNow()}
          </div>
          {/* <p className="mb-0 text-primary bg-light-blue px-1 rounded-pill">Internship</p> */}

          <div className="ms-auto px-2">
            {save === false ? (
              <i className="bi bi-bookmark fs-5" onClick={handleSave}></i>
            ) : (
              <i className="bi bi-bookmark-fill fs-5" onClick={handleSave}></i>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default LatestJobCard;
