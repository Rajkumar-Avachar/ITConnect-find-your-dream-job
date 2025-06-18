import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUser } from "../redux/authSlice";
import { USER_API } from "../utils/apis";

const useAuth = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.auth);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(`${USER_API}/me`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setUser(res.data.user));
        }
      } catch (error) {
        console.log("User not logged in");
      }
    };

    checkAuth();
  }, [dispatch]);

  return { user };
};

export default useAuth;
