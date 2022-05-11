import { ArrowForwardIosRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleStart = async () => {
    try {
      let emailValidate = await api.get("/users/email/" + tempEmail);
      if (emailValidate) {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
    setEmail(tempEmail);
  };

  const handleFinish = async (e) => {
    e.preventDefault();
    try {
      let user = { email, username: email.split("@", 1)[0], password };
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
          <h1>
            Unlimited movies, TV
            <br />
            shows, and more.
          </h1>
          <h2>Watch anywhere. Cancel anytime.</h2>
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div className="input">
            <input
              type="email"
              placeholder="email address"
              onChange={(e) => setTempEmail(e.target.value)}
              style={{ display: email ? "none" : "block" }}
            />
            <button
              className="registerButton"
              onClick={handleStart}
              style={{ display: email ? "none" : "block" }}
            >
              <span>
                Get Started <ArrowForwardIosRounded className="arrow" />
              </span>
            </button>

            <input
              id="password"
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              style={{ display: email ? "block" : "none" }}
            />
            <button
              className="registerButton"
              onClick={handleFinish}
              style={{ display: email ? "block" : "none" }}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
