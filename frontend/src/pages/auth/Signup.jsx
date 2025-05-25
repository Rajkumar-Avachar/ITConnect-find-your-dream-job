import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { USER_API } from "../../utils/apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoading } from "../../redux/authSlice";

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
  });

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API}/register`, input, {
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/login");
        toast.success("Registration successful!", {
          position: "bottom-right",
          autoClose: 2000,
        });
      } else {
        toast.error(res.data.message || "Something went wrong.", {
          position: "bottom-right",
          autoClose: 2000,
        });
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      console.error(error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="userbg py-5">
    <div className="container">
      <div className="row mx-2">
        <form
          onSubmit={handleFormSubmit}
          className="col-md-8 col-xl-5 mx-auto p-4 p-lg-5 rounded-4 text-center"
        >
          <h1 className="mb-5 fw-bold text-center text-light">Sign up</h1>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control bg-input"
              id="floatingName"
              placeholder="Full name"
              value={input.fullname}
              name="fullname"
              onChange={handleInputChange}
            />
            <label htmlFor="floatingName">Full name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control bg-input"
              id="floatingEmail"
              placeholder="Email address"
              value={input.email}
              name="email"
              onChange={handleInputChange}
            />
            <label htmlFor="floatingEmail">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="tel"
              className="form-control bg-input"
              id="floatingPhonenumber"
              maxLength={10}
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Phone number"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPhonenumber">Phone number</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control bg-input"
              id="floatingPassword"
              placeholder="Password"
              value={input.password}
              name="password"
              onChange={handleInputChange}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="d-flex mt-4 flex-wrap">
            <div className="form-check">
              <input
                className="form-check-input border border-black"
                type="radio"
                name="role"
                value="applicant"
                id="radioDefault1"
                checked={input.role === "applicant"}
                onChange={handleInputChange}
              />
              <label className="form-check-label text-light" htmlFor="radioDefault1">
                Applicant
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input border border-black"
                type="radio"
                name="role"
                value="employer"
                id="radioDefault2"
                checked={input.role === "employer"}
                onChange={handleInputChange}
              />
              <label className="form-check-label text-light" htmlFor="radioDefault2">
                Employer
              </label>
            </div>
          </div>
          {loading ? (
            <button className="btn btn-danger w-50 mt-4" disabled>
              <span
                className="spinner-border spinner-border-sm me-2"
                role="status"
                aria-hidden="true"
              ></span>
              Please wait...
            </button>
          ) : (
            <button className="btn btn-danger w-50 mt-4">Sign up</button>
          )}
          
          <p className="text-center text-light mt-5">
            Already have any account?
            <Link to="/login" className="text-decoration-none ms-1 text-danger">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Signup;
