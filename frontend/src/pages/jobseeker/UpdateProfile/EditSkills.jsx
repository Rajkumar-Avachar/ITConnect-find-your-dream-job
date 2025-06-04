import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { USER_API } from "../../../utils/apis";
import axios from "axios";
import { setUser } from "../../../redux/authSlice";
import { toast } from "react-toastify";

const EditSkills = ({ editSkills, setEditSkills }) => {
  const handleClose = () => setEditSkills(false);
  const { user } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    skills: (user?.profile?.skills || []).join(", "),
  });
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
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
        toast.success("Skills Updated successfully", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to Update Skills.", {
        position: "bottom-right",
        autoClose: 2000,
      });
    }
    setEditSkills(false);
  };
  return (
    <>
      <h5 className="mt-2 fw-bold dark-blue">Edit Skills</h5>

      <div className="mb-3">
        <textarea
          className="form-control fs-14"
          id="exampleFormControlTextarea1"
          rows="3"
          value={input.skills}
          name="skills"
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="d-flex gap-3 justify-content-end mt-3">
        <button className="btn btn-light border d-flex fs-14 fw-medium" onClick={handleClose}>
          <i class="bi bi-x-lg me-2"></i>
          Cancel
        </button>
        <button className="btn bg-blue fs-14 fw-medium" onClick={handleSubmit}>
          <i class="bi bi-floppy me-2"></i>
          Save
        </button>
      </div>
    </>
  );
};

export default EditSkills;
