import React ,{useState} from "react";

const UseStateArray=()=>{
    const Biodata =[
        {id:0,myName:"Sachin kesarwani",profession :"Developer"},
        {id:1,myName:"Shobhit kesarwani",profession :"Developer"},
        {id:2,myName:"Rupesh kesarwani",profession :"Government Teacher "},
        {id:3,myName:"Ashish kesarwani",profession :"Bussiness man"}
    ] 
    const [data,setdata]=useState(Biodata);
    const Clear=()=>{
        setdata([])
    };
    return(
        <>
        {
            data.map((element)=>{
                return <h1>MyName:{element.myName} and  Profession :{element.profession}</h1>
            })
        }
        <button onClick={Clear}>Click me to clear data</button>
        </>
    )
};

export default  UseStateArray;