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
            <div className="col-sm-6">
              <h4>Full Name</h4>
            </div>            
            <div className="col-sm-6">
                <h4>{user.fullName}</h4>
            </div>
            <div><hr/></div>
            <div className="col-sm-6">
              <h4>Phone Number</h4>
            </div>
            <div className="col-sm-6">
              <h4>{user.phoneNumber}</h4>
            </div>
            <div className="col-sm-6">
              <h4>Date of Birth</h4>
            </div>
            <div className="col-sm-6">
              <h4>{user.birthday}</h4>
            </div>
            <div><hr/></div>
            <div className="col-sm-6">
              <h4>Email</h4>
            </div>
            <div className="col-sm-6">
              <h4>{user.email}</h4>
            </div>
          </section>
          <h5>Edit Info</h5>
          <button type="button" className="btn btn-primary">Edit</button>
      <form className="profile-form">
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
      </form>
      </div>
      </main>
    </body>
  );
};

export default Profile;
