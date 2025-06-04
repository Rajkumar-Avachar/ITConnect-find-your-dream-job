import React from "react";

const education = [1, 2];

const Education = () => {
  return (
    <>
      <div className="education shadow-small rounded-4 px-sm-4 pt-sm-4 mt-sm-4 mt-3 border-sm">
        <h5 className="fw-bold ms-1 ">Education</h5>
        {education.map((item, index) => (
          <div className="d-flex">
            <div className=" border-bottom py-3">
              <img src="logo/collegeLogo.jpg" alt="Company Logo" width={50} />
            </div>
            <div className="border-bottom py-3 w-100 ps-3">
              <h6 className="mb-0 fw-semibold ">
                GF's Godavari College of Engineering
              </h6>
              <div className="d-flex justify-content-between flex-wrap">
                <p className="mb-0 me-5 fs-14">B.Tech - Computer Engineering</p>
                <p className="mb-0 text-muted fs-14">
                  <i className="bi bi-calendar me-2"></i>Sep 2023 - Jun 2026
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="bg-dark d-sm-none m-0" style={{ height: "7px" }} />
    </>
  );
};

export default Education;
