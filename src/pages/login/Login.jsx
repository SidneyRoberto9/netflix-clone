import React, { useRef, useState } from "react";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt="logo"
            className="logo"
          />
          <button className="loginButton">Sign In</button>
        </div>

        <div className="container">
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or phone number" />
            <input type="password" placeholder="Password" />
            <button className="loginButton">Sign In</button>
            <span>
              New to Netflix? <b>Sign up now.</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}
