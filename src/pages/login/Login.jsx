import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCalls";
import { ToastContainer, toast } from "react-toastify";
import { toastOptions } from "../../utils/toastConfigure";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch, error } = useContext(AuthContext);

  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);

    if ((email || password) === "") {
      toast.warn("Please fill in the fields!!", toastOptions);
      return;
    }

    if (error) {
      toast.warn(
        "Invalid Email or Password, Please try again...",
        toastOptions
      );
      return;
    }
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
        </div>

        <div className="container">
          <form>
            <h1>Sign In</h1>
            <input
              type="email"
              placeholder="Email or phone number"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="loginButton" onClick={handleLogin}>
              Sign In
            </button>
            <span>
              New to Netflix?
              <b onClick={() => navigate("/register")}> Sign up now.</b>
            </span>
            <small>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <b>Learn more</b>.
            </small>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
