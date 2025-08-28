import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditIntroModal from "../UpdateProfile/EditIntroModal.jsx";
import { useSelector } from "react-redux";
import EditProfilePhoto from "../UpdateProfile/EditProfilePhoto.jsx";
import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, SquarePen } from "lucide-react";

const Intro = () => {
  const [showIntroModal, setShowIntroModal] = useState(false);
  const [showProfilePhotoModal, setShowProfilePhotoModal] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="border rounded-4 d-flex flex-wrap p-3 p-sm-4 p-md-5 gap-4 gap-sm-5 shadow-sm">
      <div className="d-flex justify-content-between flex-grow-1 flex-md-grow-0 gap-4">
        <img
          src={user?.profile?.profilePhoto || "images/profilePhoto.png"}
          width={150}
          height={150}
          className="rounded-circle"
          onClick={() => setShowProfilePhotoModal(true)}
        />
        <button
          className="btn btn-outline-dark border align-self-start fs-14 py-1 d-md-none"
          onClick={() => setShowIntroModal(true)}
        >
          <SquarePen size={14} />
          &nbsp; Edit
        </button>
      </div>
      <div className="flex-grow-1">
        <div className="d-flex justify-content-between gap-3">
          <div>
            <h2 className="fw-bold mb-1">{user?.fullname}</h2>
            {user?.profile?.headline && (
              <h6 className="fs-18">{user?.profile?.headline}</h6>
            )}
          </div>
          <button
            className="btn btn-outline-dark border h-100 fs-14 py-1 d-none d-md-block"
            onClick={() => setShowIntroModal(true)}
          >
            <SquarePen size={14} />
            &nbsp; Edit
          </button>
        </div>
        <div className="d-flex flex-column gap-2 mt-2">
          {user?.profile?.location && (
            <div className="d-flex align-items-center gap-2">
              <MapPin size={16} />
              <span>{user?.profile?.location}</span>
            </div>
          )}
          {user?.email && (
            <div className="d-flex align-items-center gap-2">
              <Mail size={16} />
              <span>{user?.email}</span>
            </div>
          )}
          {user?.phoneNumber && (
            <div className="d-flex align-items-center gap-2">
              <Phone size={16} />
              <span>+91 {user?.phoneNumber}</span>
            </div>
          )}
        </div>
      </div>
      <EditIntroModal
        showIntroModal={showIntroModal}
        setShowIntroModal={setShowIntroModal}
      />
      <EditProfilePhoto
        showProfilePhotoModal={showProfilePhotoModal}
        setShowProfilePhotoModal={setShowProfilePhotoModal}
      />
    </div>
  );
};

export default Intro;

// const Intro = () => {
//   const [showIntroModal, setShowIntroModal] = useState(false);
//   const [showProfilePhotoModal, setShowProfilePhotoModal] = useState(false);
//   const { user } = useSelector((store) => store.auth);

//   return (
//     <>
//       <div className="shadow-small border-sm d-flex gap-2 mb-sm-5 flex-column flex-sm-row px-2 pt-4 p-sm-4 rounded-4 profile align-items-sm-center">
//         <div className="me-4">
//           <img
//             src={user??.profile?.profilePhoto || "logo/user.png"}
//             alt="Profile-Photo"
//             className="rounded-circle profile-photo border border-3"
//             onClick={() => setShowProfilePhotoModal(true)}
//           />
//         </div>
//         <div className="d-flex justify-content-between flex-grow-1 gap-2">
//           <div className="py-3 flex-grow-1">
//             <h4 className="mb-2 fw-semibold">{user??.fullname}</h4>
//             <p className="mb-2">{user??.profile?.headline}</p>
//             {user??.profile?.resume && (
//               <a
//                 href={user??.profile?.resume}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="text-decoration-none fw-bold text-blue"
//               >
//                 Resume<i class="bi bi-box-arrow-in-up-right ms-1"></i>
//               </a>
//             )}
//             <hr className="text-muted " />
//             {user??.profile?.location && (
//               <p className="text-muted mb-2 fs-14">
//                 <i className="bi bi-geo-alt me-2"></i> {user??.profile?.location}
//               </p>
//             )}
//             {user??.profile?.gender && (
//               <p className="text-muted mb-2 fs-14">
//                 <i className="bi bi-gender-ambiguous me-2"></i>{" "}
//                 {user??.profile?.gender}
//               </p>
//             )}
//           </div>

//           <button
//             className="btn align-self-start mt-3"
//             onClick={() => setShowIntroModal(true)}
//           >
//             <EditOutlinedIcon />
//           </button>
//         </div>
//       </div>
//       <hr className="d-sm-none bg-dark m-0" style={{ height: "5px" }} />
//       <EditIntroModal
//         showIntroModal={showIntroModal}
//         setShowIntroModal={setShowIntroModal}
//       />
//       <EditProfilePhoto
//         showProfilePhotoModal={showProfilePhotoModal}
//         setShowProfilePhotoModal={setShowProfilePhotoModal}
//       />
//     </>
//   );
// };

// export default Intro;
