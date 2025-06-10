import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Users, Briefcase } from "lucide-react";

const CompanyCard = () => {
  const companyId = "12345";

  return (
    <Link to={`/company/${companyId}`} className="text-decoration-none">
      <div className="rounded-3 hover-shadow-sm p-3 p-sm-4 border bg-white d-flex align-items-center justify-content-between">
        <div>
          <div className="d-flex align-items-center gap-3 justify-content-between w-100">
            <div className="d-flex align-items-center">
              <img
                src="logo/windows.png"
                alt="Logo"
                width={50}
                className="me-3 rounded-3 bg-light"
              />
              <div>
                <h5 className="text-black fw-semibold mb-0 fs-18">Microsoft</h5>

                <p className="my-0 text-muted fw-medium fs-14">
                  Software Development
                </p>
              </div>
            </div>
          </div>
          <div className="text-muted fs-14 mt-3 d-flex align-items-center gap-3">
            <span>
              <MapPin size={16} /> Hyderabad
            </span>
            <span>
              <Users size={16} /> 10k+ employees
            </span>
          </div>

          <div className="mt-3">
            <span className="fs-14  rounded-pill bg-light px-2 py-1 border text-muted">
              <Briefcase size={14} /> &nbsp;10 Jobs available
            </span>
          </div>

          {/* <div className="text-muted  fs-14 mt-3 d-flex align-items-center gap-3 ">
            <p className="fs-14  rounded-pill bg-light px-2 my-0 border">
              Product based
            </p>
            <p className="fs-14  rounded-pill bg-light px-2 my-0 border align-items-center d-flex gap-2">
              <Briefcase size={16} /> <span>10 Jobs</span>
            </p>
          </div> */}
        </div>

        <ChevronRight size={28} className="text-muted" />
      </div>
    </Link>
  );
};

export default CompanyCard;
