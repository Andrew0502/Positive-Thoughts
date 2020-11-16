import React from "react";
import {useHistory } from "react-router-dom";
import Logo from "../pages/assets/image/new-logo.png";

const Navbar = () => {
  const history = useHistory();
  const navbarLogout = () => {
    sessionStorage.removeItem("currentUsers");
    sessionStorage.removeItem("userToken");
    history.push("/");
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark bg-transparent">
  <a class="navbar-brand" className="nav-link color" href="./about"><img src={Logo}/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" className="nav-link color" href="./profile">Profile</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" className="nav-link color" href="./prompts">Prompts</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" className="nav-link color" href="./hotlines">Hotlines</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" className="nav-link color" href="./" onClick={navbarLogout}>Sign out</a>
      </li>
    </ul>
  </div>
</nav>
</div>
  );
};

export default Navbar;
