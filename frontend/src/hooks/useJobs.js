import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { JOBS_API } from "../utils/apis";
import { setJobs, setLoading } from "../redux/jobSlice";

const useJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchJobs = async () => {
      dispatch(setLoading(true));
      try {
        const res = await axios.get(`${JOBS_API}/`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setJobs(res.data.jobs));
        }
      } catch (error) {
        console.error("Failed to fetch jobs:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchJobs();
  }, [dispatch]);
};

export default useJobs;
