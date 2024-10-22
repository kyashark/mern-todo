import React from "react";
import loginStyle from "../styles/Signup.module.css";

const Signup = () => {
  return (
    <div>
      <div className={loginStyle.container}>
        <h2 className={loginStyle.topic}>Sing Up</h2>
        <form id="signupForm" action="#" className={loginStyle.signupForm}>
          <div className={loginStyle.details}>
            <div className={loginStyle.field}>
              <input
                type="text"
                id="username"
                className={loginStyle.inputFields}
                placeholder="Username"
              />
              {/* <p className={loginStyle.errorText}>Username is empty</p> */}
            </div>
            <div className={loginStyle.field}>
              <input
                type="text"
                id="email"
                className={loginStyle.inputFields}
                placeholder="Email"
              />
              <p className={loginStyle.errorText}>Username is empty</p>
            </div>
            <div className={loginStyle.field}>
              <input
                type="password"
                id="password"
                className={loginStyle.inputFields}
                placeholder="Password"
              />
              {/* <p className={loginStyle.errorText}>Username is empty</p> */}
            </div>
            <div className={loginStyle.field}>
              <input
                type="password"
                id="confirm-password"
                className={loginStyle.inputFields}
                placeholder="Confirm Password"
              />
              {/* <p className={loginStyle.errorText}>Username is empty</p> */}
            </div>
          </div>
          <div className={loginStyle.creatAccount}>
            <input
              type="submit"
              className={loginStyle.submitbtn}
              value="Create Account"
            />
            <p className={loginStyle.haveAccount}>
              Already have a account? <a href="#">Login</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
