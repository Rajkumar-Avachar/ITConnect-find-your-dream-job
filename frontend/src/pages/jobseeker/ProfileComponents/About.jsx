import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditAbout from "../UpdateProfile/EditAbout";
import { useSelector } from "react-redux";
import { SquarePen } from "lucide-react";

const About = () => {
  const [editAbout, setEditAbout] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="mt-4 border rounded-4 p p-3 p-sm-4 shadow-sm">
      {editAbout ? (
        <EditAbout editAbout={editAbout} setEditAbout={setEditAbout} />
      ) : (
        <>
          <div className="w-100 d-flex justify-content-between align-items-center">
            <h6 className="fw-semibold mb-0 fs-18">About me</h6>
            <button
              className="btn btn-outline-dark border h-100 fs-14 py-1"
              onClick={() => setEditAbout(true)}
            >
              <SquarePen size={14} />
              &nbsp; Edit
            </button>
          </div>
          <p className="mt-3">{user?.profile?.about}</p>
        </>
      )}
    </div>
  );
};

export default About;

// const About = () => {
//   const [editAbout, setEditAbout] = useState(false);
//   const { user } = useSelector((store) => store.auth);
//   return (
//     <>
//       <div className="about shadow-small rounded-4 px-2 pb-2 p-sm-4 border-sm">
//         {editAbout ? (
//           <EditAbout editAbout={editAbout} setEditAbout={setEditAbout} />
//         ) : (
//           <>
//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <h5 className="fw-bold my-0">About</h5>
//               <button className="btn" onClick={() => setEditAbout(true)}>
//                 <EditOutlinedIcon />
//               </button>
//             </div>
//             <p className="fs-14" style={{ textAlign: "justify" }}>
//               {user?.profile?.about}
//             </p>
//           </>
//         )}
//       </div>

//       <hr className="bg-dark d-sm-none m-0" style={{ height: "5px" }} />
//     </>
//   );
// };

// export default About;
