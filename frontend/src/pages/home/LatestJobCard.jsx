import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Briefcase, MapPin, Wallet } from "lucide-react";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";

const LatestJobCard = () => {
  const [save, setSave] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSave(!save);
  };
  const jobId = "12345";
  return (
    <Link to={`/job/${jobId}`} className="text-decoration-none">
      <div className="rounded-3 p-3 shadow-sm p-sm-4 latestJobCard  bg-white border">
        <div className="d-flex align-items-center mb-4">
          <img
            src="logo/google.webp"
            alt="Logo"
            width={50}
            className="me-3 rounded-3"
          />
          <div>
            <h5 className="mb-2 text-black fw-semibold fs-18">
              Software Engineer
            </h5>

            <h6 className="text-muted mb-0">Google</h6>
          </div>
        </div>

        <div className="d-flex gap-3 flex-wrap fs-14">
          <div className="text-muted d-flex align-items-center">
            <MapPin size={16} />
            &nbsp;
            <p className="mb-0">Banglore</p>
          </div>
          <div className="text-muted d-flex align-items-center">
            <Briefcase size={16} />
            &nbsp;
            <p className="mb-0">Full-time</p>
          </div>
          <div className="text-muted d-flex align-items-center">
            <Wallet size={16} />
            &nbsp;
            <p className="mb-0">₹ 20L - 30L</p>
          </div>
        </div>

        <div className="mt-4 d-flex align-items-center gap-3 fw-medium">
          <div className="text-muted fs-14 rounded-pill border px-2 bg-light">
            <UpdateOutlinedIcon className="fs-6" /> 2 days ago
          </div>
          <p className="text-muted fs-14 rounded-pill bg-light px-2 my-0  border">
            Remote
          </p>

          <div className="ms-auto px-2">
            {save == false ? (
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
