import React from "react";
import { Briefcase, MapPin, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import moment from "moment";

const CompanyJobs = ({ company }) => {
  if (!company) return null;
  return (
    <div className="my-4 row row-cols-lg-2">
      {company.jobs?.map((job) => (
        <Link to={`/job/${job._id}`} className="text-decoration-none">
          <div className="jobCard shadow-sm border p-3 rounded-3 mt-3 d-flex justify-content-between align-items-center">
            <div>
              <h6 className="fw-semibold text-black mb-1">{job.title}</h6>
              <div className="text-muted d-flex align-items-center fs-14">
                <MapPin size={14} />
                &nbsp;
                <p className="mb-0">
                  {job.location} ({job.workMode})
                </p>
              </div>
              <p className="text-primary fs-12 fw-light mb-0 mt-2">
                {moment(job.createdAt).fromNow()}
              </p>
            </div>
            <div className="">
              <button className="btn fs-14 btn-light border d-flex flex-nowrap">
                <i class="bi bi-bookmark fs-14 me-1"></i> Save
              </button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CompanyJobs;

{
  /* <div className="mt-2  fs-12 d-flex gap-5">
  <p className="mb-0">Posted 1 week ago</p>
  <p className="mb-0">20 applicants</p>
</div> */
}
