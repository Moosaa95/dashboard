/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PersonalSettings = () => {
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
            <div className="col-12">
              <ul className="nav nav-pills mb-2">
                {/* account */}
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    href="/personal-settings"
                  >
                    <i data-feather="user" className="font-medium-3 me-50" />
                    <span className="fw-bold">Personal Profile</span>
                  </a>
                </li>
                {/* security */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/organization-settings"
                  >
                    <i data-feather="lock" className="font-medium-3 me-50" />
                    <span className="fw-bold">Organization</span>
                  </a>
                </li>
                {/* billing and plans */}
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="/general-settings"
                  >
                    <i
                      data-feather="bookmark"
                      className="font-medium-3 me-50"
                    />
                    <span className="fw-bold">General Settings</span>
                  </a>
                </li>
              </ul>
              {/* profile */}
              <div className="card">
                <div className="card-header border-bottom">
                  <h4 className="card-title">Profile Details</h4>
                </div>
                <div className="card-body py-2 my-25">
                  {/* header section */}
                  <div className="d-flex">
                    <a href="#" className="me-25">
                      <img
                        src="./images/portrait/small/avatar-s-11.jpg"
                        id="account-upload-img"
                        className="uploadedAvatar rounded me-50"
                        alt="profile image"
                        height={100}
                        width={100}
                      />
                    </a>
                    {/* upload and reset button */}
                    <div className="d-flex align-items-end mt-75 ms-1">
                      <div>
                        <label
                          htmlFor="account-upload"
                          className="btn btn-sm btn-primary mb-75 me-75"
                        >
                          Upload
                        </label>
                        <input
                          type="file"
                          id="account-upload"
                          hidden=""
                          accept="image/*"
                        />
                        <button
                          type="button"
                          id="account-reset"
                          className="btn btn-sm btn-outline-secondary mb-75"
                        >
                          Reset
                        </button>
                        <p className="mb-0">
                          Allowed file types: png, jpg, jpeg.
                        </p>
                      </div>
                    </div>
                    {/*/ upload and reset button */}
                  </div>
                  {/*/ header section */}
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
                        <label
                          className="form-label"
                          htmlFor="accountOrganization"
                        >
                          Organization
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
                      <div className="col-12 col-sm-6 mb-1">
                        <label className="form-label" htmlFor="accountAddress">
                          Address
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="accountAddress"
                          name="address"
                          placeholder="Your Address"
                        />
                      </div>
                      <div className="col-12 col-sm-6 mb-1">
                        <label className="form-label" htmlFor="country">
                          Country
                        </label>
                        <select id="country" className="select2 form-select">
                          <option value="">Select Country</option>
                          <option value="Australia">Australia</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Canada">Canada</option>
                          <option value="China">China</option>
                          <option value="France">France</option>
                          <option value="Germany">Germany</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Japan">Japan</option>
                          <option value="Korea">Korea, Republic of</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Russia">Russian Federation</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                        </select>
                      </div>
                      <div className="col-12 col-sm-6 mb-1">
                        <label className="form-label" htmlFor="country">
                          State
                        </label>
                        <select id="country" className="select2 form-select">
                          <option value="">Select State</option>
                          <option value="Australia">Australia</option>
                          <option value="Bangladesh">Bangladesh</option>
                          <option value="Belarus">Belarus</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Canada">Canada</option>
                          <option value="China">China</option>
                          <option value="France">France</option>
                          <option value="Germany">Germany</option>
                          <option value="India">India</option>
                          <option value="Indonesia">Indonesia</option>
                          <option value="Israel">Israel</option>
                          <option value="Italy">Italy</option>
                          <option value="Japan">Japan</option>
                          <option value="Korea">Korea, Republic of</option>
                          <option value="Mexico">Mexico</option>
                          <option value="Philippines">Philippines</option>
                          <option value="Russia">Russian Federation</option>
                          <option value="South Africa">South Africa</option>
                          <option value="Thailand">Thailand</option>
                          <option value="Turkey">Turkey</option>
                          <option value="Ukraine">Ukraine</option>
                          <option value="United Arab Emirates">
                            United Arab Emirates
                          </option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="United States">United States</option>
                        </select>
                      </div>
                      <div className="col-12 col-sm-6 mb-1">
                        <label className="form-label" htmlFor="accountZipCode">
                          Zip Code
                        </label>
                        <input
                          type="text"
                          className="form-control account-zip-code"
                          id="accountZipCode"
                          name="zipCode"
                          placeholder="Code"
                          maxLength={6}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary mt-1 me-1"
                        >
                          Save changes
                        </button>
                        <button
                          type="reset"
                          className="btn btn-outline-secondary mt-1"
                        >
                          Discard
                        </button>
                      </div>
                    </div>
                  </form>
                  {/*/ form */}
                </div>
              </div>
              {/* deactivate account  */}
             
              {/*/ profile */}
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

export default PersonalSettings