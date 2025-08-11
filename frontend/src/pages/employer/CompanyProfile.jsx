import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CompanyProfile = () => {
  const { user } = useSelector((store) => store.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.company) {
      navigate("/employer/company/setup", { replace: true });
    }
  }, [user, navigate]);

  if (!user?.company) return null;

  const {
    name,
    industry,
    location,
    size,
    foundedYear,
    website,
    about,
    specialties,
  } = user.company;

  return (
    <div className="p-4 bg-light h-100">
      
    </div>
  );
};

export default CompanyProfile;
