import React from "react";
import { loginUrl } from "../spotify";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <h1>Login Page</h1>
      <img
        src="/assets/Spotify_Logo_RGB_White.png"
        alt="spotify logo"
        style={{ minWidth: "100px", maxWidth: "50vw" }}
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
};

export default Login;

