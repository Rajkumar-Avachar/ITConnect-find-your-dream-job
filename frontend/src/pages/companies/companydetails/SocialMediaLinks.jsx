import React from "react";

const SocialMediaLinks = () => {
  return (
    <div className=" bg-white rounded-3 col p-3 p-md-4 mt-3 shadow-sm border">
      <h5 className="fs-18 fw-semibold">Connect with Microsoft</h5>
      <div className="d-flex mt-3 fs-5 align-items-center social-links gap-2">
        <img src="/logo/social/youtube.png" alt="Youtube" width={35}/>
        <img src="/logo/social/facebook.png" alt="Facebook" width={40}/>
        <img src="/logo/social/x.png" alt="X" className="me-1" width={30}/>
        <img src="/logo/social/instagram.png" alt="Instagram"  width={30}/>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
