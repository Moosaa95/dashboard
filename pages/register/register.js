/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { InputLabel, Select, Snackbar, MenuItem } from "@mui/material";
import AuthenticationContext from "../../context/AuthenticationContext";

export const Register = () => {
  const [adminFirstName, setAdminFirstName] = useState("");
  const [adminLastName, setAdminLastName] = useState("");
  const [adminEmail, setAdminEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [adminUsername, setAdminUserame] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState([]);
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [countries, setCountries] = useState([]);
  const [countriesId, setCountriesId] = useState("")
  // const [state, setState] = useState([])

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const router = useRouter();



  const { register, error, clearError } = useContext(AuthenticationContext);

  useEffect(() => {
    if (error) {
      setErrorMessage(error);
      setOpen(true);
      clearError();
    }
  }, [error]);
  const onSubmitHandler = (e) => {
    e.preventDefault();
    register({
      admin_email: adminEmail,
      admin_first_name: adminFirstName,
      address,
      password,
      phone_number: phoneNumber,
      company_email: companyEmail,
      company_name: companyName,
      country: "1",
      state: "2341",
      gender: "MALE",
      admin_username: adminUsername,
      admin_last_name: adminLastName,
    });
  };

  useEffect(() => {
    const getCountry = async () => {
      try {
        const getCountryData = await fetch(
          "https://nest-srm.up.railway.app/location/apibundle"
        );
        const countryJson = await getCountryData.json();
        console.log(countryJson["country"], "ppp");
        setCountries(await countryJson["country"]);
      } catch (error) {
        setErrorMessage(error);
      }
    };
    getCountry();
  }, []);

  useEffect(() => {
    const getState = async () => {
      try {
        const getCountryData = await fetch(
          `https://nest-srm.up.railway.app/location/apibundle`
        );
        const stateJson = await getCountryData.json();
        console.log(stateJson["country"], "ppp");
        setCountries(await stateJson["state"]);
      } catch (error) {
        setErrorMessage(error);
      }
    };
    getCountry();
  }, []);

 

  const handleClose = () => {
    setOpen(false);
  };

  const handleCountry = (event)=>{
    const getCountryId = event.target.value;
    console.log(getCountryId, 'id');
    setCountriesId(getCountryId);
  }


  return (
    <>
      <div className="app-content content ">
        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={handleClose}
          autoHideDuration={6000}
          message={errorMessage}
          key={"top_center"}
        />
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper">
          <div className="content-header row"></div>
          <div className="content-body">
            <div className="auth-wrapper auth-cover">
              <div className="auth-inner row m-0">
                {/* Brand logo*/}
                <a className="brand-logo" href="index-2.html">
                  <img src="./images/logo/logo.png" alt="png" height={52} />
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
                      onSubmit={onSubmitHandler}
                    >
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-8 px-xl-2 mx-auto">
                          <div className="mb-1">
                            <label
                              className="form-label"
                              htmlFor="register-adminFirstName"
                            >
                              Admin First Name
                            </label>
                            <input
                              className="form-control"
                              id="adminFirstName"
                              type="text"
                              name="admin_first_name"
                              placeholder="Aiivon Innovation Hub"
                              aria-describedby="adminFirstName"
                              autoFocus=""
                              tabIndex={1}
                              onChange={(e) =>
                                setAdminFirstName(e.target.value)
                              }
                              value={adminFirstName}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-8 px-xl-2 mx-auto">
                          <div className="mb-1">
                            <label
                              className="form-label"
                              htmlFor="register-adminLastName"
                            >
                              Admin Last Name
                            </label>
                            <input
                              className="form-control"
                              id="adminLastName"
                              type="text"
                              name="admin_Last_name"
                              placeholder="Aiivon Innovation Hub"
                              aria-describedby="adminLastName"
                              autoFocus=""
                              tabIndex={1}
                              onChange={(e) => setAdminLastName(e.target.value)}
                              value={adminLastName}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-8 px-xl-2 mx-auto">
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
                              name="admin_username"
                              placeholder="Aiivon Innovation Hub"
                              aria-describedby="register-username"
                              autoFocus=""
                              tabIndex={1}
                              onChange={(e) => setAdminUserame(e.target.value)}
                              value={adminUsername}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-8 px-xl-2 mx-auto">
                          <div className="mb-1">
                            <label className="form-label" htmlFor="basicSelect">
                              Gender
                            </label>
                            <select className="form-select" id="basicSelect">
                              <option>select your gender</option>
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-8 px-xl-2 mx-auto">
                          <div className="mb-1">
                            <label
                              className="form-label"
                              htmlFor="register-email"
                            >
                              Company Email
                            </label>
                            <input
                              className="form-control"
                              id="register-company-email"
                              type="text"
                              name="company_email"
                              placeholder="aiivonglobal@yahoomail.com"
                              aria-describedby="register-company-email"
                              tabIndex={2}
                              onChange={(e) => setCompanyEmail(e.target.value)}
                              value={companyEmail}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-16 col-sm-8 px-xl-2 mx-auto">
                          <div className="mb-1">
                            <label
                              className="form-label"
                              htmlFor="register-email"
                            >
                              Email
                            </label>
                            <input
                              className="form-control"
                              id="register-email"
                              type="text"
                              name="admin_email"
                              placeholder="aiivonglobal@yahoomail.com"
                              aria-describedby="register-email"
                              tabIndex={2}
                              onChange={(e) => setAdminEmail(e.target.value)}
                              value={adminEmail}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-16 col-sm-8 px-xl-2 mx-auto">
                          <div className="mb-1">
                            <label
                              className="form-label"
                              htmlFor="register-number"
                            >
                              Phone Number
                            </label>
                            <input
                              className="form-control"
                              id="register-number"
                              type="tel"
                              name="phone_number"
                              placeholder="08012345678"
                              aria-describedby="register-number"
                              autoFocus=""
                              tabIndex={1}
                              onChange={(e) => setPhoneNumber(e.target.value)}
                              value={phoneNumber}
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
                            <select className="form-select" id="basicSelect"
                            onChange={e=>handleCountry(e)}
                            >
                              <option>Select a country</option>
                              {
                                countries.map((country, index) => (
                                  <option value={country.country_id} key={country.country_pk}>{country.country_name}</option>
                                ))
                              }
                            </select>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-8 px-xl-2 mx-auto">
                          <div className="mb-1">
                            <InputLabel
                              className="form-label"
                              id="demo-simple-select-label"
                            >
                              State
                            </InputLabel>
                            <Select
                              className="form-select"
                              labelId="demo-simple-select-label"
                              id="demo-simple-select"
                              value={age}
                              label="Age"
                              onChange={handleChange}
                            >
                              <MenuItem value={10}>Ten</MenuItem>
                              <MenuItem value={20}>Twenty</MenuItem>
                              <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                            {/* <label className="form-label" htmlFor="basicSelect">
                              State
                            </label>
                            <select className="form-select" id="basicSelect">
                              <option>FCT</option>
                              <option>Kwara</option>
                              <option>Kano</option>
                            </select> */}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-8 px-xl-2 mx-auto">
                          <div className="mb-1">
                            <label
                              className="form-label"
                              htmlFor="register-company-name"
                            >
                              Company Name
                            </label>
                            <input
                              className="form-control"
                              id="register-company-name"
                              type="text"
                              name="company_name"
                              placeholder="Aiivon Innovation Hub"
                              aria-describedby="register-company-name"
                              autoFocus=""
                              tabIndex={1}
                              onChange={(e) => setCompanyName(e.target.value)}
                              value={companyName}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-8 px-xl-2 mx-auto">
                          <div className="mb-1">
                            <label
                              className="form-label"
                              htmlFor="register-password"
                            >
                              Password
                            </label>
                            <input
                              className="form-control"
                              id="register-password"
                              type="password"
                              name="password"
                              placeholder="**********"
                              aria-describedby="register-password"
                              autoFocus=""
                              tabIndex={1}
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                            />
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
                              name="address"
                              placeholder="167 St. James house off Adetokunbo Ademola Crescent, Wuse 2, Abuja-FCT."
                              aria-describedby="register-username"
                              autoFocus=""
                              tabIndex={1}
                              onChange={(e) => setAddress(e.target.value)}
                              value={address}
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
                        {/* <a href="auth-login-cover.html"> */}
                        <Link href="/login/">
                          <span
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            &nbsp;Sign in instead
                          </span>
                        </Link>
                        {/* </a> */}
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
  );
};
