import React from "react";
import SearchCompany from "./SearchCompany";
import CompanyResults from "./CompanyResults";

const CompaniesPage = () => {
  return (
    <div className="bg-light py-5">
      <div className="container">
        <SearchCompany/>
        <CompanyResults/>
      </div>
    </div>
  );
};

export default CompaniesPage;
