import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Login() {
  let navigate = useNavigate();

  // console.log(history);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    setPassword(e.target.value);
    console.log(` ${email} ${password}`);
    getUserdetail();
  };
  async function getUserdetail() {
    //create object
    const loginuserDetails = {
      email,
      password,
    };
    console.log(loginuserDetails);

    const response = await fetch("http://localhost:5000/auth/login", {
      method: "POST",
      body: JSON.stringify(loginuserDetails),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    //converting to json
    if (!response.ok) {
      const error = await response.json();
      console.log(error);
    } else {
      const data = await response.json();
      console.log(data);
      alert("login succesfully");

      console.log(`here token :${data.token}`);
      localStorage.setItem("userInfo", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      navigate("/about");
    }
  }
  // useEffect(() => {
  //   var user = JSON.parse(localStorage.getItem("userInfo"));
  //   console.log(user);
  //   if (user) {
  //     navigate.push("/register");
  //   }
  // });

  return (
    <div className="login_main">
      <div className="login_container">
        <h5 className="brandName">Login page</h5>
        <div className="signup-form">
          <h2>Log in</h2>
          <hr />
          <div className="form-group">
            <label>Email or mobile munber</label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input_field">
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="logInbtn" onClick={onChange}>
              Log in
            </button>
          </div>
          <div className="text-center">
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{ color: "blue", textDecoration: "none" }}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
