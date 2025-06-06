import React from "react";

const Hero2 = () => {
  return (
    <div className="text-center p-3 p-lg-5 hero-gradient heroDiv">
      <h1 className="fw-bold text-light pt-5">Find Your Dream Job Today</h1>
      <p className="text-light heroP mt-3">
        Discover thousands of job opportunities with all the information you
        need.
      </p>
      <div className="categories col-12 col-xl-8 mx-auto mt-5 bg-light p-4 mb-5 rounded-4">
        <div className="d-flex gap-3 flex-wrap flex-lg-nowrap">
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

          <select class="form-select w-25 py-2 bg-input flex-grow-1">
            <option selected>All Job Types</option>
            <option value="1">Full-time</option>
            <option value="2">Part-time</option>
            <option value="3">Remote</option>
            <option value="4">Internship</option>
          </select>
        </div>
        <button className="btn bg-blue text-light mt-3 px-4 py-2 fw-medium">
          Search Jobs
        </button>
      </div>
    </div>
  );
};

export default Hero2;
