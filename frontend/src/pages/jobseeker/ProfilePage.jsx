import React from "react";
import "./Jobseeker.css";
import Intro from "./ProfileComponents/Intro";
import ContactInfo from "./ProfileComponents/ContactInfo";
import About from "./ProfileComponents/About";
import Skills from "./ProfileComponents/Skills";
import Experience from "./ProfileComponents/Experience";
import Education from "./ProfileComponents/Education";

const ProfilePage = () => {
  return (
    <div className="container flex-wrapmt-sm-5 px-2 px-sm-0 mt-sm-5 mb-5">
      <Intro />
      <div className="row gap-2 gap-sm-4 mx-1 mainDiv">
        <ContactInfo />
        <div className="col px-0">
          <About />
          <Skills />
          <Experience />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
