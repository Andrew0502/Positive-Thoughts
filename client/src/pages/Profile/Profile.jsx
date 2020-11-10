import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useParams } from "react-router-dom";
import API from "../../utils/API"; 

// function Detail(props) {
//     const [user, setUser] = useState({})

//     const {id} = useParams()

// useEffect(()=> {
//       API.getUser(id)
//       .then(res=>setUser(res.data))
//       .catch(err=> console.log(err)):
// }, [])

// return (
//     <h1> Welcome {{user.fullName}}!</h1>
//     <ul>
//          <li>Your Birthday is {{user.birthday}}</li>
//          <li>Your Phone Number is {{user.phoneNumber}}</li>
//          <li>Your Username is {{user.username}}</li>
//    </ul>
// );
// }

function Profile() {

    const [user, setUser] = useState({})

    const {id} = useParams()

    useEffect(() =>{
        API.getUser(sessionStorage.getItem("currentUsers"))
        .then(res=>setUser(res.data))
        .catch(err=> console.log(err));
    }, [id])

    

    

    return (
    <div>
      <Navbar/>
      <h1>Profile</h1>
      <h2>{user.fullName}</h2>
    <h2>{user.phoneNumber}</h2>
    <h2>{user.username}</h2>
    <h2>{user.birthday}</h2>
      {/* <form>
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
      </form> */}
    </div>
  );
};

export default Profile;
