import React from "react";
import logo from "../../asset/logo.png";
import mobile from "../../asset/Mobile.png";
import "./Register.css";

function Register() {
  return (
    <div className="container">
      <div className="box1">
        <div className="working">
          <div className="c1">
            <div className="codep">
              <img src={logo} alt="" srcset="" />
              <span className="cpulse">CodePulse</span>
            </div>
            <div className="log">Register Here</div>
          </div>
          <div className="c2">
          <div className="email">
              <label className="same">Name</label>
              <input type="text" name="" id="" className="ip" placeholder="Enter your name" required />
            </div>
            <div className="email">
              <label className="same">Email Address</label>
              <input type="email" name="" id="" className="ip" placeholder="abc@gmail.com" required/>
            </div>
            <div className="password">
              <label className="same" >Password</label>
              <input type="password" name="" id="" className="ip" placeholder="Enter your password" required />
            </div>
            <div className="password">
              <label className="same" >Confirm Password</label>
              <input type="password" name="" id="" className="ip" placeholder="Enter your password again" required/>
            </div>
            
          </div>
          
          <div className="c4">
            <div className="bt">
              <button className="btnsp" type="submit"> Proceed</button>
            </div>
          </div>
        </div>
      </div>
      <div className="box2">
        <img src={mobile} alt="" srcset="" />
      </div>
    </div>
  );
}

export default Register;
