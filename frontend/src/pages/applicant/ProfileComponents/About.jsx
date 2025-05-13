import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditAbout from "../UpdateProfile/EditAbout";
import { useSelector } from "react-redux";

const About = () => {
  const [editAbout, setEditAbout] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <>
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
    </>
  );
};

export default About;
