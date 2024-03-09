import React from "react";
import "./Profilehaf.css";
import nprofile from "../../asset/Nprofile.png";
import Navbar from "../Navbar/Navbar";

function Profilehalf() {
  return (
    <div className="profileHalf">
      <Navbar />
      <div className="container">
        <div className="part1">
          <div className="mf">MY PROFILE</div>
          <div>
            <button className="btn">My Data</button>
          </div>
        </div>
        <div className="part2">
          <div className="part2-1">
            <img src={nprofile} alt="" srcset="" />
            <button className="btns">Upload Photo</button>
          </div>
          <div className="part2-2">
            <div className="detail">
              <div>
                <h3 className="name">Your Name</h3>
                <p>Mohak</p>
              </div>
              <div>
                <button className="btns">Edit</button>
              </div>
            </div>
            <div className="detail">
              <div>
                <h3 className="name">Your Email</h3>
                <p>Mohak</p>
              </div>
              <div>
                <button className="btns">Edit</button>
              </div>
            </div>
            <div className="detail">
              <div>
                <h3 className="name">Your Phone</h3>
                <p>374509334</p>
              </div>
              <div>
                <button className="btns">Edit</button>
              </div>
            </div>
          </div>

          <div className="part2-3">
            <div className="edit">
              <h5 className="h5">About Mohak</h5>
              <button className="btns">Edit</button>
            </div>
            <div className="statement">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              odit unde, autem laborum dolorum soluta, totam, aliquam deleniti
              est dignissimos.
            </div>
          </div>
          <div className="part2-4">
            <h4 className="l">Legal</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profilehalf;
