/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const ForgetPassword = () => {
  return (
    <> 
        <div className="app-content content ">
  <div className="content-overlay" />
  <div className="header-navbar-shadow" />
  <div className="content-wrapper">
    <div className="content-header row"></div>
    <div className="content-body">
      <div className="auth-wrapper auth-cover">
        <div className="auth-inner row m-0">
          {/* Brand logo*/}
          <a className="brand-logo" href="index-2.html">
            <img
              src="./logo/logo.png"
              alt="png"
              height={52}
            />
            <h2 className="brand-text text-primary ms-1" />
          </a>
          {/* /Brand logo*/}
          {/* Forgot password*/}
          <div className="d-flex col-lg-5 align-items-center auth-bg px-2 p-lg-5">
            <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
              <h2 className="card-title fw-bold mb-1">Forgot Password? 🔒</h2>
              <p className="card-text mb-2">
                Enter your email and we'll send you instructions to reset your
                password
              </p>
              <form
                className="auth-forgot-password-form mt-2"
                action=""
                method="POST"
              >
                <div className="mb-1">
                  <label className="form-label" htmlFor="forgot-password-email">
                    Email
                  </label>
                  <input
                    className="form-control"
                    id="forgot-password-email"
                    type="text"
                    name="forgot-password-email"
                    placeholder="john@example.com"
                    aria-describedby="forgot-password-email"
                    autofocus=""
                    tabIndex={1}
                  />
                </div>
                <button className="btn btn-primary w-100" tabIndex={2}>
                  Send reset link
                </button>
              </form>
              <p className="text-center mt-2">
                <a href="auth-login-cover.html">
                  <i data-feather="chevron-left" /> Back to login
                </a>
              </p>
            </div>
          </div>
          {/* /Forgot password*/}
          {/* Left Text*/}
          <div className="d-none d-lg-flex col-lg-7 align-items-center p-5">
            <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
              <img
                className="img-fluid"
                src="./banner/auth-image.png"
                alt="Forgot password V2"
              />
            </div>
          </div>
          {/* /Left Text*/}
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default ForgetPassword