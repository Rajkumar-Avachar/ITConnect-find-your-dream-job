import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { JOBS_API } from "../utils/apis";
import { setJobs } from "../redux/jobSlice";

const useJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get(`${JOBS_API}/`);
        if (res.data.success) {
          dispatch(setJobs(res.data.jobs));
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      }
    };

    fetchJobs();
  }, [dispatch]);
};

export default useJobs;
