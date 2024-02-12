import React from "react";
import "./CHeader.css";
import logo from "../img/Logo.png";
function CHeader() {
    return (

      
      <div className='header'>
      <div classname='logopic'>
          <img src={logo}/> 
          <a href="http://localhost:3000/"></a>
        </div>
        <div>
        
          <h1> Rust Black Market</h1>
        </div>
      </div>  
      

    );
  }
  export default CHeader;