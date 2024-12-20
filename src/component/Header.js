import { LOGO_URL } from "../utils/constants";
import {  useState } from "react";
import React from 'react';

const Header = () => {

  const [btnNamereact,setBtnNamereact]=useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
            <button onClick={()=>{
              btnNamereact==="Login"?setBtnNamereact("Logout"):setBtnNamereact("Login")
            }}>{btnNamereact}</button>
          </ul>
        </div>
      </div>
    )
  }
  export default Header;