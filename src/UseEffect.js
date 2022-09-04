import React, { useState, useEffect } from "react";
import { Link,  } from "react-router-dom";


const UseEffect = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    if (count > 1) {
      document.title = `chats(${count})`;
    } else {
      document.title = `chats`;
    }
  }, [count]);

  // 1-- We can use multiple useEffect in single components.
  // 2--Browser will give first prioroty to code which outside of useEffect.
  // 3-- Multiple useEffect will render by serial like 1,2,3,4,,,,.

  // useEffect(() => {
  //   alert("hello sachin");
  // }, [count]);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setcount(count + 2)}>click me</button><br></br><br></br>


      
      <h1>UseEffect Cleanup page</h1>
      <Link to="/UseEffectCleanup" style={{ color: "red" }}>
      <button style={{ color: "red" }}> click to go UseEffect Cleanup page</button>
      </Link>
    </>
  );
};

export default UseEffect;
