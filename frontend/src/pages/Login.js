import React from "react";
import loginStyle from "../styles/Login.module.css";

const Login = () => {
  return (
    <div>
      <div className={loginStyle.container}>
        <h2 className={loginStyle.topic}>Welcome Focus Task</h2>
        <form id="LoginForm" action="#" className={loginStyle.signupForm}>
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
              {/* <p className={loginStyle.errorText}>Username is empty</p> */}
            </div>
            <div className={loginStyle.field}>
              <input
                type="password"
                id="password"
                className={loginStyle.inputFields}
                placeholder="Password"
              />
              <div className={loginStyle.textCard}>
              <p className={loginStyle.errorText}>Username is empty</p>
               <p className={loginStyle.forgetText}><a href='#'>Forget Password</a></p>
              </div>
            </div>
          </div>
          <div className={loginStyle.creatAccount}>
            <input
              type="submit"
              className={loginStyle.submitbtn}
              value="Login"
            />
            <p className={loginStyle.haveAccount}>
            You don’t have an account? <a href="#">Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
