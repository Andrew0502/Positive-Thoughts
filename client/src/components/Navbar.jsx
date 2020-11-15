import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <a class="navbar-brand" className="nav-link color" href="./about">Positive Thoughts</a>
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
    </ul>
  </div>
</nav>
</div>
  );
};

export default Navbar;
