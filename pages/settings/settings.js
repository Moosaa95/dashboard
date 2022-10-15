import React from 'react'
import * as Icon from 'react-feather';

const GeneralSettings = () => {
  return (
    <>
         <div className="row">
  <div className="col-lg-9 col-md-9">
    <div className="app-content content ">
      <div className="content-overlay" />
      <div className="header-navbar-shadow" />
      <div className="content-wrapper container-xxl p-0">
        <div className="content-body">
          <div className="row">
            <div className='row'>
            <div className="card">
    <div className="card-header">
      <h4 className="card-title">Settings</h4>
    </div>
    <div className="card-body">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <a
            className="nav-link active"
            id="homeIcon-tab"
            data-bs-toggle="tab"
            href="#homeIcon"
            aria-controls="home"
            role="tab"
            aria-selected="true"
          >
            <Icon.User />
            Personal Setting
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="profileIcon-tab"
            data-bs-toggle="tab"
            href="#profileIcon"
            aria-controls="profile"
            role="tab"
            aria-selected="false"
          >
            <Icon.Briefcase /> Organization Settings
          </a>
        </li>
        <li className="nav-item">
          <a
            className="nav-link"
            id="aboutIcon-tab"
            data-bs-toggle="tab"
            href="#aboutIcon"
            aria-controls="about"
            role="tab"
            aria-selected="false"
          >
            <Icon.Settings /> General Settings
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane active"
          id="homeIcon"
          aria-labelledby="homeIcon-tab"
          role="tabpanel"
        >
          <div className="card">
                <div className="card-body py-2 my-25">
                 
                  {/* form */}
                  <form className="validate-form mt-2 pt-50">
                    <div className="row">
                      <div className="col-12 col-sm-6 mb-1">
                        <label
                          className="form-label"
                          htmlFor="accountFirstName"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="accountFirstName"
                          name="firstName"
                          placeholder="John"
                          defaultValue="John"
                          data-msg="Please enter first name"
                        />
                      </div>
                      <div className="col-12 col-sm-6 mb-1">
                        <label className="form-label" htmlFor="accountLastName">
                          Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="accountLastName"
                          name="lastName"
                          placeholder="Doe"
                          defaultValue="Doe"
                          data-msg="Please enter last name"
                        />
                      </div>
                      <div className="col-12 col-sm-6 mb-1">
                        <label className="form-label" htmlFor="accountEmail">
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="accountEmail"
                          name="email"
                          placeholder="Email"
                          defaultValue="johndoe@gmail.com"
                        />
                      </div>
                      <div className="col-12 col-sm-6 mb-1">
                      <div className="mb-1">
                        <label className="d-block form-label">Gender</label>
                        <div className="form-check my-50">
                          <input
                            type="radio"
                            id="validationRadiojq1"
                            name="validationRadiojq"
                            className="form-check-input"
                          />
                          <label className="form-check-label" htmlFor="validationRadiojq1">
                            Male
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="validationRadiojq2"
                            name="validationRadiojq"
                            className="form-check-input"
                          />
                          <label className="form-check-label" htmlFor="validationRadiojq2">
                            Female
                          </label>
                        </div>
                      </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary mt-1 me-1"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </form>
                  {/*/ form */}
                </div>
              </div>
        </div>
        <div
          className="tab-pane"
          id="profileIcon"
          aria-labelledby="profileIcon-tab"
          role="tabpanel"
        >
          <div className="card">
                <div className="card-body py-2 my-25">
                 
                  {/* form */}
                  <form className="validate-form mt-2 pt-50">
                    <div className="row">
                      <div className="col-12 col-sm-6 mb-1">
                        <label
                          className="form-label"
                          htmlFor="accountFirstName"
                        >
                          Admin First Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="accountFirstName"
                          name="firstName"
                          placeholder="Aiivon"
                          defaultValue="Aiivon"
                          data-msg="Please enter first name"
                        />
                      </div>
                      <div className="col-12 col-sm-6 mb-1">
                        <label className="form-label" htmlFor="accountLastName">
                          Admin Last Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="accountLastName"
                          name="lastName"
                          placeholder="Innovation Hub"
                          defaultValue="Innovation Hub"
                          data-msg="Please enter last name"
                        />
                      </div>
                      <div className="col-12 col-sm-6 mb-1">
                        <label className="form-label" htmlFor="accountEmail">
                          Organization Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="accountEmail"
                          name="email"
                          placeholder="Email"
                          defaultValue="aiivoninnovationhub@gmail.com"
                        />
                      </div>
                      <div className="col-12 col-sm-6 mb-1">
                        <div className="mb-1">
                          <label className="d-block form-label" htmlFor="validationBio">
                            Bio
                          </label>
                          <textarea
                            className="form-control"
                            id="validationBio"
                            name="validationBiojq"
                            rows={1}
                            defaultValue={"St. James House, 167 Adetokunbo Ademola Cres, Wuse 904101, Abuja"}
                          />
                        </div>
                      </div>
                      <div className='col-12 col-sm-6 mb-1'>
                        <div className="mb-1">
                          <label className="form-label" htmlFor="select-country">
                            Country
                          </label>
                          <select
                            className="form-select select2"
                            id="select-country"
                            name="select-country"
                          >
                          <option value="">Select Country</option>
                          <option value="usa">USA</option>
                          <option value="uk">UK</option>
                          <option value="france">France</option>
                          <option value="australia">Australia</option>
                          <option value="spain">Spain</option>
                        </select>
                      </div>

                      </div>
                      <div className='col-12 col-sm-6 mb-1'>
                        <div className="mb-1">
                          <label className="form-label" htmlFor="select-country">
                            State
                          </label>
                          <select
                            className="form-select select2"
                            id="select-country"
                            name="select-country"
                          >
                          <option value="">Select Country</option>
                          <option value="usa">USA</option>
                          <option value="uk">UK</option>
                          <option value="france">France</option>
                          <option value="australia">Australia</option>
                          <option value="spain">Spain</option>
                        </select>
                      </div>

                      </div>
                      <div className="col-12 col-sm-6 mb-1">
                      <div className="mb-1">
                        <label className="d-block form-label">Gender</label>
                        <div className="form-check my-50">
                          <input
                            type="radio"
                            id="validationRadiojq1"
                            name="validationRadiojq"
                            className="form-check-input"
                          />
                          <label className="form-check-label" htmlFor="validationRadiojq1">
                            Male
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            type="radio"
                            id="validationRadiojq2"
                            name="validationRadiojq"
                            className="form-check-input"
                          />
                          <label className="form-check-label" htmlFor="validationRadiojq2">
                            Female
                          </label>
                        </div>
                      </div>
                      </div>
                      <div className="col-12 col-sm-6 mb-1">
                        <label
                          className="form-label"
                          htmlFor="accountOrganization"
                        >
                          Organization Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="accountOrganization"
                          name="organization"
                          placeholder="Organization name"
                          defaultValue="PIXINVENT"
                        />
                      </div>
                      <div className="col-12 col-sm-6 mb-1">
                        <label
                          className="form-label"
                          htmlFor="accountPhoneNumber"
                        >
                          Phone Number
                        </label>
                        <input
                          type="text"
                          className="form-control account-number-mask"
                          id="accountPhoneNumber"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          defaultValue="457 657 1237"
                        />
                      </div>
                      <div className='col-12 col-sm-6 mb-1'>
                        <div className="mb-1">
                          <label className="form-label" htmlFor="basic-default-password1">
                            Password
                          </label>
                          <input
                            type="password"
                            id="basic-default-password1"
                            className="form-control"
                            placeholder="············"
                            required=""
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please enter your password.</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary mt-1 me-1"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </form>
                  {/*/ form */}
                </div>
              </div>
        </div>

        <div
          className="tab-pane"
          id="aboutIcon"
          aria-labelledby="aboutIcon-tab"
          role="tabpanel"
        >
          <div className="card">
                <div className="card-body py-2 my-25">
                 
                  {/* form */}
                  <form className="validate-form mt-2 pt-50">
                    <div className="row">
                      <div className="col-12 col-sm-6 mb-1">
                        <label
                          className="form-label"
                          htmlFor="accountFirstName"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="floating-label-disable"
                          name="firstName"
                          placeholder="aiivoninno"
                          disabled
                        />
                      </div>
                      <div className='col-12 col-sm-6 mb-1'>
                        <div className="mb-1">
                          <label className="form-label" htmlFor="basic-default-password1">
                            Password
                          </label>
                          <input
                            type="password"
                            id="basic-default-password1"
                            className="form-control"
                            placeholder="············"
                            required=""
                          />
                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">Please enter your password.</div>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary mt-1 me-1"
                        >
                          Save changes
                        </button>
                      </div>
                    </div>
                  </form>
                  {/*/ form */}
                </div>
              </div>
        </div>
      </div>
    </div>
  </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-3 col-md-3 card">
    <div className="card">
      <div className="card-body">
        <h5 className="mb-75">About</h5>
        <p className="card-text">
          Tart I love sugar plum I love oat cake. Sweet ⭐️ roll caramels I love
          jujubes. Topping cake wafer.
        </p>
        <div className="mt-2">
          <h5 className="mb-75">Joined:</h5>
          <p className="card-text">November 15, 2015</p>
        </div>
        <div className="mt-2">
          <h5 className="mb-75">Lives:</h5>
          <p className="card-text">New York, USA</p>
        </div>
        <div className="mt-2">
          <h5 className="mb-75">Email:</h5>
          <p className="card-text">bucketful@fiendhead.org</p>
        </div>
        <div className="mt-2">
          <h5 className="mb-50">Website:</h5>
          <p className="card-text mb-0">www.pixinvent.com</p>
        </div>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default GeneralSettings