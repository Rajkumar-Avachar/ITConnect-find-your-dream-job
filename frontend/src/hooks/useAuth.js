// src/hooks/useAuth.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser, setLoading } from "../redux/authSlice";
import { USER_API } from "../utils/apis";

const useAuth = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((store) => store.auth);

  useEffect(() => {
    const checkAuth = async () => {
      dispatch(setLoading(true));
      try {
        const res = await axios.get(`${USER_API}/me`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setUser(res.data.user));
        }
      } catch (error) {
        console.log("User not logged in");
      } finally {
        dispatch(setLoading(false));
      }
    };

    checkAuth();
  }, [dispatch]);

  return { user, loading };
};

export default useAuth;
