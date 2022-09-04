import React, {useState} from "react";
  
const UseState=()=>{
// var x="Hi sachin";
const [x,setx]=useState("Hi sachin");

const Change=()=>{
    const value=x;
    //   TERNARY OPERATOR
    (value==="Hi sachin")?setx("Welcome to react page "):setx("Hi sachin");

    //      OR
    //  If and else
    
    // if (value==="Hi sachin"){
    //     setx("Welcome to react page ")
    // }else{
    //     setx("Hi sachin")
    // }
};

return(
   <div className="usestate">
    <h1> Use of useState</h1>
   <h1>{x}</h1>
   <button id="btn" onClick={Change}>click me</button>
   </div>
)
};
export default UseState;