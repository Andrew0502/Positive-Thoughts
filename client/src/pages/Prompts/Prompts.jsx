import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "../assets/main.css";
import { Link, useParams, useHistory } from "react-router-dom";
import API from "../../utils/API"; 
import "./Prompts.css";

function Thoughts () {

  const [thoughts, setThoughts] = useState([])
  const history = useHistory();

  useEffect(() =>{
    const id = sessionStorage.getItem("currentUsers")
    console.log(id);
    if (id) {
      API.getPrompts()
      .then(res=>setThoughts(res.data.allThoughts))
      .catch(err=> console.log(err));
    }
      else {
        history.push("/")
      }
  }, [])


  return (
    <div>
      <Navbar />
      <div><br/></div>
            <div id="prompts">
                {thoughts && thoughts.map(Thought => {
                  return (
                    <li className="list-group-item" id="prompt-list">{Thought.message_text}</li>
                  )
              })
            }
              </div>  
          </div>
  );
};

export default Thoughts;
