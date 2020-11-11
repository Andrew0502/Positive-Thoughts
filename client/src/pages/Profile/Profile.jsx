import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useParams, useHistory } from "react-router-dom";
import API from "../../utils/API"; 
import "./Profile.css"


function Profile() {

    const [user, setUser] = useState({})

    const {id} = useParams()

    const history = useHistory();

    useEffect(() =>{
      const id = sessionStorage.getItem("currentUsers")
        API.getUser(id)
        .then(res=>setUser(res.data.data))
        .catch(err=> console.log(err));
    }, [])

    const handleDelete = () => {
      const id = sessionStorage.getItem("currentUsers")
        API.deleteUser(id)
          .then(res=>{sessionStorage.removeItem("currentUsers")
            history.push("/")})
          .catch(err=> console.log(err));
    }

    const handleLogout = () => {
      sessionStorage.removeItem("currentUsers")
      history.push("/")
    }

    

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
                <h4 className="filled-in">{user.firstName} {user.lastName}</h4>
            </div>
            <div className="col-sm-12"><hr/></div>
            <div className="col-sm-6 descriptions">
              <h4>Email</h4>
            </div>
            <div className="col-sm-6">
              <h4 className="filled-in">{user.email}</h4>
            </div>
            <div className="col-sm-12"><hr/></div>
            <div className="col-sm-6 descriptions">
              <h4>Date of Birth</h4>
            </div>
            <div className="col-sm-6">
              <h4 className="filled-in">{user.birthday}</h4>
            </div>
            <div className="col-sm-12"><hr/></div>
            <div className="col-sm-6 descriptions">
              <h4>Phone Number</h4>
            </div>
            <div className="col-sm-6">
              <h4 className="filled-in">{user.phoneNumber}</h4>
            </div>
          </section>
          <div><br/></div>
          <section className="row">
            <div className="col-sm-4">
            <Link type="button" className="btn btn-primary edit-btn" to="/edit">
              EDIT PROFILE
            </Link>
            </div>
            <div className="col-sm-8">
            <button type="submit" className="btn btn-primary edit-btn" onClick={handleDelete}>
              DELETE ACCOUNT
            </button>
            </div>
            <div className="col-sm-8">
            <button type="submit" className="btn btn-primary edit-btn" onClick={handleLogout}>
              SIGN OUT
            </button>
            </div>
          </section>
          <div><br/></div>
      </div>
      </main>
    </body>
  );
};

export default Profile;
