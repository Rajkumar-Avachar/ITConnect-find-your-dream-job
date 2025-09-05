import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { APPLICATION_API } from "../utils/apis";
import { setApplications, setLoading } from "../redux/applicationSlice";
import axios from "axios";

const useApplications = (type = "employer") => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApplications = async () => {
      dispatch(setLoading(true));
      try {
        const endpoint =
          type === "employer"
            ? `${APPLICATION_API}/employer-applications`
            : `${APPLICATION_API}/jobseeker-applications`;

        const res = await axios.get(endpoint, { withCredentials: true });

        if (res.data.success) {
          dispatch(setApplications(res.data.applications));
        }
      } catch (error) {
        console.error("Failed to fetch applications", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchApplications();
  }, [dispatch, type]);
};

export default useApplications;
