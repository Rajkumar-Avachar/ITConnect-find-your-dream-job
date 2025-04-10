import React from "react";

const Error = () => {
  return (
    <div className="text-center border">
      <h1 className="text-center mt-5 p-5 fw-bold">
        <span className="text-danger fs-1">404</span>
        <br /> Page Not Found!
      </h1>
      {/* <img src="images/404.jpg" alt="404 Page Not Found" /> */}
    </div>
  );
};

export default Error;
