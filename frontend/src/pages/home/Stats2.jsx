import React from "react";
import { Briefcase, Building, Users, CircleCheckBig } from "lucide-react";

const Stats2 = () => {
  return (
    <div className="row g-4 mt-5 text-light">
      <div className="col-6 col-md-3">
        <div className=" p-3 rounded-3 text-center h-100 stats-div">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#eff6ff",
            }}
          >
            <Briefcase className="text-blue" />
          </div>

          <h4 className="fw-bold mb-0 mt-3">10,100+</h4>
          <p className=" mb-0">Active Jobs</p>
        </div>
      </div>
      <div className="col-6 col-md-3 ">
        <div className="p-3 rounded-3 text-center h-100 stats-div">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#faf5ff",
            }}
          >
            <Building style={{ color: "purple" }} />
          </div>
          <h4 className="fw-bold mb-0 mt-3">2,500+</h4>
          <p className=" mb-0">Companies</p>
        </div>
      </div>
      <div className="col-6 col-md-3 ">
        <div className=" p-3 rounded-3 text-center h-100 stats-div">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#fff7ed",
            }}
          >
            <Users className="text-danger" />
          </div>
          <h4 className="fw-bold mb-0 mt-3">50,100+</h4>
          <p className=" mb-0">Job Seekers</p>
        </div>
      </div>
      <div className="col-6 col-md-3 ">
        <div className=" p-3 rounded-3 text-center h-100 stats-div">
          <div
            className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
            style={{
              backgroundColor: "#f0fdf4",
            }}
          >
            <CircleCheckBig className="text-success" />
          </div>
          <h4 className="fw-bold mb-0 mt-3">25K+</h4>
          <p className=" mb-0">Successful Hires</p>
        </div>
      </div>
    </div>
  );
};

export default Stats2;
