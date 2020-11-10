import React from 'react';
import "./SignUp.css";

const SignUp = () => {
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
                  type="text"
                  className="form-control"
                  id="enterFirstName"
                  aria-describedby="emailHelp"
                  placeholder="First Name"
                />
              </div>
              <div className="form-group">
              <input
                  type="text"
                  className="form-control"
                  id="enterLastName"
                  aria-describedby="emailHelp"
                  placeholder="Last Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  //in twice so a user can confirm password
                  className="form-control"
                  id="examplePasswordConfirm"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="examplePhoneNumber"
                  placeholder="Phone Number"
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  //only accepts a formatted date
                  className="form-control"
                  id="userBirthdate"
                  placeholder="Enter your birthdate"
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
