import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditContactInfo from "../UpdateProfile/EditContactInfo.jsx";
import { useSelector } from "react-redux";

const ContactInfo = () => {
  const [editContactInfo, setEditContactInfo] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <>
      <div className="shadow-small p-2 p-sm-4 rounded-4 col-12 col-lg-3 h-100">
        {editContactInfo ? (
          <EditContactInfo
            editContactInfo={editContactInfo}
            setEditContactInfo={setEditContactInfo}
          />
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <p className="fs-4 fw-bold dark-blue mb-0">Contact Info</p>
              <button className="btn" onClick={() => setEditContactInfo(true)}>
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
    </>
  );
};

export default ContactInfo;
