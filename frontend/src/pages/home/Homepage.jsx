import React from "react";
import Hero from "./Hero";
import LatestJobs from "./LatestJobs";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="bg-light pb-5">
      <Hero />
      <LatestJobs />
    </div>
  );
};

export default Homepage;
