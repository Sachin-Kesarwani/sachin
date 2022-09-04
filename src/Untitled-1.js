import React,{useState} from "react";
import { Link,useNavigate } from "react-router-dom";


function Login(){ 
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const navigate= useNavigate();
  const handleEmail =(e)=>{
    
    setEmail(e.target.value);
  }
  const handlePassword =(e)=>{
    
    setPassword(e.target.value);
  }
  const handleSubmit=(e)=>{
e.preventDefault();
console.log(email, password);

navigate('/Home')
  }
    return(
    <div id="Login" >
    <h1>Login</h1>
    <form onSubmit={handleSubmit}>
      <input className="input"  type={'email'} placeholder="Enter your valid email" onChange={handleEmail} required ></input><br></br><br></br>
      <input className="input" type={'password'} placeholder="Enter password" onChange={handlePassword} required></input><br></br><br></br>
      {/* <Link to="/Home"> */}
      <button id ="submit" type="submit">SUBMIT</button>
      {/* </Link> */}
      </form>
      <p style={{color:"black"}}><b>Are you new ?</b></p><span><Link to="/Signup"  style={{color:"red"}}>Signup</Link></span>  
    </div>
    )
};

export default Login;