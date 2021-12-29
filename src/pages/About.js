import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
function About() {
  let navigate = useNavigate();
  var user = JSON.parse(localStorage.getItem("userInfo"));
  console.log(user);
  var token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  const [profile, setProfile] = useState("");

  useEffect(() => {
    if (!user || !token) {
      navigate("/");
    }
    async function getUserdetail() {
      const response = await fetch("http://localhost:5000/auth/user", {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "x-auth-token": token,
        },
      });
      const data = await response.json();
      setProfile(data);
      console.log(data);
    }
    getUserdetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>hi i am about page</h2>
      <h2>firstname:{profile.firstname}</h2>
      <h2>lastname:{profile.lastname}</h2>
      <h2>email:{profile.email}</h2>
    </div>
  );
}

export default About;
