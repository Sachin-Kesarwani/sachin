import React, { useState } from "react";
import {useNavigate } from "react-router-dom";

const Applyjs = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    Number: "",
  });
  handleChange=(x) => {
    setData({ ...data, [x.target.Name]: x.target.value });
  };
  const handleSubmit = (x) => {
    x.preventDefault();
    console.log(data);
    navigate("/Home");
  };
  return (
    <>
      <div id="Applyjs">
        <h1>Apply for JavaScript</h1>
        <form onSubmit={handleSubmit}>
          <input
            type={"text"}
            className="inputapjs"
            Name="firstname"
            onChange={handleChange}
            value={data.firstname}
            placeholder="Enter your firstname"
            required
          ></input>
          &nbsp;&nbsp;&nbsp;
          <input
            type={"text"}
            className="inputapjs"
            Name="lastname"
            onChange={handleChange}
            value={data.lastname}
            placeholder="Enter your lastname"
            required
          ></input>
          <br></br>
          <br></br>
          <input
            type={"email"}
            className="inputapjs"
            Name="email"
            onChange={handleChange}
            value={data.email}
            placeholder="Enter your email ID"
            required
          ></input>
          &nbsp;&nbsp;&nbsp;
          <input
            type={"number"}
            className="inputapjs"
            Name="Number"
            onChange={handleChange}
            value={data.Number}
            placeholder="Enter your mobilre number"
            required
          ></input>
          <br></br>
          <br></br>
          <p>Gender</p>
          <input
            type={"radio"}
            className="inputapjs"
            name="Gender"
            value={data.Male}
          ></input>
          <label className="inputapjs">Male</label>
          <input
            type={"radio"}
            className="inputapjs"
            name="Gender"
            value={data.Female}
          ></input>
          <label className="inputapjs">Female</label>
          <p>Age</p>
          <input
            type={"radio"}
            className="inputapjs"
            name="Age"
            value={"20-25"}
          ></input>
          <label className="inputapjs">20-25</label>&nbsp;&nbsp;&nbsp;
          <input
            type={"radio"}
            className="inputapjs"
            name="Age"
            value={"26-30"}
          ></input>
          <label className="inputapjs">26-30</label>
          <br></br>
          <input
            type={"radio"}
            className="inputapjs"
            name="Age"
            value={"31-35"}
          ></input>
          <label className="inputapjs">31-35</label>&nbsp;&nbsp;&nbsp;
          <input
            type={"radio"}
            className="inputapjs"
            name="Age"
            value={"36-40"}
          ></input>
          <label className="inputapjs">36-40</label>
          <br></br>
          <input
            type={"radio"}
            className="inputapjs"
            name="Age"
            value={"40+"}
          ></input>
          <label className="inputapjs">40+</label>
          <br></br>
        </form>
      </div>
    </>
  );
};

export default Applyjs;
