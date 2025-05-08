import React from "react";
import { Link } from "react-router-dom";
import JobCard from "./JobCard";
import AboutCompanyCard from "./AboutCompanyCard";
import JobDescription from "./JobDescription";
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';

const JobDetailsPage = () => {
  return (
    // <div className="mx-xl-5 my-4 px-3 px-sm-5">
    <div className="my-4">
      <div className="col-11 col-lg-8 mx-auto my-4">
        <div className="my-4">
          <Link to="/jobs" className="text-decoration-none ">
            <ArrowBackOutlinedIcon/> Back to Jobs
          </Link>
        </div>
        <JobCard />
        <JobDescription />
        <AboutCompanyCard />
      </div>
    </div>
  );
};

export default JobDetailsPage;
