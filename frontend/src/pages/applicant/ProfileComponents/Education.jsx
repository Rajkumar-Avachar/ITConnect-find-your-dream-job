import React from "react";

const education = [1, 2];

const Education = () => {
  return (
    <>
      <div className="education shadow-small rounded-4 px-sm-4 pt-4 mt-4">
        <p className="fs-4 fw-bold ms-1 dark-blue">Education</p>
        {education.map((item, index) => (
          <div className="d-flex">
            <div className=" border-bottom py-3">
              <img src="logo/collegeLogo.jpg" alt="Company Logo" width={50} />
            </div>
            <div className="border-bottom py-3 w-100 ps-3">
              <p className="mb-0 fw-bold fs-7">
                GF's Godavari College of Engineering
              </p>
              <div className="d-flex justify-content-between flex-wrap">
                <p className="mb-0 me-5 fs-8">B.Tech - Computer Engineering</p>
                <p className="mb-0 text-muted fs-8">
                  <i className="bi bi-calendar me-2"></i>Sep 2023 - Jun 2026
                </p>
              </div>
              {/* <p className="mb-0 text-muted mt-2">Jalgaon, Maharashtra, India</p> */}
              <p className="mb-0 mt-3 fs-8"></p>
            </div>
          </div>
        ))}
      </div>
      <hr className="bg-dark d-sm-none mt-4" style={{ height: "7px" }} />
    </>
  );
};

export default Education;
