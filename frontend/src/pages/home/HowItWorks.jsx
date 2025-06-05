import React from "react";
import { Briefcase, CircleCheckBig,TrendingUp } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="container text-center my-5 py-5">
      <h3 className="fw-bold text-black">How It Works</h3>
      <p className="text-muted">
        Find your dream job in just a few simple steps
      </p>
      <div className="d-flex gap-3 flex-wrap flex-md-nowrap mt-4">
        <div className=" p-4 rounded-3 text-center flex-grow-1 bg-white">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#eff6ff",
              width: "56px",
              height: "56px",
            }}
          >
            <Briefcase className="text-blue" size={28} />
          </div>

          <h5 className="fw-semibold text-black mb-2 mt-3">
            Create an Account
          </h5>
          <p className="text-muted mb-0">
            Sign up and complete your profile to showcase your skills and
            experience.
          </p>
        </div>
        <div className=" p-4 rounded-3 text-center flex-grow-1 bg-white">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#eff6ff",
              width: "56px",
              height: "56px",
            }}
          >
            <TrendingUp className="text-blue" size={28}/>
          </div>

          <h5 className="fw-semibold text-black mb-2 mt-3">
            Discover Opportunities
          </h5>
          <p className="text-muted mb-0">
            Search for jobs that match your skills, experience, and career
            goals.
          </p>
        </div>
        <div className=" p-4 rounded-3 text-center flex-grow-1 bg-white">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#eff6ff",
              width: "56px",
              height: "56px",
            }}
          >
            <CircleCheckBig className="text-blue" size={28}/>
          </div>

          <h5 className="fw-semibold text-black mb-2 mt-3">
            Apply & Get Hired
          </h5>
          <p className="text-muted mb-0">
            Submit applications to your preferred jobs and land your dream
            position.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
