import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API"; 
import "./Profile.css"


function Profile() {

    const [user, setUser] = useState({})

    const {id} = useParams()

    useEffect(() =>{
        API.getUser("5fa867e13f5a6825d017745a")
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
          <section className="profile-info">
            <h2>{user.fullName}</h2>
            <h2>{user.phoneNumber}</h2>
            <h2>{user.username}</h2>
            <h2>{user.birthday}</h2>
            <h2>{user.email}</h2>
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
          <small id="nameHelp" className="form-text text-muted">
            We'll never share your information with anyone else.
          </small>
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
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Remember Me
          </label>
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
