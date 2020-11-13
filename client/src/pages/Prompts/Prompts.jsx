import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "../assets/main.css";
import { Link, useParams, useHistory } from "react-router-dom";
import API from "../../utils/API";
import "./Prompts.css";

function Thoughts() {
  const [thoughts, setThoughts] = useState([]);
  const history = useHistory();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const id = sessionStorage.getItem("currentUsers");
    console.log(id);
    if (id) {
      API.getPrompts()
        .then((res) => setThoughts(res.data.allThoughts))
        .catch((err) => console.log(err));
    } else {
      history.push("/");
    }
  }, []);




  function offOn() {
    // this.setState({ message_on: !this.state.message_on });
    // if(db.User.find(onclick) === true) {
    if (active) {
      setActive(false);
      API.togglePrompts(null).then(res => {
        console.log(res);
      }).catch(err => {
        console.log(err);
      })
      console.log("Off");
    } else {
        setActive (true);
        API.togglePrompts(1).then(res => {
          console.log(res);
        }).catch(err => {
          console.log(err);
        })
      console.log("On");
    }
  }





  return (
    <div>
      <Navbar />
      <div>
        <br />
      </div>
      <div id="prompts">
        {thoughts &&
          thoughts.map((Thought) => {
            return (
              <li className="list-group-item" id="prompt-list">
                {Thought.message_text}
              </li>
            );
          })}
      </div>
      <div className="custom-control custom-switch" value="true">
        <input
          type="checkbox"
          className="custom-control-input"
          onClick={offOn}
          active={active}
          id="customSwitch1"
        />
        <label className="custom-control-label" for="customSwitch1">
          Toggle this switch element
        </label>
      </div>
    </div>
  );
}

export default Thoughts;
