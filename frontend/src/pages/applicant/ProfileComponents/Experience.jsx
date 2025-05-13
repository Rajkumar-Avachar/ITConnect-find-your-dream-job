import React from "react";

const experience = [1, 2];

const Experience = () => {
  return (
    <>
      <div className="experience shadow-small rounded-4 px-sm-4 pt-4 mt-4">
        <p className="fs-4 fw-bold ms-1 dark-blue">Experience</p>
        {experience.map((item, index) => (
          <div className="d-flex">
            <div className=" border-bottom py-3">
              <img src="logo/companyLogo.jpg" alt="Company Logo" width={50} />
            </div>

            <div className="border-bottom py-3 ps-3">
              <p className="mb-0 fw-bold fs-7">Senior Frontend Developer</p>
              <div className="d-flex justify-content-between flex-wrap">
                <p className="mb-0 me-5 fs-8">Infosys &middot; Full-time</p>
                <p className="mb-0 text-muted fs-8">
                  <i className="bi bi-calendar me-2"></i>Jan 2025 - Jun 2025
                </p>
              </div>
              <p className="mb-0 text-muted fs-8">Pune, Maharashtra, India</p>
              <p className="mb-0 mt-3 fs-8">
                Built interactive websites and web applications using HTML, CSS,
                and JavaScript. Created responsive layouts and implemented
                cross-browser compatibility.
              </p>
            </div>
          </div>
        ))}
      </div>

      <hr className="bg-dark d-sm-none" style={{ height: "7px" }} />
    </>
  );
};

export default Experience;
