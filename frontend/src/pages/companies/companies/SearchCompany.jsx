import React from "react";

const SearchCompany = () => {
  return (
    <div>
      <h3 className="fw-bold text-center">Browse Companies</h3>
      <div className="d-flex gap-3 p-3 p-md-4 border hover-shadow-sm mt-4 bg-white flex-wrap rounded-3">
        <div className="position-relative flex-grow-1">
          <i
            className="bi bi-search position-absolute top-50 start-0 ms-3 translate-middle-y text-muted"
            style={{ pointerEvents: "none" }}
          ></i>

          <input
            type="text"
            className="form-control ps-5 py-2 bg-input w-100"
            placeholder="Search companies..."
          />
        </div>

        <div className="position-relative flex-grow-1">
          <i
            className="bi bi-geo-alt position-absolute top-50 start-0 ms-3 translate-middle-y text-muted"
            style={{ pointerEvents: "none" }}
          ></i>

          <input
            type="text"
            className="form-control ps-5 py-2 bg-input w-100"
            placeholder="Location"
          />
        </div>

        <div className="mx-auto" style={{ flexBasis: "100%", maxWidth: "200px" }}>
          <button className="btn bg-blue text-light w-100 py-2 fw-medium fs-14">
            Search Companies
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchCompany;
