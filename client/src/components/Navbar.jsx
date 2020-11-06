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
                <a className="nav-link" href="./About.jsx">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./HotLines.jsx">
                  HotLines
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="./Prompts.jsx">
                  Prompts
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="./profile.jsx">
                  Profile<span className="sr-only">(current)</span>
                </a>
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
                <a className="nav-link" href="./SignIn.jsx">
                  LogOut
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
