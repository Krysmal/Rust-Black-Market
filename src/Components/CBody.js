import React from "react";
import "./CBody.css";
import CBrowse from './CBrowse'
import CSignIn from './CSignIn'
function CBody() {

    let content;
    function Browse()
    {
      content= <CBrowse/>
      
    }
    function SignIn()
    {
      content=<CSignIn/>
    }

    const message = ()=>{
      alert("alert");
    }


    return (
      <div className='Body'>
        <div className="BodyHeader">
          <div className="BodyHeaderItem" onClick={()=> {Browse(); message();}} >
            Browse
          </div>
          <div className="BodyHeaderItem" onClick={SignIn}>
            Sign in
          </div>
        </div>
        <div className="Container">
          {
            content
          }
        </div>
      </div>
    );
  }
  export default CBody;