import React from "react";
import { Briefcase, Building, Users, CircleCheckBig } from "lucide-react";

const Stats = () => {
  return (
    <div className="container mt-5">
      <div className="row g-4">
        <div className="col-6 col-md-3">
          <div className="border p-4 rounded-3 text-center h-100 bg-white">
            <div
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#eff6ff",
                width: "56px",
                height: "56px",
              }}
            >
              <Briefcase className="text-blue" />
            </div>

            <h4 className="fw-bold text-black mb-0 mt-3">10,100+</h4>
            <p className="text-muted mb-0">Active Jobs</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="border p-4 rounded-3 text-center h-100 bg-white">
            <div
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#faf5ff",
                width: "56px",
                height: "56px",
              }}
            >
              <Building style={{ color: "purple" }} />
            </div>
            <h4 className="fw-bold text-black mb-0 mt-3">2,500+</h4>
            <p className="text-muted mb-0">Companies</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="border p-4 rounded-3 text-center h-100 bg-white">
            <div
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#fff7ed",
                width: "56px",
                height: "56px",
              }}
            >
              <Users className="text-danger" />
            </div>
            <h4 className="fw-bold text-black mb-0 mt-3">50,100+</h4>
            <p className="text-muted mb-0">Job Seekers</p>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="border p-4 rounded-3 text-center h-100 bg-white">
            <div
              className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
              style={{
                backgroundColor: "#f0fdf4",
                width: "56px",
                height: "56px",
              }}
            >
              <CircleCheckBig className="text-success" />
            </div>
            <h4 className="fw-bold text-black mb-0 mt-3">25K+</h4>
            <p className="text-muted mb-0">Successful Hires</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
