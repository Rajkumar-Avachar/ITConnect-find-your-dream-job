import React from "react";
import { ArrowRight } from "lucide-react";
import Stats2 from "./Stats2";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-gradient heroDiv py-5">
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-12 col-md-5 ">
            <h1 className="fw-bold text-light">Find Your Dream Tech Job</h1>
            <p className="text-light heroP my-4">
              Discover thousands of job opportunities with all the information
              you need.
            </p>
            <Link to="/jobs" className="text-decoration-none">
              <button className="btn btn-light d-flex align-items-center py-2 p-md-3 text-blue fw-medium">
                Find Jobs Now &nbsp;
                <ArrowRight size={18} />
              </button>
            </Link>
          </div>
          <div className="col-12 col-md-7 text-center text-md-end mt-5 mt-md-0">
            <div className="d-inline-block rounded-4 hero-img-div">
              <div className="border d-inline-block rounded-4">
                <img
                  src="images/homehero.jpg"
                  className="rounded-4 opacity-75 w-100"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        </div>
        <Stats2 />
      </div>
    </div>
  );
};

export default Hero;
