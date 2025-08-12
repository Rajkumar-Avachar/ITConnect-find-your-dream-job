import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MapPin,
  Users,
  Calendar,
  Globe,
  SquareArrowOutUpRight,
} from "lucide-react";

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
      <h3 className="fw-bold">Company Profile</h3>
      <div className="rounded-3 my-4 border sha rounded-3dow-sm">
        <div
          className="bg-blue rounded-top-3 upper"
          style={{ width: "100%", height: "10rem" }}
        ></div>
        <div className="px-2 px-md-4 pb-4 pt-2 lower bg-white rounded-3">
          <div className="d-flex gap-3">
            <div className="border p-2 rounded-3 bg-white rounded-4 companyLogo">
              <img
                src="/logo/company.png"
                alt="CompanyLogo"
                className="w-100 rounded-4"
              />
            </div>
            <div>
              <h4 className="fw-bold mb-1">{name}</h4>
              <p className="text-muted">{industry}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container fs-14">
        <div className="row gap-4">
          <div className="col border p-3 rounded-3 h-100">
            <h5 className="fw-semibold mb-4">Company Information</h5>
            <div className="row g-3">
              {/* Headquarters */}
              <div className="col-6">
                <p className="fw-medium mb-2">Headquarters</p>
                <div className="d-flex align-items-center">
                  <MapPin className="me-1" size={14} />
                  <span className="text-muted">{location}</span>
                </div>
              </div>

              {/* Company Size */}
              <div className="col-6">
                <p className="fw-medium mb-2">Company Size</p>
                <div className="d-flex align-items-center">
                  <Users className="me-1" size={14} />
                  <span className="text-muted">{size} employees</span>
                </div>
              </div>

              {/* Founded */}
              <div className="col-6">
                <p className="fw-medium mb-2">Founded</p>
                <div className="d-flex align-items-center">
                  <Calendar className="me-1" size={14} />
                  <span className="text-muted">{foundedYear}</span>
                </div>
              </div>

              {/* Website */}
              <div className="col-6">
                <p className="fw-medium mb-2">Website</p>
                <div className="d-flex align-items-center">
                  <Globe className="me-1" size={14} />
                  <a
                    href={`https://${website}`}
                    className="text-decoration-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{website}</span> <SquareArrowOutUpRight size={12} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col border p-3 rounded-3 h-100">
            <h5 className="fw-semibold mb-4">About Us</h5>
            <p className="text-muted">{about}</p>
            <h5 className="fw-semibold my-4">Specialties</h5>
            <p className="text-muted">{specialties}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
