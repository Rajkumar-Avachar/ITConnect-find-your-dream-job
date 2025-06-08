import React from "react";
import {
  MapPin,
  Users,
  Calendar,
  Globe,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const CompanyHeader = () => {
  return (
    <div className="rounded-3 my-4 border ">
      <div
        className="bg-blue rounded-top-3 upper"
        style={{ width: "100%", height: "10rem" }}
      ></div>
      <div className="px-2 px-md-4 pb-4 pt-2 lower bg-white rounded-3">
        <div className="d-flex gap-3">
          <div
            className="border p-2 bg-white rounded-4 companyLogo"
          >
            <img
              src="/logo/windows.png"
              alt="CompanyLogo"
              className="w-100 rounded-4"
            />
          </div>
          <div>
            <h3 className="fw-bold mb-1">Microsoft</h3>
            <p className="text-muted">Software Development</p>
          </div>
        </div>
        <div className="row text-muted mt-3 fs-14">
          <div className="col-12 col-md-6 col-lg-auto mb-2">
            <i class="bi bi-geo-alt me-1"></i> Redmond, Washington
          </div>
          <div className="col-6 col-md-6 col-lg-auto mb-2">
            <i class="bi bi-people me-1"></i> 10k+ employees
          </div>
          <div className="col-6 col-md-6 col-lg-auto mb-2">
            <i class="bi bi-calendar2 me-1"></i> Founded 1975
          </div>
          <div className="col-12 col-md-6 col-lg-auto mb-2">
            <i class="bi bi-globe me-2"></i>
            <Link to="#" className="text-decoration-none">
              www.microsoft.com <SquareArrowOutUpRight size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
