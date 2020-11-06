import React from "react";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="fixed-top">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h5 className="text-white h4">Collapsed content</h5>
            <span className="text-muted">Toggleable via the navbar brand.</span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./Hotlines.jsx" className="nav-link">
                  HotLines
                </Link>
              </li>
              <li className="nav-item">
                <Link to="./Prompts.jsx" className="nav-link">
                  Prompts
                </Link>
              </li>
              <li className="nav-item active">
                <Link to="./Profile.jsx" className="nav-link">
                  Profile<span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabindex="-1"
                  aria-disabled="true"
                ></a>
              </li>
              <li className="nav-item">
                <Link to="/" className="nav-link" href="./SignIn.jsx">
                  LogOut
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
