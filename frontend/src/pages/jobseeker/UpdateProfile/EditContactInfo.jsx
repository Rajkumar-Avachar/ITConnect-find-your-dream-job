import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { USER_API } from "../../../utils/apis";
import axios from "axios";
import { useEffect } from "react";
import { setUser } from "../../../redux/authSlice";
import { toast } from "react-toastify";

const EditContactInfo = ({ editContactInfo, setEditContactInfo }) => {
  const handleClose = () => setEditContactInfo(false);
  const { user } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    phoneNumber: "",
    email: "",
    portfolio: "",
    github: "",
    linkedin: "",
  });

  useEffect(() => {
    if (user) {
      setInput({
        phoneNumber: user?.phoneNumber || "",
        email: user?.email || "",
        portfolio: user?.profile?.portfolio || "",
        github: user?.profile?.github || "",
        linkedin: user?.profile?.linkedin || "",
      });
    }
  }, [user]);
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
        toast.success("Contact Info Updated successfully", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "Failed to Update Contact Info.",
        {
          position: "bottom-right",
          autoClose: 2000,
        }
      );
      setEditContactInfo(true);
      return;
    }
    setEditContactInfo(false);
  };
  return (
    <>
      <h5 className="fw-bold dark-blue mt-2 mb-4">Edit Contact Info</h5>
      <form onSubmit={handleSubmit} className="bg-white fs-14">
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control "
            id="phone"
            name="phoneNumber"
            value={input.phoneNumber}
            onChange={handleInputChange}
            maxLength={10}
            pattern="[0-9]{10}"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email *
          </label>
          <input
            type="email"
            className="form-control "
            id="email"
            name="email"
            value={input.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="portfolio" className="form-label">
            Portfolio
          </label>
          <input
            type="text"
            className="form-control "
            id="portfolio"
            name="portfolio"
            value={input.portfolio}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="github" className="form-label">
            Github
          </label>
          <input
            type="text"
            className="form-control "
            id="github"
            name="github"
            value={input.github}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="linkedin" className="form-label">
            Linkedin
          </label>
          <input
            type="text"
            className="form-control "
            id="linkedin"
            name="linkedin"
            value={input.linkedin}
            onChange={handleInputChange}
          />
        </div>

        <div className="d-flex gap-3 justify-content-end my-3">
          <button
            className="btn btn-light border d-flex fs-14 fw-medium"
            onClick={handleClose}
          >
            <i class="bi bi-x-lg me-2"></i>
            Cancel
          </button>
          <button type="submit" className="btn bg-blue fs-14 fw-medium">
            <i class="bi bi-floppy  me-2"></i>
            Save
          </button>
        </div>
      </form>
    </>
  );
};

export default EditContactInfo;
