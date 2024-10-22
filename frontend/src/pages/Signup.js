import React from "react";
import signupStyle from "../styles/Login.module.css";

const Signup = () => {
  return (
    <div>
      <div className={signupStyle.container}>
        <h2 className={signupStyle.topic}>Sing Up</h2>
        <form id="signupForm" action="#" className={signupStyle.signupForm}>
          <div className={signupStyle.details}>
            <div className={signupStyle.field}>
              <input
                type="text"
                id="username"
                className={signupStyle.inputFields}
                placeholder="Username"
              />
              {/* <p className={signupStyle.errorText}>Username is empty</p> */}
            </div>
            <div className={signupStyle.field}>
              <input
                type="text"
                id="email"
                className={signupStyle.inputFields}
                placeholder="Email"
              />
              <p className={signupStyle.errorText}>Username is empty</p>
            </div>
            <div className={signupStyle.field}>
              <input
                type="password"
                id="password"
                className={signupStyle.inputFields}
                placeholder="Password"
              />
              {/* <p className={signupStyle.errorText}>Username is empty</p> */}
            </div>
            <div className={signupStyle.field}>
              <input
                type="password"
                id="confirm-password"
                className={signupStyle.inputFields}
                placeholder="Confirm Password"
              />
              {/* <p className={signupStyle.errorText}>Username is empty</p> */}
            </div>
          </div>
          <div className={signupStyle.creatAccount}>
            <input
              type="submit"
              className={signupStyle.submitbtn}
              value="Create Account"
            />
            <p className={signupStyle.haveAccount}>
              Already have a account? <a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
