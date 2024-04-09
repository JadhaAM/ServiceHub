import React from 'react';
import './signUp.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="container">
      <p>Registration Form</p>
      <form className="form" method="post">
        <div className="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" name="name" required />
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" name="email" required />
        </div>

        <div className="input-box">
          <label>Password</label>
          <input type="text" placeholder="Enter Password" name="password" required />
        </div>

        <div className="input-box">
          <label>Confirm Password</label>
          <input type="text" placeholder="Enter Password" name="confirmpassword" required />
        </div>

        <Link to="/login">
          <input type="submit" className="button" value="Register" />
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
