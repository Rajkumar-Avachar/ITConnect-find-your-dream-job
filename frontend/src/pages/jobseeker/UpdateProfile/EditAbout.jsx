import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { USER_API } from "../../../utils/apis";
import axios from "axios";
import { setUser } from "../../../redux/authSlice";
import { toast } from "react-toastify";

const EditAbout = ({ editAbout, setEditAbout }) => {
  const handleClose = () => setEditAbout(false);

  const { user } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    about: user?.profile?.about || "",
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !user._id) {
      toast.error("You must be logged in to update your profile.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      return;
    }
    try {
      const res = await axios.put(`${USER_API}/updateProfile`, input, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success("About Updated successfully", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to Update About.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
    setEditAbout(false);
  };

  return (
    <>
      <h5 className="fw-bold dark-blue mt-2">Edit About</h5>

      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label fs-14">
          Professional Summary
        </label>
        <textarea
          class="form-control border-2 fs-14"
          id="exampleFormControlTextarea1"
          name="about"
          rows="4"
          value={input.about}
          onChange={handleInputChange}
        ></textarea>
        <div className="d-flex gap-3 justify-content-end my-3">
          <button className="btn btn-light border d-flex fs-14 fw-medium" onClick={handleClose}>
            <i class="bi bi-x-lg me-2"></i>
            Cancel
          </button>
          <button className="btn bg-blue fw-medium fs-14" onClick={handleSubmit}>
            <i class="bi bi-floppy me-2"></i>
            Save
          </button>
        </div>
      </div>
    </>
  );
};

export default EditAbout;
