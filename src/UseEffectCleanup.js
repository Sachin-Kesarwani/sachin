import React, { useState, useEffect } from "react";

const UseEffectCleanup = () => {
  const [widthCount, setwidthCount] = useState(window.screen.width);

  const actualwidth = () => {
    setwidthCount(window.innerWidth);
  };
  useEffect(() => {
    console.log("add event");
    window.addEventListener("resize", actualwidth);
    //  return is used for to clean the the function
    return () => {
      console.log("remove event");
      window.removeEventListener("resize", actualwidth);
    };
  });

  return (
    <>
      <h1>The actual width of your system in pixel </h1>
      <h3>{widthCount}:pixel</h3>
    </>
  );
};

export default UseEffectCleanup;
