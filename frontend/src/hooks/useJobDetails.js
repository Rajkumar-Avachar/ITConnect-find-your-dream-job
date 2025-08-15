import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { JOBS_API } from "../utils/apis";
import { setJobDetails, setLoading } from "../redux/jobSlice";
import { toast } from "react-toastify";

const useJobDetails = (jobId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!jobId) return;
    const fetchJobDetails = async () => {
      dispatch(setLoading(true));
      try {
        const res = await axios.get(`${JOBS_API}/${jobId}`);
        if (res.data.success) {
          dispatch(setJobDetails(res.data.job));
        }
      } catch (error) {
        toast.error(error.response?.data?.message || "Error", {
          position: "bottom-right",
          autoClose: 2000,
        });
        console.error("Failed to fetch job details:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchJobDetails();
  }, [jobId, dispatch]);
};

export default useJobDetails;
