import React, { useRef, useState } from "react";

const Practice = () => {
    const Fname=useRef();
    const Lname=useRef();
   
    // const Biodata=[
    //     {id:0,Name:"Sachin Kesarwani",profession:"Developer"},
    //     {id:0,Name:"Shobhit Kesarwani",profession:"Developer"},
    //     {id:0,Name:"Shobhit Kesarwani",profession:"Developer"}
    // ] 
    // const [data,setData]=useState({Name:"",profession:""})
    const [display,setDisplay]=useState(false)
   const Handle=(e)=>{
    e.preventDefault();
    const name=Fname.current.value;
    const Name=Lname.current.value;
   name===""?alert("Enter your firstname and lastname"):setDisplay(true);
   
   }
  
 return(
    <>
     <form onSubmit={Handle}>
        <label>Fullname</label>
        <input ref={Fname} type="text"></input><br></br>
        <label>Lastname</label>
        <input ref={Lname} type="text"></input>
        <button>click me</button>
        <p style={{fontSize:"50px"}}>{(display)?`Your name is ${Fname.current.value} and your caste is${Lname.current.value}`:""}</p>
     </form>
      </>
 );
};

export default Practice;
