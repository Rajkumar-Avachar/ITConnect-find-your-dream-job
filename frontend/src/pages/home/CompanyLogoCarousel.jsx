import React from "react";

const logo = [
  "/logo/google.png",
  "/logo/amazon.png",
  "/logo/meta.png",
  "/logo/tcs.png",
  "/logo/microsoft.png",
  "/logo/infosys.png",
  "/logo/hp.png",
  "/logo/nvidia.png",
  "/logo/adobe.png",
  "/logo/samsung.png",
];

const CompanyLogoCarousel = () => {
  return (
    <div className="container logo-carousel-wrapper bg-light">
      <h3 className="text-center fw-bold text-black mb-5">
        Our Hiring Partners
      </h3>
      <div className="logo-carousel">
        {[...logo, ...logo, ...logo].map((logo, index) => (
          <div className="logo-item mx-0 p-0" key={index}>
            <img src={logo} alt="company logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogoCarousel;
