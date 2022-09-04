import React, { useState } from "react";
import { Link ,useNavigate} from "react-router-dom";
import { Button } from 'reactstrap';


function Signup(){
    const [data, setData] = useState({firstname:'',lastname:'',email:'',password:''});
    const navigate= useNavigate();
    const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
    }
    const handleClick=(e)=>{
     e.preventDefault()
     console.log(data)
     navigate('/Home')
    }
    return(
        <div id="Signup">
       <h1> Signup</h1>
       <form onSubmit={handleClick}>
       <input   className="input" type="text" name="firstname" value={data.firstname} onChange={handleChange} placeholder="firstname" required></input><br></br><br></br>
       <input  className="input"  type="text" name="lastname" value={data.lastname} onChange={handleChange} placeholder="lastname" required></input><br></br><br></br>
       <input className="input"  type="email" name="email" value={data.email} onChange={handleChange} placeholder="Enter your email ID" required></input><br></br><br></br>
       <input className="input"  type="password" name="password" value={data.password} onChange={handleChange} placeholder="Password" required></input><br></br><br></br>
       
       {/* <Link to="/Home"> */}
       <button id="submit" type="submit">SUBMIT</button>
       <Button color="info">Click me</Button>
       {/* </Link> */}
       </form>
        </div>
    )
}
export default Signup;