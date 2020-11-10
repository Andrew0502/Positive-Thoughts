import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useParams, useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./Edit.css";

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
      <div className="container">
        <section className="row">
          <div className="col-sm-12">
            <h1>Edit Profile</h1>
          </div>
        </section>
        <section className="row">
          <div className="col-sm-12">
            <form
            onSubmit={handleFormSubmit}>
              <div className="form-group">
              <input
                  value={user.firstName}
                  name="firstName"
                  type="text"
                  className="form-control"
                  onChange={handleInputChange}
                  id="enterFirstName"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
              <input
                  value={user.lastName}
                  name="lastName"
                  type="text"
                  className="form-control"
                  onChange={handleInputChange}
                  id="enterLastName"
                  aria-describedby="emailHelp"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <input
                  value={user.birthday}
                  name="birthday"
                  type="date"
                  className="form-control"
                  onChange={handleInputChange}
                  id="exampleBirthday"
                  aria-describedby="emailHelp"
                  placeholder="birthday"
                />
              </div>
              <div className="form-group">
                <input
                  value={user.phoneNumber}
                  name="phoneNumber"
                  type="text"
                  className="form-control"
                  onChange={handleInputChange}
                  id="examplePhoneNumber"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <input
                  value={user.password}
                  name="password"
                  type="password"
                  //in twice so a user can confirm password
                  className="form-control"
                  onChange={handleInputChange}
                  id="examplePassword"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <input
                  value={user.passwordConfirm}
                  name="passwordConfirm"
                  type="password"
                  className="form-control"
                  onChange={handleInputChange}
                  id="exampleConfirmPassword"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="form-group">
                <input
                  value={user.email}
                  name="email"
                  type="email"
                  //only accepts a formatted date
                  className="form-control"
                  onChange={handleInputChange}
                  id="userEmail"
                  placeholder="Email Address"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Update Account
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
    </body>
  );
};

export default Edit;
