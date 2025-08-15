import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { JOBS_API } from "../utils/apis";
import { setEmployerJobs } from "../redux/jobSlice";

const useEmployerJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchEmployerJobs = async () => {
      try {
        const res = await axios.get(`${JOBS_API}/employer-jobs`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setEmployerJobs(res.data.jobs));
        }
      } catch (error) {
        console.error("Failed to fetch employer jobs:", error);
      }
    };
    fetchEmployerJobs();
  }, [dispatch]);
};

export default useEmployerJobs;
