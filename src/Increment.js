import { useState, useEffect } from "react";



const Increment = () => {
  const [inch, setinch] = useState(0);
  const [fit, setfit] = useState(0);

  useEffect(() => {
    setinch(() => fit * 12);
  }, [fit]);

  return (
    <>
      <p>
        {fit} : Fit = {inch} :inches
      </p>
      <button onClick={() => setfit((f) => f + 1)}>click me</button><br></br><br></br>
     
    </>
  );
};

export default Increment;
