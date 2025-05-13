import React, { useState } from "react";
import "./Applicant.css";
import { Link } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditIntroModal from "./UpdateProfile/EditIntroModal";
import { useSelector } from "react-redux";
import EditAbout from "./UpdateProfile/EditAbout";
import EditContactInfo from "./UpdateProfile/EditContactInfo";

const skills = [
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "React",
  "Node",
  "Express",
  "MongoDB",
  "RESTful API",
  "JSON",
  "API Testing",
];

const experience = [1, 2];
const education = [1, 2];

const ProfilePage = () => {
  const [showIntroModal, setShowIntroModal] = useState(false);
  const [editAbout, setEditAbout] = useState(false);
  const [editContactInfo, setEditContactInfo] = useState(false);

  const { user } = useSelector((store) => store.auth);
  return (
    <div className="container flex-wrapmt-sm-5 px-2 px-sm-0 mt-sm-5">
      {/* profile details */}
      <div className="shadow-small d-flex align-items-center gap-2 mb-sm-5 flex-wrap p-2 p-sm-4 rounded-4 profile">
        <div className="me-4">
          <img
            src="/images/codingBoy.webp"
            alt="Profile-Photo"
            width={150}
            className="rounded-circle"
          />
        </div>
        <div className="flex-grow-1 py-3">
          <p className="mb-2 fs-4 fw-bold dark-blue">{user?.fullname}</p>
          <p className="mb-2 dark-blue">{user?.profile?.headline}</p>
          <hr />
          {user?.profile?.location && (
            <p className="text-muted mb-2 fs-8">
              <i className="bi bi-geo-alt me-2"></i> {user?.profile?.location}
            </p>
          )}
          {user?.profile?.gender && (
            <p className="text-muted mb-2 fs-8">
              <i className="bi bi-gender-ambiguous me-2"></i>{" "}
              {user?.profile?.gender}
            </p>
          )}
        </div>

        <button
          className="btn align-self-start mt-3 fs-5"
          onClick={() => setShowIntroModal(true)}
        >
          <EditOutlinedIcon />
        </button>
      </div>
      <hr className="bg-dark d-sm-none" style={{ height: "7px" }} />
      {/* contact, about, skills, experience, education */}
      <div className="row gap-4 mx-1 mainDiv">
        {/* contact info */}
        <div className="shadow-small p-2 p-sm-4 rounded-4 col-12 col-lg-3 h-100">
          {editContactInfo ? (
            <EditContactInfo
              editContactInfo={editContactInfo}
              setEditContactInfo={setEditContactInfo}
            />
          ) : (
            <>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="fs-4 fw-bold dark-blue mb-0">
                  Contact Info
                </p>
                <button
                  className="btn"
                  onClick={() => setEditContactInfo(true)}
                >
                  <EditOutlinedIcon />
                </button>
              </div>

              {/* Phone */}
              <div className="mb-3 fs-8 text-muted">
                <i className="bi bi-telephone me-2"></i>Phone
                <p className="ms-4 mb-0 text-dark">{user?.phoneNumber}</p>
              </div>

              {/* Email */}
              <div className="mb-3 fs-8 text-muted">
                <i className="bi bi-envelope me-2"></i>Email
                <p className="ms-4 mb-0 text-dark">{user?.email}</p>
              </div>

              {/* Portfolio */}
              {user?.profile?.portfolio && (
                <div className="mb-3 fs-8 text-muted">
                  <i className="bi bi-person-video2 me-2"></i>Portfolio
                  <a
                    href={user?.profile?.portfolio}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-4 d-block"
                  >
                    {user?.profile?.portfolio?.replace("https://", "")}
                  </a>
                </div>
              )}

              {/* GitHub */}
              {user?.profile?.github && (
                <div className="mb-3 fs-8 text-muted">
                  <i className="bi bi-github me-2"></i>GitHub
                  <a
                    href={user?.profile?.github}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-4 d-block"
                  >
                    {user?.profile?.github?.replace("https://github.com/", "@")}
                  </a>
                </div>
              )}

              {/* LinkedIn */}
              {user?.profile?.linkedin && (
                <div className="fs-8 text-muted">
                  <i className="bi bi-linkedin me-2"></i>LinkedIn
                  <a
                    href={user?.profile?.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="ms-4 d-block"
                  >
                    {user?.profile?.linkedin?.replace(
                      "https://www.linkedin.com/in/",
                      "in/"
                    )}
                  </a>
                </div>
              )}
            </>
          )}
        </div>

        <hr className="bg-dark d-sm-none" style={{ height: "7px" }} />

        {/* Professional Details */}
        <div className="col px-0">
          {/* about */}
          <div className="about shadow-small rounded-4 p-2 p-sm-4">
            {editAbout ? (
              <EditAbout editAbout={editAbout} setEditAbout={setEditAbout} />
            ) : (
              <>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="fs-4 fw-bold dark-blue my-0">About</p>
                  <button className="btn" onClick={() => setEditAbout(true)}>
                    <EditOutlinedIcon />
                  </button>
                </div>
                <p className="text-muted fs-8" style={{ textAlign: "justify" }}>
                  {user?.profile?.about}
                </p>
              </>
            )}
          </div>

          <hr className="bg-dark d-sm-none" style={{ height: "7px" }} />

          {/* skills */}
          <div className="skills shadow-small rounded-4 mt-4 p-2 p-sm-4">
            <p className="fs-4 fw-bold mb-4 dark-blue">Skills</p>
            <div className="d-flex flex-wrap gap-3">
              {skills.map((item, index) => (
                // <span className="px-3 py-1 bg-input rounded-4 border fs-8">
                //   {item}
                // </span>
                <span className="badge rounded-pill text-bg-dark">{item}</span>
              ))}
            </div>
          </div>

          <hr className="bg-dark d-sm-none mt-4" style={{ height: "7px" }} />

          {/* experience */}
          <div className="experience shadow-small rounded-4 px-sm-4 pt-4 mt-4">
            <p className="fs-4 fw-bold ms-1 dark-blue">Experience</p>
            {experience.map((item, index) => (
              <div className="d-flex">
                <div className=" border-bottom py-3">
                  <img
                    src="logo/companyLogo.jpg"
                    alt="Company Logo"
                    width={50}
                  />
                </div>

                <div className="border-bottom py-3 ps-3">
                  <p className="mb-0 fw-bold fs-7">Senior Frontend Developer</p>
                  <div className="d-flex justify-content-between flex-wrap">
                    <p className="mb-0 me-5 fs-8">Infosys &middot; Full-time</p>
                    <p className="mb-0 text-muted fs-8">
                      <i className="bi bi-calendar me-2"></i>Jan 2025 - Jun 2025
                    </p>
                  </div>
                  <p className="mb-0 text-muted fs-8">
                    Pune, Maharashtra, India
                  </p>
                  <p className="mb-0 mt-3 fs-8">
                    Built interactive websites and web applications using HTML,
                    CSS, and JavaScript. Created responsive layouts and
                    implemented cross-browser compatibility.
                  </p>
                </div>
              </div>
            ))}
          </div>

          <hr className="bg-dark d-sm-none" style={{ height: "7px" }} />

          {/* education */}
          <div className="education shadow-small rounded-4 px-sm-4 pt-4 mt-4">
            <p className="fs-4 fw-bold ms-1 dark-blue">Education</p>
            {education.map((item, index) => (
              <div className="d-flex">
                <div className=" border-bottom py-3">
                  <img
                    src="logo/collegeLogo.jpg"
                    alt="Company Logo"
                    width={50}
                  />
                </div>
                <div className="border-bottom py-3 w-100 ps-3">
                  <p className="mb-0 fw-bold fs-7">
                    GF's Godavari College of Engineering
                  </p>
                  <div className="d-flex justify-content-between flex-wrap">
                    <p className="mb-0 me-5 fs-8">
                      B.Tech - Computer Engineering
                    </p>
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
        </div>
      </div>
      <EditIntroModal
        showIntroModal={showIntroModal}
        setShowIntroModal={setShowIntroModal}
      />
    </div>
  );
};

export default ProfilePage;
