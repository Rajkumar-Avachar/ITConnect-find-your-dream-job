import React, { useState } from "react";
import { useSelector } from "react-redux";
import EditSkills from "../UpdateProfile/EditSkills";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { SquarePen } from "lucide-react";

// const skills = ["java", "python", "javascript", "react", "node.js", "C++"];

const Skills = () => {
  const { user } = useSelector((store) => store.auth);
  const [editSkills, setEditSkills] = useState(false);
  return (
    <div className="mt-4 border rounded-4 p p-3 p-sm-4 shadow-sm">
      {editSkills ? (
        <EditSkills editSkills={editSkills} setEditSkills={setEditSkills} />
      ) : (
        <>
          <div className=" w-100 d-flex justify-content-between align-items-center">
            <h6 className="fw-semibold mb-0 fs-18">Skills</h6>
            <button
              className="btn btn-outline-dark border h-100 fs-14 py-1"
              onClick={() => setEditSkills(true)}
            >
              <SquarePen size={14} />
              &nbsp; Edit
            </button>
          </div>
          <div className="d-flex flex-wrap gap-2 mt-3">
            {user?.profile?.skills.map((skill, index) => (
              <span
                class="badge rounded-3 text-blue fw-medium bg-light-blue2 fs-14"
                key={index}
              >
                {skill}
              </span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Skills;

// const Skills = () => {
//   const { user } = useSelector((store) => store.auth);
//   const [editSkills, setEditSkills] = useState(false);
//   return (
//     <>
//       <div className="skills shadow-small rounded-4 p-2 p-sm-4 mt-sm-4 border-sm">
//         {editSkills ? (
//           <EditSkills editSkills={editSkills} setEditSkills={setEditSkills} />
//         ) : (
//           <>
//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <h5 className="fw-bold mb-0">Skills</h5>
//               <button className="btn" onClick={() => setEditSkills(true)}>
//                 <EditOutlinedIcon />
//               </button>
//             </div>
//             <div className="d-flex flex-wrap gap-2">
//               {Array.isArray(user?.profile?.skills) &&
//                 user?.profile?.skills?.map((item, index) => (
//                   <span
//                     class="badge rounded-pill text-bg-light text-muted fw-normal border fs-14"
//                     key={index}
//                   >
//                     {item}
//                   </span>
//                 ))}
//             </div>
//           </>
//         )}
//       </div>

//       <hr className="bg-dark d-sm-none" style={{ height: "5px" }} />
//     </>
//   );
// };

// export default Skills;
