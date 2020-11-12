import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "../assets/main.css";
import { Link, useParams, useHistory } from "react-router-dom";
import API from "../../utils/API"; 
import "./Prompts.css";

function Prompts () {

  const [prompts, setPrompts] = useState([])
  const history = useHistory();

  useEffect(() =>{
    const id = sessionStorage.getItem("currentUsers")
    console.log(id);
    if (id) {
      API.getPrompts()
      .then(res=>setPrompts(res.data.allPrompts))
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
                {prompts && prompts.map(prompt => {
                  return (
                    <h3>{prompt.message_text}</h3>
                  )
              })
            }
              </div>  
          </div>
  );
};

export default Prompts;
<h1>Prompts</h1>;
