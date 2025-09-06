import React from "react";
import {
  MapPin,
  Users,
  Calendar,
  Globe,
  SquareArrowOutUpRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const CompanyHeader = ({ company }) => {
  if (!company) return null;
  return (
    <div className="rounded-3 my-4 border shadow-sm">
      <div
        className="bg-blue rounded-top-3 upper"
        style={{ width: "100%", height: "10rem" }}
      ></div>
      <div className="px-2 px-md-4 pb-4 pt-2 lower bg-white rounded-3">
        <div className="d-flex gap-3">
          <div className="border p-2 bg-white rounded-4 companyLogo">
            <img
              src={company.logo}
              alt="CompanyLogo"
              className="w-100 rounded-4"
            />
          </div>
          <div>
            <h4 className="fw-bold mb-1">{company.name}</h4>
            <p className="text-muted">{company.industry}</p>
          </div>
        </div>
        <div className="row text-muted mt-3 fs-14">
          <div className="col-12 col-md-6 col-lg-auto mb-2">
            <i class="bi bi-geo-alt me-1"></i> {company.location}
          </div>
          <div className="col-6 col-md-6 col-lg-auto mb-2">
            <i class="bi bi-people me-1"></i> {company.size} employees
          </div>
          <div className="col-6 col-md-6 col-lg-auto mb-2">
            <i class="bi bi-calendar2 me-1"></i> Founded {company.foundedYear}
          </div>
          <div className="col-12 col-md-6 col-lg-auto mb-2">
            <i class="bi bi-globe me-2"></i>
            <a
              href={`https://${company.website}`}
              className="text-decoration-none"
              target="_blank"
              rel="noopener noreferrer"
            >
              {company.website} <SquareArrowOutUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyHeader;
