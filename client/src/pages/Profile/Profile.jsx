import React from "react";

const Profile = () => {
<<<<<<< HEAD
    return (
        <main className="content">
            <div className="container">
                <div className="row">
                    <section className="col-sm-12">
                    <h1>Profile</h1>
                    
                    </section>
                </div>
            </div>
        </main>
    );
=======
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
            name="fullName"
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
>>>>>>> 9d934381e82718b23ff6ace80dd597f7937374da
};

export default Profile;
