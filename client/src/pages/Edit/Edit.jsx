import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useParams, useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./Edit.css";
import "../assets/main.css"

const Edit = () => {
  const [user, setUser] = useState({});

  const { id } = useParams();

  
  const history = useHistory();
  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    let value = event.target.value;
    const name = event.target.name;
    // Updating the input's state
    setUser({...user,
      [name]: value,
    });
  };


  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    API.editUser(user._id, user).then((response) => {   
        sessionStorage.setItem("currentUsers", response.data.data._id)
        //using the useHistory hook to redirect without refreshing
        history.push("/profile")
        setUser(response.data.data);
        console.log(response.data.data);
    }).catch(err => {throw err});
  };


  useEffect(() => {
    API.getUser(sessionStorage.getItem("currentUsers"))
      .then((res) => setUser(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <body>
      <Navbar />
      <main className="content">
        <div className="container cover-container">
          <section className="row">
            <div className="col-sm-12">
              <h1 className="heading">Edit Profile</h1>
            </div>
          </section>
          <div><br/></div>
          <section className="row">
            <form className="col-sm-6" onSubmit={handleFormSubmit}>
                  <input value={user.firstName}
                  name="firstName" type="text"
                  className="form-control edit-inputs"
                  onChange={handleInputChange}
                  id="enterFirstName"
                  aria-describedby="emailHelp"
                  placeholder="First Name"/>
            </form>
            <form className="col-sm-6" onSubmit={handleFormSubmit}>
              <input
                  value={user.lastName}
                  name="lastName"
                  type="text"
                  className="form-control edit-inputs"
                  onChange={handleInputChange}
                  id="enterLastName"
                  aria-describedby="emailHelp"
                  placeholder="Last Name"
                />
            </form>
            <div className="col-sm-12"><hr/></div>
            <form className="col-sm-6" onSubmit={handleFormSubmit}>
            <input
                  value={user.birthday}
                  name="birthday"
                  type="date"
                  className="form-control edit-inputs"
                  onChange={handleInputChange}
                  id="exampleBirthday"
                  aria-describedby="emailHelp"
                  placeholder="birthday"
                />
            </form>
            <form className="col-sm-6" onSubmit={handleFormSubmit}>
            <input
                  value={user.phoneNumber}
                  name="phoneNumber"
                  type="text"
                  className="form-control edit-inputs"
                  onChange={handleInputChange}
                  id="examplePhoneNumber"
                  placeholder="Phone Number"
                />
            </form>
            <div className="col-sm-12"><hr/></div>
            <form className="col-sm-6" onSubmit={handleFormSubmit}>
            <input
                  value={user.password}
                  name="password"
                  type="password"
                  className="form-control edit-inputs"
                  onChange={handleInputChange}
                  id="examplePassword"
                  placeholder="Password"
                />
            </form>
            <form className="col-sm-6" onSubmit={handleFormSubmit}>
            <input
                  value={user.email}
                  name="email"
                  type="email"
                  className="form-control edit-inputs"
                  onChange={handleInputChange}
                  id="userEmail"
                  placeholder="Email Address"
                />
            </form>
            </section>
            <div><br/></div>
            <section className="row">
              <div className="col-sm-6">
            <Link type="submit" className="btn btn-primary edit-btn button" to="/profile">
              CANCEL
            </Link>
            </div>
            <div className="col-sm-6">
              <button type="submit" className="btn btn-primary edit-btn button">
                UPDATE ACCOUNT
              </button>
            </div>
          </section>
        </div>
      </main>
    </body>
  );
};

export default Edit;
