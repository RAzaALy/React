import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [width, setWidth] = useState(window.screen.width);
  const [height, setHeight] = useState(window.screen.height);
  const actualWidth = () => {
    //   console.log(window.innerWidth);
    setWidth(window.innerWidth);
  };
  const actualHeight = () => {
    //   console.log(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", actualWidth);
    window.addEventListener("resize", actualHeight);
    document.title = `${width}px x ${height}px`;
    //Cleanup function in useEffect;
    return () => {
      window.removeEventListener("resize", actualWidth);
      window.removeEventListener("resize", actualHeight);
    };
  });
  return (
    <>
      <h1>The Actual Size of the Window is</h1>
      <h3>
        {width}px x {height}px
      </h3>
    </>
  );
};

export default UseEffect;
