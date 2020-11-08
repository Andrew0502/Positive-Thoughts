import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Hotlines from "../../src/pages/Hotlines/Hotlines";
import About from "../pages/About/About";
import Profile from "../pages/Profile/Profile";
import Prompts from "../pages/Prompts/Prompts";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <Link to="./profile" className="nav-link">
              Profile
            </Link>
            <Link to="./prompts" className="nav-link">
              Prompts
            </Link>
            <Link to="./hotlines" className="nav-link">
              HotLines
            </Link>
            <Link to="./logout" className="nav-link">
              Log Out
            </Link>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
            <Link to="./About" className="nav-link">
              Positive Thoughts
            </Link>
            <Router>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* <ul className="navbar-nav ml-auto"> */}
              {/* <li className="nav-item">
                  <Link to="/" className="nav-link">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./Hotlines" className="nav-link">
                    HotLines
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="./Prompts" className="nav-link">
                    Prompts
                  </Link>
                </li>
                <li className="nav-item active">
                  <Link to="./Profile" className="nav-link">
                    Profile<span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link" href="./SignIn">
                    LogOut
                  </Link>
                </li> */}
              <Switch>
                <Route exact path="./" component={SignIn} />
                <Route exact path="./about" component={About} />
                <Route exact path="./hotlines" component={Hotlines} />
                <Route exact path="./profile" component={Profile} />
                <Route exact path="./prompts" component={Prompts} />
                <Route exact path="./sign-up" component={SignUp} />
              </Switch>
              {/* </ul> */}
            </div>
          </Router>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
