import React from "react";
import CompanyCard from "./CompanyCard";

const CompanyResults = () => {
  return (
    <div className="mt-5">
      <p className="text-muted">
        Found <b>5</b> companies
      </p>
      <div className="row row-cols-lg-3">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <div className="p-3">
            <CompanyCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyResults;
