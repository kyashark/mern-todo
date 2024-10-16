import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div>
      
        <div className="card">
          <h2 className="topic">Sing Up</h2>
          <form id="signupForm" action="#" className="signup-form">
            <div className="form-details">
              <div className="field">
                <label for="username">Username</label>
                <input type="text" id="username" className="input-fields" />
                {/* <p className="error-text">Username is empty</p> */}
              </div>
              <div className="field">
                <label for="email">Email</label>

                <input type="text" id="email" className="input-fields" />
              </div>
              <div className="field">
                <label for="password">Password</label>

                <input type="password" id="password" className="input-fields" />
              </div>
              <div className="field">
                <label for="confirm-password">Confirm Password</label>

                <input
                  type="text"
                  id="confirm-password"
                  className="input-fields"
                />
              </div>
            </div>
            <div className="creat-account">
              <input
                type="submit"
                className="submit-btn"
                value="Create Account"
              />
              <p className="have-account">
                Already have a account? <a href="#">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    
  );
};

export default Signup;
