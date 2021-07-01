import React from "react";
import Common from "./Common.jsx";
import headerImg from "../images/img1.svg";
const About = () => {
  return (
    <>
      <Common
        heading="Who We Are ?"
        visit="/contact"
        btn="Contact Us"
        brand=""
        para="Thank's for landing at About Page."
        imgSrc={headerImg}
        animate=""
      />
    </>
  );
};
export default About;
