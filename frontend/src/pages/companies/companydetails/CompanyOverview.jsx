import React from "react";

const CompanyOverview = ({ company }) => {
  if (!company) return null;
  return (
    <div className="my-4">
      <h5 className="fs-18 fw-semibold">About Microsoft</h5>
      <p className="text-muted fs-14 mt-3 text-justify ">
        {company.about}
      </p>
      <h5 className="fs-18 fw-semibold mt-4">Specialties</h5>
      <p className="text-muted fs-14 mt-3 text-justify">
        {company.specialities}
      </p>
    </div>
  );
};

export default CompanyOverview;
