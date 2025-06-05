import React from "react";

const JobSeekerCTA = () => {
  return (
    <div
      className="text-center py-5 px-2"
      // style={{ backgroundColor: "#001433" }}
      style={{ backgroundColor: "#003d99" }}
    >
      <h3 className="fw-semibold text-light">
        Ready to Take the Next Step in Your Career?
      </h3>
      <p className="text-light mt-4">
        Join thousands of professionals who have found their dream jobs through
        ITConnect.
      </p>
      <div className="d-flex justify-content-center gap-3 mt-5">
        <button className="btn btn-light text-blue fw-medium py-2 px-4">
          Create Account
        </button>
        <button className="btn bg-blue text-light border py-2 px-4 fw-medium">
          Browse Jobs
        </button>
      </div>
    </div>
  );
};

export default JobSeekerCTA;
