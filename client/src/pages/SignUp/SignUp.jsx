import "./SignUp.css";
import React, { useEffect, useState } from "react";
import { Link, useHistory} from "react-router-dom";
import API from "../../utils/API";
import "../assets/main.css"

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
    //this is a react router hook, importing from react-router
    const history = useHistory();

    useEffect(() =>{
      const id = sessionStorage.getItem("currentUsers")
      if (id) {
       history.push("/profile")
      }
    }, [history])

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
        if (
          state.password !== state.passwordConfirm
        ) {
          alert("Passwords do not match, please re-enter");
          return 
        //can do other if statements here with first name required, etc.
        }
        if (!state.firstName) {
          alert("All fields required.  Please enter your first name");
          return
        }
        if (!state.lastName) {
          alert("All fields required.  Please enter your last name");
          return
        }
        if (!state.birthday) {
          alert("All fields required.  Please enter your date of birth so that we can remember your birthday!");
          return
        }
        if (!state.phoneNumber) {
          alert("All fields required.  Please enter your phone number so that we can text you Positive Thoughts!");
          return
        }
        if (!state.password) {
          alert("Please enter a password");
          return
        }
        if (!state.email) {
          alert("Please confirm your email address so that we can send you Positive Thoughts!");
          return
        }
        API.signup(state).then((response) => {   
            sessionStorage.setItem("currentUsers", response.data.data._id)
            //using the useHistory hook to redirect without refreshing
            history.push("/profile")
        }).catch(err => {throw err});
        setState({
          firstName: "",
          lastName: "",
          birthday: "",
          phoneNumber: "",
          password: "",
          passwordConfirm: "",
          email: ""
        });
      };



  return (
    <main className="content">
      <div className="container sign-in-container">
        <section className="row">
          <div className="col-sm-12">
            <h1>Sign up</h1>
          </div>
        </section>
        <section className="row">
          <div className="col-sm-12">
            <form
              onSubmit={handleFormSubmit}>
              <div className="form-group">
              <input
                  value={state.firstName}
                  name="firstName"
                  type="text"
                  className="form-control sign-in-input"
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
                  className="form-control sign-in-input"
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
                  className="form-control sign-in-input"
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
                  className="form-control sign-in-input"
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
                  className="form-control sign-in-input"
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
                  className="form-control sign-in-input"
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
                  className="form-control sign-in-input"
                  onChange={handleInputChange}
                  id="userEmail"
                  placeholder="Email Address"
                />
              </div>
              <button type="submit" className="btn btn-primary button">
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
