import React from "react";
import logo from "../../asset/logo.png";
import mobile from "../../asset/Mobile.png";
import "./Login.css";

function Login() {
  return (
    <div className="container">
      <div className="box1">
        <div className="working">
          <div className="c1">
            <div className="codep">
              <img src={logo} alt="" srcset="" />
              <span className="cpulse">CodePulse</span>
            </div>
            <div className="log">Login into your account</div>
          </div>
      <form >
          <div className="c2">
            <div className="email">
              <label className="same">Email Address</label>
              <input type="email" name="" id="" className="ip" required  placeholder="abc@gmail.com" />
            </div>
            <div className="password">
              <label className="same" >Password</label>
              <input type="password" name="" id="" className="ip" required    placeholder="Enter your password" />
            </div>
            <div className="bt">
                <input type="submit" value="Login" className="btn" />
            </div>
          </div>
      </form>
          <div className="c3">
            <div className="l1"></div>
            <div className="l2">OR</div>
            <div className="l1"></div>
          </div>
          <div className="c4">
            <div className="bt">
              <button className="btns">Sign up</button>
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

export default Login;
