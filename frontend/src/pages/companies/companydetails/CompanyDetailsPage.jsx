import React from "react";
import { Link, useParams } from "react-router-dom";
import CompanyHeader from "./CompanyHeader";
import CompanyInfo from "./CompanyInfo";
import { useSelector } from "react-redux";
import useCompanyDetails from "../../../hooks/useCompanyDetails";

const CompanyDetailsPage = () => {
  const { id } = useParams();
  useCompanyDetails(id);

  const { companyDetails } = useSelector((store) => store.company);

  return (
    <div className="bg-light py-4">
      <div className="container">
        <Link to="/companies" className="text-decoration-none fw-medium">
          <i class="bi bi-arrow-left"></i> Back to Companies
        </Link>
        <CompanyHeader company={companyDetails} />
        <CompanyInfo company={companyDetails} />
      </div>
    </div>
  );
};

export default CompanyDetailsPage;
