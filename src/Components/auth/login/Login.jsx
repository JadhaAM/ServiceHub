import React from 'react';
import './login.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <p>Login</p>
      <form className="form" method="post">
        <div className="input-box">
          <label>Email / User Name</label>
          <input type="text" placeholder="Enter email address" name="email" required />
        </div>

        <div className="input-box">
          <label>Password</label>
          <input type="text" placeholder="Enter Password" name="password" required />
        </div>

        <Link to="/login" >
           <input type="submit" className="button" value="login" />
        </Link>

      </form>
      <div className="w-full p-2">
        <p>
          Don't have an account?
          <Link to="/signUp">
            <span>Sign Up</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
