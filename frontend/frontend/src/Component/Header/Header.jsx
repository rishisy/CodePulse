import React from "react";
import fame from "../../asset/Fame.png";
import notify from "../../asset/Notification.png";
import profile from "../../asset/Profile.png";
import arrow from "../../asset/Arrow.png";
import "./Header.css";
import { FaChevronDown, FaRegBell } from "react-icons/fa";

function Header() {
  return (
    <div className="header">
      <div className="head1">
        <img src={fame} alt="" srcset="" className="logo" />
        <h4 className="codepulse">Codepulse</h4>
      </div>
      <div className="head2">
        <div className="imgcontainer">
          <FaRegBell className="icon" />
        </div>
        <div className="secondimg">
          <div className="first">
            <img src={profile} alt="" width={"35px"} height={"35px"} />
            <div className="profileText">
              <h4>Welcome back,</h4>
              <div className="sp2">Mohak</div>
            </div>
          </div>
          <div className="second">
            <FaChevronDown className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
