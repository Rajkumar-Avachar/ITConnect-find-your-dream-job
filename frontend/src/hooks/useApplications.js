import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APPLICATION_API } from "../utils/apis";
import { setApplications, setLoading } from "../redux/applicationSlice";
import axios from "axios";

const useApplications = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApplications = async () => {
      dispatch(setLoading(true));
      try {
        const res = await axios.get(
          `${APPLICATION_API}/employer-applications`,
          {
            withCredentials: true,
          }
        );
        if (res.data.success) {
          dispatch(setApplications(res.data.applications));
        }
      } catch (error) {
        console.log("Failed to fetch applications", error);
      } finally {
        dispatch(setLoading(false));
      }
    };
    fetchApplications();
  }, [dispatch]);
};

export default useApplications;
