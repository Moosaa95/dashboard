/* eslint-disable @next/next/no-img-element */
import React from 'react'

export const Register = () => {
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
                    {/* Register*/}
                    <div className="row">
                    <div className="col-lg-6 align-items-center auth-bg px-2 p-lg-5 mx-auto my-auto">
                        <h2 className="card-title fw-bold mb-1">Sign Up</h2>
                        <p className="card-text mb-2">
                        Start tracking your Stakeholder progress
                        </p>
                        <form
                        className="auth-register-form mt-2"
                        action=""
                        method="POST"
                        >
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-8 px-xl-2 mx-auto">
                            <div className="mb-1">
                                <label
                                className="form-label"
                                htmlFor="register-username"
                                >
                                Username
                                </label>
                                <input
                                className="form-control"
                                id="register-username"
                                type="text"
                                name="register-username"
                                placeholder="Aiivon Innovation Hub"
                                aria-describedby="register-username"
                                autoFocus=""
                                tabIndex={1}
                                />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-16 col-sm-8 px-xl-2 mx-auto">
                            <div className="mb-1">
                                <label className="form-label" htmlFor="register-email">
                                Email
                                </label>
                                <input
                                className="form-control"
                                id="register-email"
                                type="text"
                                name="register-email"
                                placeholder="aiivonglobal@yahoomail.com"
                                aria-describedby="register-email"
                                tabIndex={2}
                                />
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-16 col-sm-8 px-xl-2 mx-auto">
                            <div className="mb-1">
                                <label className="form-label" htmlFor="register-number">
                                Phone Number
                                </label>
                                <input
                                className="form-control"
                                id="register-number"
                                type="text"
                                name="register-number"
                                placeholder="08012345678"
                                aria-describedby="register-number"
                                autoFocus=""
                                tabIndex={1}
                                />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-8 px-xl-2 mx-auto">
                            <div className="mb-1">
                                <label className="form-label" htmlFor="basicSelect">
                                Country
                                </label>
                                <select className="form-select" id="basicSelect">
                                <option>Nigeria</option>
                                <option>Ghana</option>
                                <option>Congo</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-8 px-xl-2 mx-auto">
                            <div className="mb-1">
                                <label className="form-label" htmlFor="basicSelect">
                                State
                                </label>
                                <select className="form-select" id="basicSelect">
                                <option>FCT</option>
                                <option>Kwara</option>
                                <option>Kano</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-8 px-xl-2 mx-auto">
                            <div className="mb-1">
                                <label
                                className="form-label"
                                htmlFor="register-address"
                                >
                                Address
                                </label>
                                <input
                                className="form-control"
                                id="register-address"
                                type="text"
                                name="register-address"
                                placeholder="167 St. James house off Adetokunbo Ademola Crescent, Wuse 2, Abuja-FCT."
                                aria-describedby="register-username"
                                autoFocus=""
                                tabIndex={1}
                                />
                            </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="mb-1">
                            <div className="form-check">
                                <input
                                className="form-check-input"
                                id="register-privacy-policy"
                                type="checkbox"
                                tabIndex={4}
                                />
                                <div className="row">
                                <div className="col-6">
                                    <label
                                    className="form-check-label"
                                    htmlFor="register-privacy-policy"
                                    >
                                    Remember me
                                    </label>
                                </div>
                                <div className="col-6">
                                    <p>
                                    <a href="#" style={{ float: "right" }}>
                                        Forget Password
                                    </a>
                                    </p>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <button className="btn btn-primary w-100" tabIndex={5}>
                            Sign up
                        </button>
                        <p className="text-center mt-2">
                            <span>Already have an account?</span>
                            <a href="auth-login-cover.html">
                            <span>&nbsp;Sign in instead</span>
                            </a>
                        </p>
                        </form>
                    </div>
                    <div className="d-none d-lg-flex col-lg-6 align-items-center p-5">
                        <div className="w-100 d-lg-flex align-items-center justify-content-center px-5">
                        <img
                            className="img-fluid"
                            src="./images/banner/auth-image.png"
                            alt="Register V2"
                        />
                        </div>
                    </div>
                    </div>
                    {/* /Register*/}
                    {/* Left Text*/}
                    {/* /Left Text*/}
                </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
