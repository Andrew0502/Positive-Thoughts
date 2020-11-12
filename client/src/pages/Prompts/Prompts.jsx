import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import "../assets/main.css";
import { Link, useParams, useHistory } from "react-router-dom";
import API from "../../utils/API"; 

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
      <h1>Thoughts</h1>
      <form>
        <fieldset disabled>
          <div class="form-group">
            <label for="thoughts">Thoughts</label>
            <div>
                {thoughts && thoughts.map(Thought => {
                  return (
                    <div>{Thought.message_text}</div>
                  )
              })
            }
              </div>  
          </div>
        </fieldset>
        <button type="submit" class="btn btn-primary">
          Like
        </button>
      </form>
    </div>
  );
};

export default Thoughts;
<h1>thoughts</h1>;
