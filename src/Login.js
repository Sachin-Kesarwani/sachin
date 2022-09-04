import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    navigate("/Home");
  };
  return (
    <div id="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="email"
          name="email"
          value={data.email}
          placeholder="Enter your valid email"
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <br></br>
        <input
          className="input"
          type="password"
          name="password"
          value={data.password}
          placeholder="Enter password"
          onChange={handleChange}
          required
        ></input>
        <br></br>
        <br></br>
        <button id="submit" type="submit">
          SUBMIT
        </button>
      </form>
      <p style={{ color: "black" }}>
        <b>Are you new ?</b>
      </p>
      <span>
        <Link to="/Signup" style={{ color: "red" }}>
          Signup
        </Link>
      </span>
    </div>
  );
}

export default Login;
