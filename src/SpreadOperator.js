import React from "react";
import { useState } from "react";

const SpreadOperator = () => {
  const [data, setdata] = useState({
    name: "Rishu",
    caste: "Kesarwani",
    age: 18,
  });
  const onClick = () => {
    setdata({ ...data, name: "Sachin", age: 20 });
  };
  return(
  <>
    <h1>
      My name is {data.name} {data.caste} and age is{data.age}{" "}
    </h1>
    <button onClick={onClick}>Click to upedat</button>
  </>
  );
};
 export default SpreadOperator;