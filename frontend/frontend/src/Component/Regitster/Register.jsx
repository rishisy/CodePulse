import React, { useState } from "react";
import logo from "../../asset/logo.png";
import mobile from "../../asset/Mobile.png";
import "./Register.css";

function Register() {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      // API request to backend
      const response = await fetch('http://localhost:4040/api/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        // Registration successful
        console.log("Registration successful", data);
        // Redirect user or show success message
      } else {
        // Handle errors
        throw new Error(data.message || "An error occurred during registration.");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}> {/* Add form submission handler */}
        <div className="box1">
          <div className="working">
            <div className="c1">
              <div className="codep">
                <img src={logo} alt="" />
                <span className="cpulse">CodePulse</span>
              </div>
              <div className="log">Register Here</div>
            </div>
            <div className="c2">
              <div className="email">
                <label className="same">Name</label>
                <input type="text" className="ip" placeholder="Enter your name" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="email">
                <label className="same">Email Address</label>
                <input type="email" className="ip" placeholder="abc@gmail.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="password">
                <label className="same">Password</label>
                <input type="password" className="ip" placeholder="Enter your password" required value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="password">
                <label className="same">Confirm Password</label>
                <input type="password" className="ip" placeholder="Enter your password again" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
            </div>
            <div className="c4">
              <div className="bt">
                <button className="btnsp" type="submit">Proceed</button>
              </div>
            </div>
          </div>
        </div>
        <div className="box2">
          <img src={mobile} alt="" />
        </div>
      </form>
    </div>
  );
}

export default Register;
