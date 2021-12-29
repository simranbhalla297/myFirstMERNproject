import React, { useState } from "react";
import { Link } from "react-router-dom";
function Signin() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onChange = (e) => {
    e.preventDefault();
    setFirstname(firstname);
    setLastname(lastname);
    setEmail(e.target.value);
    setPassword(e.target.value);
    console.log(`${email}  ${password} ${firstname} ${lastname}`);
    createPost();
  };

  async function createPost() {
    //create object
    const registerUserDetails = {
      firstname,
      lastname,
      email,
      password,
    };
    console.log(registerUserDetails);

    const response = await fetch("http://localhost:5000/auth/register", {
      method: "POST",
      body: JSON.stringify(registerUserDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    //converting to json
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="login_main">
      <div className="login_container">
        <h5 className="brandName">Register as a new user</h5>
        <div className="signup-form">
          <h2>Register yourself</h2>
          <hr />
          <div className="form-group">
            <input
              type="text"
              id="firstname"
              placeholder="Name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              id="laastname"
              placeholder="last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="logInbtn" onClick={onChange}>
              Register
            </button>
          </div>
          <div className="text-center">
            Already have an account?{" "}
            <Link to="/" style={{ textDecoration: "none", color: "blue" }}>
              Login here
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
