import React, { useState } from "react";

const ShortcirEval = () => {
  const [demo, setDemo] = useState("");

  
  return (
    <>
      <h1>This is short circuit evaluation </h1>
      <br></br>
      
      <h3> {demo || "Hi"}</h3> 
     
       <h3>
        {demo || (
          <>
            <h2>hello Developer</h2>
          </>
        )}
      </h3> 
       <h3>{demo && "sachin"}</h3>
    </>
  );
};
export default ShortcirEval;
