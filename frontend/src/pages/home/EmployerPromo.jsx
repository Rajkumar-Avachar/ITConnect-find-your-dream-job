import React from "react";
import { Check, Users } from "lucide-react";

const benefits = [
  "Access to millions of qualified candidates",
  "Advanced filtering and matching algorithms",
  "Streamlined applicant tracking and management",
];

const EmployerPromo = () => {
  return (
    <div className="container my-5 pb-5 ">
      <div className="row  justify-content-evenly">
        <div className="col-12 col-md-5 py-4 px-3 ">
          <h3 className="fw-bold text-black mb-3">
            Looking to Hire Top Talent?
          </h3>
          <p className="text-muted">
            Post jobs, find qualified candidates, and build your team with our
            powerful recruitment platform.
          </p>

          <div className="text-muted mt-4 ">
            {benefits.map((benefit, index) => (
              <div className="d-flex gap-2 align-items-center mt-2" key={index}>
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#dbeafe",
                    width: "24px",
                    height: "24px",
                  }}
                >
                  <Check className="text-blue" size={14} />
                </div>
                <p className="mb-0">{benefit}</p>
              </div>
            ))}
          </div>
          <button className="btn bg-blue fw-medium  mt-4 px-3 py-2">
            Post a Job
          </button>
        </div>
        <div className="col-12 col-md-5 d-flex justify-content-center justify-content-md-end align-items-center ">
          <div
            className="rounded-3 mt-5 mt-md-0"
            style={{
              backgroundColor: "#dbeafe",
              rotate: "4deg",
            }}
          >
            <div className="bg-white p-4 rounded-3" style={{ rotate: "-4deg" }}>
              <div className="d-flex gap-3 align-items-center">
                <div
                  className="rounded-circle mx-auto d-flex align-items-center justify-content-center"
                  style={{
                    backgroundColor: "#dbeafe",
                    width: "48px",
                    height: "48px",
                  }}
                >
                  <Users className="text-blue" size={28} />
                </div>
                <div>
                  <h5 className="text-black fw-semibold mb-1">
                    Employer Dashboard
                  </h5>
                  <p className="text-muted mb-0">Manage all your recruitment</p>
                </div>
              </div>
              <div className="mt-5 text-muted fs-14">
                <div className="d-flex bg-light mt-3 align-items-center p-2 justify-content-between">
                  <p className="mb-0 fw-medium">Active Jobs</p>
                  <span className="text-blue">13</span>
                </div>
                <div className="d-flex bg-light mt-3 align-items-center p-2 justify-content-between">
                  <p className="mb-0 fw-medium">Total Applicants</p>
                  <span className="text-blue">120</span>
                </div>
                <div className="d-flex bg-light mt-3 align-items-center p-2 justify-content-between">
                  <p className="mb-0 fw-medium">Interviews Scheduled</p>
                  <span className="text-blue">28</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployerPromo;
