/* eslint-disable @next/next/no-img-element */
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import * as Icon from "react-feather";
import AuthenticationContext from "../../context/AuthenticationContext";
import Link from "next/link";
import { Snackbar } from "@mui/material";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);


  
  
  const router = useRouter();

  const {login, error, clearError} = useContext(AuthenticationContext)

  useEffect(() =>{
    if (error) {
      setErrorMessage(error)
      setOpen(true)
      clearError();
    }
  }, [error])

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(username, password);
    login({username, password})
  }
  
  const handleClose = () => {
    setOpen(false);
  }
  return (
    <>
      <div className="app-content content ">
        <Snackbar
        
        anchorOrigin={{ vertical:"top", horizontal:"center" }}
        open={open}
        onClose={handleClose}
        autoHideDuration={6000}
        message={errorMessage}
        key={'top_center'}
        
        />
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body">
            <div className="auth-wrapper auth-cover">
              <div className="auth-inner row m-0">
                <a className="brand-logo" href="#">
                  <img src="./images/logo/logo.png" alt="png" height={52} />
                  <h2 className="brand-text text-primary ms-1" />
                </a>
                <div className="d-flex col-lg-6 align-items-center auth-bg px-5 p-lg-5">
                  <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
                    <h2 className="card-title fw-bold mb-1">Welcomeback! 👋</h2>
                    <p className="card-text mb-2">
                      Please sign-in to your account to know your Stakeholder
                      Progress
                    </p>
                    <form
                      className="auth-login-form mt-2"
                      action=""
                      method="POST"
                      onSubmit={onSubmitHandler}
                    >
                      <div className="mb-1">
                        <label className="form-label" htmlFor="login-Username">
                          Username
                        </label>
                        <input
                          className="form-control"
                          id="login-Username"
                          type="text"
                          name="login-Username"
                          placeholder="john@example.com"
                          aria-describedby="login-Username"
                          autoFocus=""
                          tabIndex={1}
                          onChange={(e) => setUsername(e.target.value)}
                          value={username}
                        />
                      </div>
                      <div className="mb-1">
                        <div className="d-flex justify-content-between">
                          <label
                            className="form-label"
                            htmlFor="login-password"
                          >
                            Password
                          </label>
                          <a href="auth-forgot-password-cover.html">
                            <small>Forgot Password?</small>
                          </a>
                        </div>
                        <div className="input-group input-group-merge form-password-toggle">
                          <input
                            className="form-control form-control-merge"
                            id="login-password"
                            type="password"
                            name="login-password"
                            placeholder="············"
                            aria-describedby="login-password"
                            tabIndex={2}
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                          <span className="input-group-text cursor-pointer">
                            <Icon.Eye />
                          </span>
                        </div>
                      </div>
                      <div className="mb-1">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            id="remember-me"
                            type="checkbox"
                            tabIndex={3}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="remember-me"
                          >
                            {" "}
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <button className="btn btn-primary w-100" tabIndex={4}>
                        Sign in
                      </button>
                    </form>
                    <p className="text-center mt-2">
                      <span>New on our platform?</span>
                      <Link href='/register/'
                      style={{
                        cursor:'pointer'
                      }}
                      >
                        <span style={{
                          cursor:'pointer'
                        }}>&nbsp;Create an account</span>

                      </Link>
                      {/* <a href="auth-register-cover.html">
                      </a> */}
                    </p>
                    <div className="divider my-2"></div>
                  </div>
                </div>
                <div className="d-none d-lg-flex col-lg-6 align-items-center p-5">
                  <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
                    <img
                      className="img-fluid"
                      src="./banner/auth-image.png"
                      alt="Login V2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
