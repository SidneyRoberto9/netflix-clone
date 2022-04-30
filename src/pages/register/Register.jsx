import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const emailRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      let user = { email, username, password };
      await api.post("auth/register", user);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png"
            alt="logo"
            className="logo"
          />

          <button className="loginButton" onClick={() => navigate("/login")}>
            Sign In
          </button>
        </div>

        <div className="container">
          <h1>Unlimited movies, TV shows, and more.</h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="input">
            {!email ? (
              <>
                <input
                  type="email"
                  placeholder="email address"
                  ref={emailRef}
                />
                <button className="registerButton" onClick={handleStart}>
                  Get Started
                </button>
              </>
            ) : (
              <>
                <input
                  type="username"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="registerButton" onClick={handleFinish}>
                  Start
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
