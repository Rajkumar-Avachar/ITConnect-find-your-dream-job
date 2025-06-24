import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { COMPANY_API } from "../utils/apis";
import { toast } from "react-toastify";
import { setCompanyDetails } from "../redux/companySlice";

const useCompanyDetails = (companyId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!companyId) return;
    const fetchCompanyDetails = async () => {
      try {
        const res = await axios.get(`${COMPANY_API}/${companyId}`);
        if (res.data.success) {
          dispatch(setCompanyDetails(res.data.company));
        }
      } catch (error) {
        toast.error(error?.response?.data?.message || "Error", {
          position: "bottom-right",
          autoClose: 2000,
        });
        console.error("Failed to fetch company details:", error);
      }
    };

    fetchCompanyDetails();
  }, [companyId, dispatch]);
};

export default useCompanyDetails;
