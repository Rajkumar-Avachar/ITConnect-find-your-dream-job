import React from "react";

const experience = [1, 2];

const Experience = () => {
  return (
    <>
      <div className="experience shadow-small rounded-4 px-sm-4 mt-sm-4 pt-sm-4 border-sm">
        <h5 className="fw-bold ms-1 ">Experience</h5>
        {experience.map((item, index) => (
          <div className="d-flex">
            <div className=" border-bottom py-3">
              <img src="logo/google.webp" alt="CompanyLogo" width={50}  className="rounded-3"/>
            </div>

            <div className="border-bottom py-3 ps-3">
              <h6 className="mb-0 fw-semibold">Senior Frontend Developer</h6>
              <div className="d-flex justify-content-between flex-wrap">
                <p className="mb-0 me-5 fs-14">Infosys &middot; Full-time</p>
                <p className="mb-0 text-muted fs-14">
                  <i className="bi bi-calendar me-2"></i>Jan 2025 - Jun 2025
                </p>
              </div>
              <p className="mb-0 text-muted fs-14">Pune, Maharashtra, India</p>
              <p className="mb-0 mt-3 fs-14">
                Built interactive websites and web applications using HTML, CSS,
                and JavaScript. Created responsive layouts and implemented
                cross-browser compatibility.
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className="bg-dark d-sm-none m-0" style={{ height: "7px" }} />
    </>
  );
};

export default Experience;
