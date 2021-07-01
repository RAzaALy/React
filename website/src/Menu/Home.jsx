import React from "react";
import Common from "./Common.jsx";
import headerImg from "../images/img2.svg";
const Home = () => {
  return (
    <>
     <Common 
       heading="Grow Your Coding With "
       visit="/service"
       btn="Get Started"
       brnad="Code Tech"
       para="We are the Best Web Developer in the Universe."
       imgSrc={headerImg}
       animate="animated"
     />
    </>
  );
};
export default Home;
