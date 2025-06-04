import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditIntroModal from "../UpdateProfile/EditIntroModal.jsx";
import { useSelector } from "react-redux";

const Intro = () => {
  const [showIntroModal, setShowIntroModal] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <>
      <div className="shadow-small border-sm d-flex gap-2 mb-sm-5 flex-column flex-sm-row px-2 pt-4 p-sm-4 rounded-4 profile align-items-sm-center">
        <div className="me-4">
          <img
            src="/images/codingBoy.webp"
            alt="Profile-Photo"
            className="rounded-circle profile-photo"
          />
        </div>
        <div className="d-flex justify-content-between flex-grow-1 gap-2">
          <div className="py-3 flex-grow-1">
            <h4 className="mb-2 fw-medium">{user?.fullname || "Your Name"}</h4>
            <p className="mb-2">{user?.profile?.headline}</p>
            {user?.profile?.resume && (
              <a
                href={user?.profile?.resume}
                target="_blank"
                rel="noreferrer"
                className="text-decoration-none fw-bold text-blue"
              >
                Resume<i class="bi bi-box-arrow-in-up-right ms-1"></i>
              </a>
            )}
            <hr className="text-muted " />
            {user?.profile?.location && (
              <p className="text-muted mb-2 fs-14">
                <i className="bi bi-geo-alt me-2"></i>{" "}
                {user?.profile?.location || "Jalgaon, Maharashtra"}
              </p>
            )}
            {user?.profile?.gender && (
              <p className="text-muted mb-2 fs-14">
                <i className="bi bi-gender-ambiguous me-2"></i>{" "}
                {user?.profile?.gender || "Male"}
              </p>
            )}
          </div>

          <button
            className="btn align-self-start mt-3"
            onClick={() => setShowIntroModal(true)}
          >
            <EditOutlinedIcon />
          </button>
        </div>
      </div>
      <hr className="d-sm-none bg-dark m-0" style={{ height: "5px" }} />
      <EditIntroModal
        showIntroModal={showIntroModal}
        setShowIntroModal={setShowIntroModal}
      />
    </>
  );
};

export default Intro;
