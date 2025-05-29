import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditIntroModal from "../UpdateProfile/EditIntroModal.jsx";
import { useSelector } from "react-redux";

const Intro = () => {
  const [showIntroModal, setShowIntroModal] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <>
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
          {user?.profile?.resume && (
            <a
              href={user?.profile?.resume}
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none fw-bold"
            >
              Resume<i class="bi bi-box-arrow-in-up-right ms-1"></i>
            </a>
          )}
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
      <EditIntroModal
        showIntroModal={showIntroModal}
        setShowIntroModal={setShowIntroModal}
      />
    </>
  );
};

export default Intro;
