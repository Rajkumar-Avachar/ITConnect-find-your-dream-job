import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useJobDetails from "../../../hooks/useJobDetails";

const JobDetails = () => {
  const { id } = useParams();
  useJobDetails(id);
  const { jobDetails } = useSelector((store) => store.job);
  const { loading } = useSelector((store) => store.job);
  const {
    title,
    location,
    jobType,
    workMode,
    salary,
    experience,
    openings,
    description,
    requirements,
    skills,
  } = jobDetails;

  if (loading) {
    return (
      <div
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className="spinner-border text-primary"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }
  return (
    <div>
      <p>{title}</p>
    </div>
  );
};

export default JobDetails;
