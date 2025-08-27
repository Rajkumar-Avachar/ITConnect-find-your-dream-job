import React, { useState } from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import EditAbout from "../UpdateProfile/EditAbout";
import { useSelector } from "react-redux";
import { Upload } from "lucide-react";

const Resume = () => {
  const [editAbout, setEditAbout] = useState(false);
  const { user } = useSelector((store) => store.auth);
  return (
    <div className="mt-4 border rounded-4 p p-3 p-sm-4 shadow-sm">
      <h6 className="fw-semibold mb-0 fs-18">Resume</h6>
      <div
        className="mt-3 rounded-3 p-4 text-center"
        style={{ border: "2px dashed lightgray" }}
      >
        {/* <button className="btn bg-blue fs-14">
          <Upload size={16} />
          &nbsp; Upload resume
        </button> */}

        <button
          type="button"
          className="btn bg-blue fs-14 d-flex align-items-center mx-auto"
          onClick={() => document.getElementById("resume-upload").click()}
        >
          <Upload size={16} />
          &nbsp; Upload Resume
        </button>

        <input
          id="resume-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          className="d-none"
        />
        <p className="fs-14 mt-2 mb-0">Supported formats: doc, docx, pdf.</p>
      </div>
    </div>
  );
};

export default Resume;
