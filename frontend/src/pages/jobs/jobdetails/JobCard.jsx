import React, { useState } from "react";
import { Link } from "react-router-dom";
import UpdateOutlinedIcon from "@mui/icons-material/UpdateOutlined";
import { Briefcase, MapPin, Wallet, Users } from "lucide-react";

const JobCard = () => {
  const [save, setSave] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSave(!save);
  };
  return (
    <div>
      <div className="py-3 stickyTop bg-light  d-flex align-items-center justify-content-between">
        <Link to="/jobs" className="text-decoration-none fw-medium">
          <i class="bi bi-arrow-left"></i> Back to Jobs
        </Link>
        <div className="d-flex gap-4 me-3 d-sm-none">
          {save === false ? (
            <i class="bi bi-bookmark rounded-3 fs-4" onClick={handleSave}></i>
          ) : (
            <i
              class="bi bi-bookmark-fill rounded-3 fs-4"
              onClick={handleSave}
            ></i>
          )}
          <i class="bi bi-share rounded-3 fs-4" onClick={handleSave}></i>
        </div>
      </div>
      <div className="shadow-sm rounded-3 p-3 p-sm-4 bg-white border">
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

        <div className="d-flex gap-2 gap-sm-4 flex-wrap flex-column flex-sm-row fs-14">
          <div className="text-muted d-flex align-items-center gap-2">
            <MapPin size={16} />
            <p className="mb-0"> Bangalore (On-site)</p>
          </div>
          <div className="text-muted d-flex align-items-center gap-2">
            <Wallet size={16} />
            <p className="mb-0"> ₹ 20L - 30L</p>
          </div>
          <div className="text-muted d-flex align-items-center gap-2">
            <Briefcase size={16} />
            <p className="mb-0"> 0-2 years</p>
          </div>
        </div>

        <div className="mt-3 fs-15 border-top py-3">
          <span class="badge me-2 rounded-pill bg-light-blue text-primary fw-normal align-items-center fs-12">
            <UpdateOutlinedIcon className="fs-6 me-1" />
            Posted 3d ago
          </span>
          {/* <span class=" py-1 px-2 rounded-pill bg-light-blue text-primary fw-normal align-items-center fs-12">
            Internship
          </span> */}

          <div className="d-flex justify-content-between align-items-center mt-3 flex-wrap gap-4">
            <div className="d-flex gap-3 fs-14 text-muted">
              <span>
                <Users size={16} /> 100+ applicants
              </span>

              <span> &#8226; Openings: 5</span>
            </div>
            <div className="d-flex gap-5  align-items-center flex-grow-1 justify-content-sm-end justify-content-evenly ms-auto">
              {save === false ? (
                <i
                  class="bi bi-bookmark rounded-3 fs-4 d-none d-sm-block"
                  onClick={handleSave}
                ></i>
              ) : (
                <i
                  class="bi bi-bookmark-fill rounded-3 fs-4 d-none d-sm-block"
                  onClick={handleSave}
                ></i>
              )}
              <i class="bi bi-share fs-5 rounded-3 d-none d-sm-block"></i>
              <button className="btn bg-blue fw-semibold px-4">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
