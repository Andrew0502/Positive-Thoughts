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
        <div className="form-group">
          <label for="full_name">Full Name</label>
          <input
            type="text"
            className="form-control"
            id="full_name"
            name="full_name"
            aria-describedby="nameHelp"
          />
          <small id="nameHelp" className="form-text text-muted">
            We'll never share your information with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label for="birthday">Birthday</label>
          <input
            type="date"
            name="birthday"
            className="form-control"
            id="birthday"
          />
        </div>
        <div className="form-group">
          <label for="phone_number">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="phone_number"
            name="phone_number"
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" for="exampleCheck1">
            Remember Me
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
>>>>>>> 9d934381e82718b23ff6ace80dd597f7937374da
};

export default Profile;
