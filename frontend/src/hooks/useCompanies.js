import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { COMPANY_API } from "../utils/apis";
import { setCompanies, setLoading } from "../redux/companySlice";

const useCompanies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCompanies = async () => {
      dispatch(setLoading(true));
      try {
        const res = await axios.get(`${COMPANY_API}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
        }
      } catch (error) {
        console.error("Failed to fetch companies:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchCompanies();
  }, [dispatch]);
};

export default useCompanies;
