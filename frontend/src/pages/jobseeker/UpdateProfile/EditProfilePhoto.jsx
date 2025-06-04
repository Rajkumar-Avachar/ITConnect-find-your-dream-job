import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { useSelector, useDispatch } from "react-redux";
import { USER_API } from "../../../utils/apis";
import axios from "axios";
import { setUser } from "../../../redux/authSlice";
import { toast } from "react-toastify";
import CloseIcon from "@mui/icons-material/Close";
import { setLoading } from "../../../redux/authSlice";

const EditProfilePhoto = ({
  showProfilePhotoModal,
  setShowProfilePhotoModal,
}) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const { user } = useSelector((store) => store.auth);
  const { loading } = useSelector((store) => store.auth);

  const handleClose = () => {
    setShowProfilePhotoModal(false);
    setPreview(null);
  };

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const validTypes = ["image/png", "image/jpg", "image/jpeg", "image/webp"];
      if (!validTypes.includes(selectedFile.type)) {
        toast.error("Only PNG, JPG, and JPEG files are allowed.", {
          position: "bottom-right",
          autoClose: 2000,
        });
        return;
      }

      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    if (!user) {
      toast.error("You must be logged in to update your profile.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }
    try {
      dispatch(setLoading(true));
      const formData = new FormData();

      if (file) {
        formData.append("profilePhoto", file);
      }

      const res = await axios.put(`${USER_API}/updateProfile`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success("Profile Photo Updated Successfully", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to Upload Profile Photo",
        {
          position: "bottom-right",
          autoClose: 2000,
        }
      );
    } finally {
      dispatch(setLoading(false));
      setPreview(null);
      setShowProfilePhotoModal(false);
    }
  };

  const handleDeletePhoto = async () => {
    if (!user) {
      toast.error("You must be logged in to delete your photo.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("deletePhoto", "true");

      const res = await axios.put(`${USER_API}/updateProfile`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success("Profile photo deleted successfully", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to delete profile photo",
        {
          position: "bottom-right",
          autoClose: 2000,
        }
      );
    }
    setShowProfilePhotoModal(false);
  };

  return (
    <Modal show={showProfilePhotoModal} onHide={handleClose} centered>
      <Modal.Body className="text-center pb-4">
        <div className="text-end">
          <button className="btn p-1" onClick={handleClose}>
            <CloseIcon className="fs-3 text-muted" />
          </button>
        </div>
        <h5 className="fw-semibold mt-3">Upload your profile photo</h5>

        {!preview && !user?.profile?.profilePhoto && (
          <>
            <input
              type="file"
              id="profilePhoto"
              onChange={handleFileChange}
              accept="image/png, image/jpg, image/jpeg, image/webp"
              hidden
            />

            <label
              htmlFor="profilePhoto"
              className="btn bg-blue rounded-pill fw-semibold mt-4"
            >
              Upload photo
            </label>

            <p className="fs-14 text-muted mt-3">
              Supported file format: png, jpg, jpeg, webp
            </p>
          </>
        )}

        {preview && (
          <>
            <div className="mt-4">
              <img
                src={preview}
                alt="Preview"
                width={200}
                height={200}
                className="rounded-circle"
              />
            </div>
            <div className="mt-4 d-flex justify-content-center gap-2 mb-3">
              <button
                className="btn text-blue fw-semibold fs-14"
                onClick={() => setPreview(null)}
              >
                Cancel
              </button>
              {loading ? (
                <button
                  className="btn bg-blue fw-semibold fs-14 rounded-pill"
                  disabled
                >
                  <span
                    className="spinner-border spinner-border-sm me-2 fw-semibold"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Please wait..
                </button>
              ) : (
                <button
                  className="btn bg-blue fw-semibold fs-14 rounded-pill px-4"
                  onClick={handleFileUpload}
                >
                  Save
                </button>
              )}
            </div>
          </>
        )}

        {user?.profile?.profilePhoto && !preview && (
          <>
            <div className="mt-4">
              <img
                src={user?.profile?.profilePhoto}
                alt="Preview"
                width={200}
                height={200}
                className="rounded-circle"
              />
            </div>

            <div className="d-flex gap-2 align-items-center justify-content-center mt-4">
              <input
                type="file"
                id="profilePhoto"
                onChange={handleFileChange}
                accept="image/png, image/jpg, image/jpeg, image/webp"
                hidden
              />

              <label
                htmlFor="profilePhoto"
                className="btn bg-blue rounded-pill fw-semibold fs-14"
              >
                Change photo
              </label>

              <button
                className="btn text-blue fw-semibold fs-14"
                onClick={handleDeletePhoto}
              >
                Delete photo
              </button>
            </div>

            <p className="fs-14 text-muted mt-3">
              Supported file format: png, jpg, jpeg, webp
            </p>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default EditProfilePhoto;
