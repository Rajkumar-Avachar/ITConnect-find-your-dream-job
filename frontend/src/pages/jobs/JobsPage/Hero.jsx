import React from "react";

const Hero = () => {
  return (
    <div className="mx-xl-5">
      <h4 className="fw-bold">Find Your Perfect Job</h4>
      <div className="col-12 mx-auto mt-4  p-3 mb-5 rounded-3 text-center border bg-white">
        <div className="d-flex gap-3 flex-wrap flex-lg-nowrap col-md-9 mx-auto">
          <div className="position-relative flex-grow-1">
            <i
              className="bi bi-search position-absolute top-50 start-0 ms-3 translate-middle-y text-muted"
              style={{ pointerEvents: "none" }}
            ></i>

            <input
              type="text"
              className="form-control ps-5 py-2 bg-input"
              placeholder="Job title or keyword"
            />
          </div>

          <div className="position-relative flex-grow-1">
            <i
              className="bi bi-geo-alt position-absolute top-50 start-0 ms-3 translate-middle-y text-muted"
              style={{ pointerEvents: "none" }}
            ></i>

            <input
              type="text"
              className="form-control ps-5 py-2 bg-input"
              placeholder="Location"
            />
          </div>

        </div>
        <button className="btn bg-blue text-light mt-3 px-4 py-2 fw-medium fs-14">
          Search Jobs
        </button>
      </div>
    </div>
  );
};

export default Hero;
