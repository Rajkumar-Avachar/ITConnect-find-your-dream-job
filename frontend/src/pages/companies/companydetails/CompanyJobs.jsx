import React from "react";
import { Briefcase, MapPin, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyJobs = () => {
  return (
    <div className="my-4 row row-cols-lg-2">
      {[1, 2, 3, 4].map(() => (
        <Link to={`/job/1`} className="text-decoration-none">
          <div className="jobCard shadow-sm border p-3 rounded-3 mt-3 d-flex justify-content-between align-items-center">
            <div className="">
              <h6 className="fw-semibold text-black mb-1">Software Developer</h6>
              <div className="text-muted d-flex align-items-center fs-14">
                <MapPin size={14} />
                &nbsp;
                <p className="mb-0">Banglore</p>
              </div>
              <p className="text-muted fs-14 fw-light mb-0 mt-2">2 days ago</p>
              {/* <div className="d-flex gap-3 flex-wrap fs-14 mt-3">
                <div className="text-muted d-flex align-items-center">
                  <MapPin size={16} />
                  &nbsp;
                  <p className="mb-0">Banglore</p>
                </div>
                <div className="text-muted d-flex align-items-center">
                  <Briefcase size={16} />
                  &nbsp;
                  <p className="mb-0">Full-time</p>
                </div>
                <div className="text-muted d-flex align-items-center">
                  <Wallet size={16} />
                  &nbsp;
                  <p className="mb-0">₹ 20L - 30L</p>
                </div>
                <div className="text-muted d-flex align-items-center">
                  &#8226; &nbsp;
                  <p className="mb-0">2d</p>
                </div>
              </div> */}
            </div>
            <div className="">
              <button className="btn fs-14 btn-light border d-flex flex-nowrap">
                <i class="bi bi-bookmark fs-14 me-1"></i> Save
              </button>
              {/* <button className="btn fs-14 bg-dark text-light">
                Apply Now
              </button> */}
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
