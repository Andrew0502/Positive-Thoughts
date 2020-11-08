import React from "react";


const Profile = () => {
  return (
    <div>
      <h1>Profile</h1>
      <form>
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="fullName"
            name="Full Name"
            aria-describedby="nameHelp"
          />
          <small id="nameHelp" class="form-text text-muted">
            We'll never share your information with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="birthday">Birthday</label>
          <input
            type="date"
            name="birthday"
            class="form-control"
            id="birthday"
          />
        </div>
        <div class="form-group">
          <label for="phoneNumber">Phone Number</label>
          <input
            type="number"
            class="form-control"
            id="phoneNumber"
            name="phoneNumber"
          />
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Remember Me
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
