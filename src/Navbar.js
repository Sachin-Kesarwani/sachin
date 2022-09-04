import React from 'react';
import {  Link } from "react-router-dom";
const Navbar= () =>{
  return (
  <div>
    <li>
      <Link to="/About">About us</Link>
    </li>
    <li>
      <Link to="/Contact us">Conatct us</Link>
    </li>
    <li>
      <Link to="/News">News</Link>
    </li>
    </div>
  );
}
export default Navbar;
