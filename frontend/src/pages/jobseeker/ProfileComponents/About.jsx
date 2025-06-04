import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditAbout from "../UpdateProfile/EditAbout";
import { useSelector } from "react-redux";

const About = () => {
  const [editAbout, setEditAbout] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <>
      <div className="about shadow-small rounded-4 px-2 pb-2 p-sm-4 border-sm">
        {editAbout ? (
          <EditAbout editAbout={editAbout} setEditAbout={setEditAbout} />
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold my-0">About</h5>
              <button className="btn" onClick={() => setEditAbout(true)}>
                <EditOutlinedIcon />
              </button>
            </div>
            <p className="fs-14" style={{ textAlign: "justify" }}>
              {user?.profile?.about}
            </p>
          </>
        )}
      </div>

      <hr className="bg-dark d-sm-none m-0" style={{ height: "5px" }} />
    </>
  );
};

export default About;
