import React from "react";
import { Link } from "react-router-dom";
import CompanyHeader from "./CompanyHeader";
import CompanyInfo from "./CompanyInfo";

const CompanyDetailsPage = () => {
  return (
    <div className="bg-light py-4">
      <div className="container">
        <Link to="/companies" className="text-decoration-none fw-medium">
          <i class="bi bi-arrow-left"></i> Back to Companies
        </Link>
        <CompanyHeader />
        <CompanyInfo />
      </div>
    </div>
  );
};

export default CompanyDetailsPage;
