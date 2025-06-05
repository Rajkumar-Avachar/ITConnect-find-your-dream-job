import React from "react";
import Hero from "./Hero";
import LatestJobs from "./LatestJobs";
import "./Homepage.css";
import Stats from "./Stats";
import HowItWorks from "./HowItWorks";
import EmployerPromo from "./EmployerPromo";
import JobSeekerCTA from "./JobSeekerCTA";

const Homepage = () => {
  return (
    <div className="bg-light">
      <Hero />
      <Stats/>
      <LatestJobs />
      <HowItWorks/>
      <EmployerPromo/>
      <JobSeekerCTA/>
    </div>
  );
};

export default Homepage;
