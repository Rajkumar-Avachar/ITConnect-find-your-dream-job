import React from "react";
import Hero from "./Hero";
import LatestJobs from "./LatestJobs";
import "./Homepage.css";
import HowItWorks from "./HowItWorks";
import EmployerPromo from "./EmployerPromo";
import JobSeekerCTA from "./JobSeekerCTA";
import CompanyLogoCarousel from "./CompanyLogoCarousel";
import useJobs from "../../hooks/useJobs";

const Homepage = () => {
  useJobs();
  return (
    <div className="bg-light">
      <Hero />
      <LatestJobs />
      <HowItWorks />
      <EmployerPromo />
      <CompanyLogoCarousel />
      <JobSeekerCTA />
    </div>
  );
};

export default Homepage;
