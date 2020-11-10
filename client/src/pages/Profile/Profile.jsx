import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API"; 
import "./Profile.css"


function Profile() {

    const [user, setUser] = useState({})

    const {id} = useParams()

    useEffect(() =>{
        API.getUser(sessionStorage.getItem("currentUsers"))
        .then(res=>setUser(res.data))
        .catch(err=> console.log(err));
    }, [id])

    return (
    <body>
      <Navbar/>
      <main className="content">
        <div className="container">
          <section className="row">
            <div className="col-sm-12">
              <h1>Profile</h1>
            </div>
          </section>
          <section className="row profile-info">
            <div className="col-sm-6 descriptions">
              <h4>Name</h4>
            </div>            
            <div className="col-sm-6">
                <h4 className="filled-in">{user.fullName}Jamie Jones</h4>
            </div>
            <div className="col-sm-12"><hr/></div>
            <div className="col-sm-6 descriptions">
              <h4>Email</h4>
            </div>
            <div className="col-sm-6">
              <h4 className="filled-in">{user.email}jamjon94@gmail.com</h4>
            </div>
            <div className="col-sm-12"><hr/></div>
            <div className="col-sm-6 descriptions">
              <h4>Date of Birth</h4>
            </div>
            <div className="col-sm-6">
              <h4 className="filled-in">{user.birthday}August 19, 1994</h4>
            </div>
            <div className="col-sm-12"><hr/></div>
            <div className="col-sm-6 descriptions">
              <h4>Phone Number</h4>
            </div>
            <div className="col-sm-6">
              <h4 className="filled-in">{user.phoneNumber}(912)224-8562</h4>
            </div>
          </section>
          <div><br/></div>
          <section className="row">
            <div className="col-sm-4">
            <Link type="button" className="btn btn-primary edit-btn" to="/edit">
              EDIT PROFILE
            </Link>
              {/* <button type="button" className="btn btn-primary edit-btn">EDIT PROFILE</button> */}
            </div>
            <div className="col-sm-8">
            <Link type="submit" className="btn btn-primary edit-btn" to="/">
              SIGN OUT
            </Link>
            {/* <button type="button" className="btn btn-primary edit-btn">SIGN OUT</button> */}
            </div>
          </section>
          <div><br/></div>
      {/* <form className="profile-form">
        <div className="form-group">
          <label for="full_name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="full_name"
            name="full_name"
            aria-describedby="nameHelp"
          />
        </div>
        <div className="form-group">
          <label for="birthday">Birthday</label>
          <input
            type="date"
            name="birthday"
            className="form-control"
            id="birthday"
          />
        </div>
        <div className="form-group">
          <label for="phone_number">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone_number"
            name="phone_number"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form> */}
      </div>
      </main>
    </body>
  );
};

export default Profile;
