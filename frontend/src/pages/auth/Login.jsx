import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { USER_API } from "../../utils/apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  });

  const handleInputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${USER_API}/login`, input, {
        withCredentials: true,
      });
      if (res.data.success) {
        navigate("/");
        toast.success("Login successful!", {
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
      toast.error(error.response?.data?.message || "Login failed.", {
        position: "bottom-right",
        autoClose: 2000,
      });
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row mx-2">
        <form
          onSubmit={handleFormSubmit}
          className="col-md-8 col-xl-5 mx-auto p-4 p-lg-5 rounded-4"
        >
          <h1 className="mb-5 fw-bold text-center text-danger">Log in</h1>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="Email address"
              value={input.email}
              name="email"
              onChange={handleInputChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
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
              <label className="form-check-label" htmlFor="radioDefault1">
                Applicant
              </label>
            </div>
            <div className="form-check ms-3">
              <input
                className="form-check-input border border-black"
                type="radio"
                name="role"
                value="recruiter"
                id="radioDefault2"
                checked={input.role === "recruiter"}
                onChange={handleInputChange}
              />
              <label className="form-check-label" htmlFor="radioDefault2">
                Recruiter
              </label>
            </div>
          </div>
          <button className="btn btn-dark  w-100 mt-4">Log in</button>
          <p className="text-center text-muted mt-5">
            Already have any account?
            <Link to="/signup" className="text-decoration-none ms-1">
              Signup
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
