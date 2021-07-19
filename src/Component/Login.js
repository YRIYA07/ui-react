import { Avatar } from "@material-ui/core";
import { Facebook, Twitter } from "@material-ui/icons";
import React from "react";

import "../CSS/Login.css";

function Login(props) {

  return (
    <div className="login">
      <div className="login__form">
        <div className="login__content">
          <Avatar src={props.src} style={{ height: 85, width: 85 }} />
          <h2>Admin Login</h2>
          <h5>Sign in with your account</h5>
          <form onSubmit={props.logged}>
            <div className="form__row">
              <input type="email" placeholder="Email*" required />
            </div>
            <div className="form__row">
              <input
                type="password"
                placeholder="Password*"
                pattern="^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                title="Password must be of 8 characters including a capital letter and a digit."
                required
              />
            </div>
            <div style={{color:'#666'}} className="login__row">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
              <button type="submit">LOGIN</button>
            </div>
          </form>
        </div>
        <div className="connect__with">
          <h4>Connect with:</h4>
          <Twitter />
          <Facebook />
        </div>
      </div>
    </div>
  );
}

export default Login;
