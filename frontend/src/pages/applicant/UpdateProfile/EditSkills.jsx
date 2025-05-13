import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { USER_API } from "../../../utils/apis";
import axios from "axios";
import { setUser } from "../../../redux/authSlice";
import { toast } from "react-toastify";

const EditSkills = ({ editSkills, setEditSkills }) => {
  const handleClose = () => setEditAbout(false);
  const { user } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    skills: user?.profile?.skills || [],
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
      const res = await axios.put(
        `${USER_API}/updateProfile`,
        {
          data: input,
        },
        {
          withCredentials: true,
        }
      );
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
      <p className="fs-4 fw-bold dark-blue">Edit Skills</p>

      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={input.skills}
          name="skills"
          onChange={handleInputChange}
        ></textarea>
      </div>

      <button type="button" className="btn btn-primary" onClick={handleSubmit}>
        Save Changes
      </button>
    </>
  );
};

export default EditSkills;
