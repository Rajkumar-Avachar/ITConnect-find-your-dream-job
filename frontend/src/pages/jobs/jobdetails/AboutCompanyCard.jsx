import React from "react";

const AboutCompanyCard = ({ company }) => {
  if (!company) return null;
  return (
    <div className="shadow-sm rounded-3 p-3 p-sm-4 bg-white">
      <h5 className="fw-semibold fs-18">About the Company</h5>

      <div className="d-flex gap-3 align-items-center mt-3">
        <img
          src="/logo/google.webp"
          alt="Logo"
          width={40}
          className="rounded-3"
        />
        <h5 className="m-0 fs-18">{company.name}</h5>
      </div>
      <p className="text-muted mt-3 fs-14" style={{ textAlign: "justify" }}>
        {company.about}
      </p>
      <div className="text-center">
        <button className="btn btn-outline-primary border w-auto fs-14 fw-medium">
          View Company Profile
        </button>
      </div>
    </div>
  );
};

export default AboutCompanyCard;
