import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Upload, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import axios from "axios";
import { USER_API } from "../../../utils/apis";
import { setUser, setLoading } from "../../../redux/authSlice";

const Resume = () => {
  const [resumeFile, setResumeFile] = useState(null);
  const { user, loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      toast.error("Only PDF files are allowed!");
      return;
    }

    setResumeFile(file);

    // immediately upload after selection
    const formData = new FormData();
    formData.append("resume", file);

    try {
      dispatch(setLoading(true));
      const res = await axios.put(`${USER_API}/updateProfile`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success("Resume Uploaded Successfully", {
          position: "bottom-right",
          autoClose: 2000,
        });
        setResumeFile(null);
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to Upload Resume", {
        position: "bottom-right",
        autoClose: 2000,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleDeleteResume = async () => {
    if (!user?.profile?.resume) return;

    try {
      dispatch(setLoading(true));
      const formData = new FormData();
      formData.append("resume", null);

      const res = await axios.put(`${USER_API}/updateProfile`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success("Resume Deleted Successfully", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "Failed to delete resume", {
        position: "bottom-right",
        autoClose: 2000,
      });
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="mt-4 border rounded-4 p-3 p-sm-4 shadow-sm">
      <h6 className="fw-semibold mb-0 fs-18">Resume</h6>

      {user?.profile?.resume ? (
        <div
          className="mt-3 rounded-3 p-4 text-center d-flex flex-column align-items-center"
          style={{ border: "2px dashed lightgray" }}
        >
          <p className="mb-2">
            Uploaded Resume: <strong>{user?.profile?.resumeName}</strong>
          </p>
          <div className="d-flex gap-2">
            <a
              href={user.profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-blue fw-semibold py-1"
            >
              View Resume
            </a>
            <button
              className="btn btn-outline-danger fw-semibold py-1"
              onClick={handleDeleteResume}
              disabled={loading}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              ) : (
                <Trash2 size={16} />
              )}
              &nbsp; Delete
            </button>
          </div>
        </div>
      ) : (
        <div
          className="mt-3 rounded-3 p-4 text-center"
          style={{ border: "2px dashed lightgray" }}
        >
          <input
            type="file"
            id="resume"
            accept="application/pdf"
            hidden
            onChange={handleFileChange}
            disabled={loading}
          />

          <label
            htmlFor="resume"
            className={`btn bg-blue rounded-2 fw-semibold py-1 ${loading ? "disabled" : ""}`}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Uploading...
              </>
            ) : (
              <>
                <Upload size={16} /> &nbsp; Upload Resume
              </>
            )}
          </label>
          <p className="fs-12 mt-2 mb-0">Supported format: pdf</p>
        </div>
      )}
    </div>
  );
};

export default Resume;
