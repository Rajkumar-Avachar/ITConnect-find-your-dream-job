import React from "react";

const JobFilters = () => {
  return (
    <div className="border col-3 p-4 rounded-4 d-none d-lg-block">
      <p className="fw-bold fs-5">Filters</p>
      <div className="mb-3">
        <label className="form-label">Job Type</label>
        <div className="form-check">
          <input
            className="form-check-input border-primary"
            type="checkbox"
            id="fulltime"
            value="Full-time"
          />
          <label className="form-check-label text-muted" htmlFor="fulltime">
            Full-time
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input border-primary"
            type="checkbox"
            id="parttime"
            value="Part-time"
          />
          <label className="form-check-label text-muted" htmlFor="parttime">
            Part-time
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input  border-primary"
            type="checkbox"
            id="remote"
            value="Remote"
          />
          <label className="form-check-label text-muted" htmlFor="remote">
            Remote
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input  border-primary"
            type="checkbox"
            id="internship"
            value="Internship"
          />
          <label className="form-check-label text-muted" htmlFor="internship">
            Internship
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Experience Level</label>
        <div className="form-check">
          <input
            className="form-check-input border-primary"
            type="checkbox"
            id="fresher"
            value="fresher"
          />
          <label className="form-check-label text-muted" htmlFor="fresher">
            Fresher
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input border-primary"
            type="checkbox"
            id="0-1"
            value="0-1"
          />
          <label className="form-check-label text-muted" htmlFor="0-1">
            0 - 1 year
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input border-primary"
            type="checkbox"
            id="1-3"
            value="1-3"
          />
          <label className="form-check-label text-muted" htmlFor="1-3">
            1 - 3 years
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input border-primary"
            type="checkbox"
            id="3-5"
            value="3-5"
          />
          <label className="form-check-label text-muted" htmlFor="3-5">
            3 - 5 years
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input border-primary"
            type="checkbox"
            id="5+"
            value="5+"
          />
          <label className="form-check-label text-muted" htmlFor="5+">
            5+ years
          </label>
        </div>
      </div>
      <div className="mb-3">
        <label className="form-label">Salary Range</label>
        <div class="form-check">
          <input
            class="form-check-input border-primary"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
          />
          <label class="form-check-label text-muted" for="exampleRadios1">
            Up to 3 LPA
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input border-primary"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label class="form-check-label text-muted" for="exampleRadios2">
            3 LPA - 5 LPA
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input border-primary"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label class="form-check-label text-muted" for="exampleRadios2">
            5 LPA - 10 LPA
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input border-primary"
            type="radio"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
          />
          <label class="form-check-label text-muted" for="exampleRadios2">
            Above 10 LPA
          </label>
        </div>
      </div>
      <div className="text-center mt-5 d-flex flex-column gap-3 align-items-center">
      <button className="btn text-light bg-dark-blue w-75">Apply Filters</button>
        <button className="btn btn-gray border border-2 w-75">Reset Filters</button>
      </div>
    </div>
  );
};

export default JobFilters;
