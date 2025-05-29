import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditSkills from "../UpdateProfile/EditSkills";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

const Skills = () => {
  const { user } = useSelector((store) => store.auth);
  const [editSkills, setEditSkills] = useState(false);
  return (
    <>
      <div className="skills shadow-small rounded-4 mt-4 p-2 p-sm-4">
        {editSkills ? (
          <EditSkills editSkills={editSkills} setEditSkills={setEditSkills} />
        ) : (
          <>
            <div className="d-flex justify-content-between align-items-center">
              <p className="fs-4 fw-bold mb-4 dark-blue">Skills</p>
              <button className="btn" onClick={() => setEditSkills(true)}>
                <EditOutlinedIcon />
              </button>
            </div>
            <div className="d-flex flex-wrap gap-3">
              {Array.isArray(user?.profile?.skills) &&
                user?.profile?.skills?.map((item, index) => (
                  <span key={index} className="badge rounded-pill text-bg-dark">
                    {item}
                  </span>
                ))}
            </div>
          </>
        )}
      </div>

      <hr className="bg-dark d-sm-none mt-4" style={{ height: "7px" }} />
    </>
  );
};

export default Skills;
