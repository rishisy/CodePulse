import React from "react";
import message from "../../asset/Message.png";
import vector from "../../asset/Vector.png";
import bookmark from "../../asset/Bookmark.png";
import call from "../../asset/Call.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
    <ul className="centered-list-item">
      <li className="list-it">
        <img src={message} alt="" />
        <span className="sp">Project</span>
        <img src={vector} className="im1" alt="" />
      </li>
      <li className="list-it">
        <img src={call} alt="" />
        <span className="sp">Profile</span>
        <img src={vector} className="im1" alt="" />
      </li>
      <li className="list-it">
        <img src={bookmark} alt="" />
        <span className="sp">Settings</span>
        <img src={vector} className="im3" alt="" />
      </li>
      <li className="list-it">
        <img src={bookmark} alt="" />
        <span className="sp">Project Settings</span>
        <img src={vector} className="im4" alt="" />
      </li>
    </ul>
    </div>
  );
}

export default Navbar;
