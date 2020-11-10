import "./SignIn.css"
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

const SignIn = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
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

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    API.login({
      email: state.email,
      password: state.password,
    }).then((response) => {
        sessionStorage.setItem("currentUsers", response.data.data._id)  
    }).catch(err => {throw err});
    // if (!this.state.firstName || !this.state.lastName) {
    //   alert("Fill out your first and last name please!");
    // } else if (this.state.password.length < 6) {
    //   alert(
    //     `Choose a more secure password ${this.state.firstName} ${this.state
    //       .lastName}`
    //   );
    // } else {
    //   alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    // }

    setState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="content">
      <div className="container">
        <section className="row">
          <div className="col-sm-12">
            <h1>WELCOME TO POSITIVE THOUGHTS</h1>
          </div>
        </section>
        <section className="row" id="signin-form">
          <form className="col-sm-12 signin-form">
            <div className="form-group">
              <input
                value={state.email}
                name="email"
                onChange={handleInputChange}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />

              {/* <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="text"
                placeholder="Email"
              /> */}
              {/* <input
                value={this.state.lastName}
                name="lastName"
                onChange={this.handleInputChange}
                type="text"
                placeholder="Last Name"
              /> */}
            </div>
            <div className="form-group">
              {/* <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              /> */}
                <input
                value={state.password}
                name="password"
                onChange={handleInputChange}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                aria-describedby="passwordHelp"
                placeholder="password"
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleFormSubmit}
            >
              Login
            </button>
            &nbsp;
            <Link type="submit" className="btn btn-primary" to="/sign-up">
              Sign Up
            </Link>
          </form>
        </section>
      </div>
    </main>
  );
};

export default SignIn;
