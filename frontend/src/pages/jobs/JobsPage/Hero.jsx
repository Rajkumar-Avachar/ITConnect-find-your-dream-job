import React from "react";

const Hero = () => {
  return (
    <>
      <p className="fw-bold fs-3 dark-blue">Find Your Perfect Job</p>
      <div className="col-12 mx-auto mt-2  p-3 mb-5 rounded-4 text-center border">
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

          {/* <select class="form-select w-25 py-2 bg-input flex-grow-1">
            <option selected>All Job Types</option>
            <option value="1">Full-time</option>
            <option value="2">Part-time</option>
            <option value="3">Remote</option>
            <option value="4">Internship</option>
          </select> */}
        </div>
        <button className="btn bg-dark-blue text-light mt-4 px-4 py-2">
          Search Jobs
        </button>
      </div>
    </>
  );
};

export default Hero;
