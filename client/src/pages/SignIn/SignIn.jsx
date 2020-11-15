import "./SignIn.css"
import React, { useEffect, useState } from "react";
import { Link , useHistory} from "react-router-dom";
import API from "../../utils/API";
import "../assets/main.css"


const SignIn = () => {
    const history = useHistory();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

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
    API.login({
      email: state.email,
      password: state.password,
    }).then((response) => {
        sessionStorage.setItem("currentUsers", response.data.data.foundUser._id)  
        sessionStorage.setItem("userToken", response.data.data.token)
        history.push("/profile")
    }).catch(err => {throw err});
    setState({
      email: "",
      password: "",
    });
  };

  return (
    <main className="content" id="sign-in-content">
      <div className="container sign-in-container">
        <section className="row">
          <div className="col-sm-12">
            <h1 className="welcome">Welcome to Positive Thoughts</h1>
          </div>
        </section>
        <div><br/></div>
        <section className="row">
          <form className="col-sm-12" id="sign-in-form">
            <div className="form-group">
              <input
                value={state.email}
                name="email"
                onChange={handleInputChange}
                type="email"
                className="form-control sign-in-input"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
                <input
                value={state.password}
                name="password"
                onChange={handleInputChange}
                type="password"
                className="form-control sign-in-input"
                id="exampleInputPassword1"
                aria-describedby="passwordHelp"
                placeholder="password"
              />
            </div>
          <div id="sign-in-btns">
            <button
              type="submit"
              className="btn btn-primary button sign-in-btn"
              onClick={handleFormSubmit}
            >Login
            </button>
            &nbsp;
            <Link type="submit" className="btn btn-primary button sign-in-btn" to="/sign-up">
              Sign Up
            </Link>
            </div>
            </form>
        </section>
      </div>
      <div><br/></div>
      <div><br/></div>
      <h3 id="seek-help" style={{textAlign:"center"}}>It's never a bad time to seek help</h3>
      <div id="hotlinebutton">
      <Link id="hotlinelink" type="submit" className="btn btn-primary edit-btn button link-btn" to="/hotlines-help">
                Hotlines
              </Link>
      </div>
    </main>
  );
};

export default SignIn;
