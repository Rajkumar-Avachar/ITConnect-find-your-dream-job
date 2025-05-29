import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { USER_API } from "../../utils/apis";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLoading, setUser } from "../../redux/authSlice";
import "./LoginSignup.css";

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
  const { loading } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API}/login`, input, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
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
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="userbg py-5">
      <div className="container pt-5">
        <div className="row mx-2">
          <form
            onSubmit={handleFormSubmit}
            className="col-md-8 col-xl-5 mx-auto p-4 p-lg-5 rounded-4 text-center"
          >
            <h1 className="mb-5 fw-bold text-center text-light">Log in</h1>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control bg-input"
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
                  value="jobseeker"
                  id="radioDefault1"
                  checked={input.role === "jobseeker"}
                  onChange={handleInputChange}
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="radioDefault1"
                >
                  Job Seeker
                </label>
              </div>
              <div className="form-check ms-3">
                <input
                  className="form-check-input border border-black "
                  type="radio"
                  name="role"
                  value="employer"
                  id="radioDefault2"
                  checked={input.role === "employer"}
                  onChange={handleInputChange}
                />
                <label
                  className="form-check-label text-light"
                  htmlFor="radioDefault2"
                >
                  Employer
                </label>
              </div>
            </div>
            {loading ? (
              <button className="btn btn-danger w-50 mx-auto mt-4" disabled>
                <span
                  className="spinner-border spinner-border-sm me-2"
                  role="status"
                  aria-hidden="true"
                ></span>
                Please wait...
              </button>
            ) : (
              <button className="btn btn-danger w-50 mx-auto mt-4">
                Log in
              </button>
            )}

            <p className="text-center mt-5 text-light">
              Already have any account?
              <Link
                to="/signup"
                className="text-decoration-none ms-1 text-danger"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
