/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Resetpassword = () => {
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
              src="./images/logo/logo.png"
              alt="png"
              height={52}
            />
            <h2 className="brand-text text-primary ms-1" />
          </a>
          {/* /Brand logo*/}
          {/* Reset password*/}
          <div className="d-flex col-lg-5 align-items-center auth-bg px-2 p-lg-5">
            <div className="col-12 col-sm-8 col-md-6 col-lg-12 px-xl-2 mx-auto">
              <h2 className="card-title fw-bold mb-1">Reset Password 🔒</h2>
              <p className="card-text mb-2">
                Your new password must be different from previously used
                passwords
              </p>
              <form
                className="auth-reset-password-form mt-2"
                action=""
                method="POST"
              >
                <div className="mb-1">
                  <div className="d-flex justify-content-between">
                    <label className="form-label" htmlFor="reset-password-new">
                      New Password
                    </label>
                  </div>
                  <div className="input-group input-group-merge form-password-toggle">
                    <input
                      className="form-control form-control-merge"
                      id="reset-password-new"
                      type="password"
                      name="reset-password-new"
                      placeholder="············"
                      aria-describedby="reset-password-new"
                      autofocus=""
                      tabIndex={1}
                    />
                    <span className="input-group-text cursor-pointer">
                      <i data-feather="eye" />
                    </span>
                  </div>
                </div>
                <div className="mb-1">
                  <div className="d-flex justify-content-between">
                    <label
                      className="form-label"
                      htmlFor="reset-password-confirm"
                    >
                      Confirm Password
                    </label>
                  </div>
                  <div className="input-group input-group-merge form-password-toggle">
                    <input
                      className="form-control form-control-merge"
                      id="reset-password-confirm"
                      type="password"
                      name="reset-password-confirm"
                      placeholder="············"
                      aria-describedby="reset-password-confirm"
                      tabIndex={2}
                    />
                    <span className="input-group-text cursor-pointer">
                      <i data-feather="eye" />
                    </span>
                  </div>
                </div>
                <button className="btn btn-primary w-100" tabIndex={3}>
                  Set New Password
                </button>
              </form>
              <p className="text-center mt-2">
                <a href="auth-login-cover.html">
                  <i data-feather="chevron-left" /> Back to login
                </a>
              </p>
            </div>
          </div>
          {/* /Reset password*/}
          {/* Left Text*/}
          <div className="d-none d-lg-flex col-lg-7 align-items-center p-5">
            <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
              <img
                className="img-fluid"
                src="./banner/auth-image.png"
                alt="Register V2"
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

export default Resetpassword