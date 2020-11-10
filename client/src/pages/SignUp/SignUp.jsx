import "./SignUp.css";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

const SignUp = () => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        birthday: "",
        phoneNumber: "",
        password: "",
        passwordConfirm: "",
        email: ""
      });
      const handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;
        // Updating the input's state
        setState({...state,
          [name]: value,
        });
      };



  return (
    <main className="content">
      <div className="container">
        <section className="row">
          <div className="col-sm-12">
            <h1>Sign up</h1>
          </div>
        </section>
        <section className="row">
          <div className="col-sm-12">
            <form>
              <div className="form-group">
              <input
                  value={state.firstName}
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
                  value={state.lastName}
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
                  value={state.birthday}
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
                  value={state.phoneNumber}
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
                  value={state.password}
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
                  value={state.passwordConfirm}
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
                  value={state.email}
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
                Create Account
              </button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
