import React from "react";
import CompanyCard from "./CompanyCard";
import { useSelector } from "react-redux";

const CompanyResults = () => {
  const { companies } = useSelector((store) => store.company);
  return (
    <div className="mt-5">
      <p className="text-muted">
        Found <b>{companies.length}</b> companies
      </p>
      <div className="row row-cols-lg-3">
        {companies?.map((company) => (
          <div className="p-3" key={company._id}>
            <CompanyCard company={company} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyResults;
