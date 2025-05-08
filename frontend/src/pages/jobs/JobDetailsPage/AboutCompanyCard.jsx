import React from "react";

const AboutCompanyCard = () => {
  return (
    <div className="border rounded-4 p-4">
      <p className="fs-7 fw-bold">About the Company</p>

      <div className="d-flex gap-3 align-items-center">
        <img src="/logo/companyLogo.jpg" alt="Logo" width={40} />
        <p className="navy fs-7 m-0 fw-bold">Google</p>
      </div>
      <p className="fs-8 text-muted mt-3">
        Google LLC is an American multinational corporation and technology
        company focusing on online advertising, search engine technology, cloud
        computing, computer software, quantum computing, e-commerce, consumer
        electronics, and artificial intelligence.
      </p>
      <button className="btn border w-100">View Company Profile</button>
    </div>
  );
};

export default AboutCompanyCard;
