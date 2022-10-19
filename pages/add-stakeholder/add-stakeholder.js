import React from 'react'
import * as Icon from 'react-feather';

const AddStakeholder = () => {
  return (
    <>
        <div className="row">
            <div className="col-lg-2 col-md-2"></div>
            <div className="col-lg-8 col-md-8">
                <div className="app-content content ">
                    <div className="content-wrapper container-xxl p-0">
                        <div className="content-body">
                            <div className='row'>
                            <div className="card">
                                    <div className="card-header">
                                    <h4 className="card-title">Add New User</h4>
                                    </div>
                                    <div className="card-body">
                                    
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
                                                        <label className="d-block form-label">Stakeholder Type</label>
                                                        <select class="select2 form-select" id="select2-basic">
                                                            <option value="AK">Start-Up</option>
                                                            <option value="HI">SME's</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 mb-1">
                                                        <div className="mb-1">
                                                        <label className="d-block form-label">Business Sector</label>
                                                        <select class="select2 form-select" id="select2-basic">
                                                            <option value="AK">Start-Up</option>
                                                            <option value="HI">SME's</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 mb-1">
                                                    <label className="form-label" htmlFor="accountLastName">
                                                        Job Title
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="jobTitle"
                                                        name="jobTitle"
                                                        placeholder="Farmer"
                                                        data-msg="Please enter Job Title"
                                                    />
                                                    </div>
                                                    <div className="col-12 col-sm-6 mb-1">
                                                    <label className="form-label" htmlFor="accountLastName">
                                                        Phone Number
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="phoneNumber"
                                                        name="phoneNumber"
                                                        placeholder="09095364363"
                                                        data-msg="Please enter phone number"
                                                    />
                                                    </div>
                                                    <div className="col-12 col-sm-6 mb-1">
                                                        <div className="mb-1">
                                                        <label className="d-block form-label">City</label>
                                                        <select class="select2 form-select" id="select2-basic">
                                                            <option value="AK">Abuja</option>
                                                            <option value="HI">SME's</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 mb-1">
                                                        <div className="mb-1">
                                                        <label className="d-block form-label">State</label>
                                                        <select class="select2 form-select" id="select2-basic">
                                                            <option value="Lagos">Lagos</option>
                                                            <option value="FCT">FCT</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 mb-1">
                                                        <div className="mb-1">
                                                        <label className="d-block form-label">Country</label>
                                                        <select class="select2 form-select" id="select2-basic">
                                                            <option value="Nigeria">Nigeria</option>
                                                            <option value="Ghana">Ghana</option>
                                                        </select>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-sm-6 mb-1">
                                                    <label className="form-label" htmlFor="accountLastName">
                                                        Postal Code
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="postalCode"
                                                        name="postalCode"
                                                        placeholder="545243"
                                                        data-msg="Please enter your Postal Code"
                                                    />
                                                    <div className="col-12 col-sm-6 mb-1">
                                                    <label className="form-label" htmlFor="accountLastName">
                                                        Interest
                                                    </label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="interest"
                                                        name="Interest"
                                                        placeholder="Music"
                                                        data-msg="Please enter your interest"
                                                    />

                                                    

                                                    <div className="col-12">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary mt-1 me-1"
                                                    >
                                                        Create User
                                                    </button>
                                                    </div>
                                                </div>
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
            <div className="col-lg-2 col-md-2"></div>
        </div>
    </>
  )
}

export default AddStakeholder