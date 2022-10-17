import React, { useContext, useEffect, useState } from 'react'
import * as Icon from 'react-feather';
import { useRouter } from 'next/router';
import AuthenticationContext from '../../context/AuthenticationContext';
import { Snackbar } from '@mui/material';


const AddUser = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [email, setEmail] = useState("");
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState(null);


    const {addUser, error, clearError, success} = useContext(AuthenticationContext)

    useEffect(() =>{
        if (error) {
          setMessage(error)
          setOpen(true)
        //   clearError();
        }
        else if(success){
          setMessage(success)
          setOpen(true)
        //   clearError();
        }
      }, [error, success])
    
      const onSubmitHandler = (e) => {
          e.preventDefault()
          addUser({
              first_name:firstName,
              last_name:lastName,
              email:email,
              gender:gender 
          })
      }

      const handleClose = () => {
        setOpen(false);
      };
    




  return (
    <>
        <div className="row">
            <div className="col-lg-2 col-md-2"></div>
            <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          open={open}
          onClose={handleClose}
          autoHideDuration={6000}
          message={message}
          key={"top_center"}
        />
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
                                                <form className="validate-form mt-2 pt-50"
                                                method='POST'
                                                onSubmit={onSubmitHandler}
                                                >
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
                                                        value={firstName}
                                                        onChange={e=>setFirstName(e.target.value)}
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
                                                        value={lastName}
                                                        onChange={e=>setLastName(e.target.value)}
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
                                                        value={email}
                                                        onChange={e=>setEmail(e.target.value)}
                                                    />
                                                    </div>
                                                    <div className="col-12 col-sm-6 mb-1">
                                                    <div className="mb-1">
                                                    <label className="form-label" htmlFor="basicSelect">
                                                        Gender
                                                        </label>
                                                        <select className="form-select" id="basicSelect"
                                                        value={gender}
                                                        onChange={e=>setGender(e.target.value)}
                                                        >
                                                        <option>select your gender</option>
                                                        <option value="MALE">MALE</option>
                                                        <option value="FEMALE">FEMALE</option>
                                                        </select>
                                                    </div>
                                                    </div>
                                                    <div className="col-12">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-primary mt-1 me-1"
                                                    >
                                                        Create User
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
            <div className="col-lg-2 col-md-2"></div>
        </div>
    </>
  )
}

export default AddUser