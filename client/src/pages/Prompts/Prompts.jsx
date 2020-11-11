import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import { Link, useParams, useHistory } from "react-router-dom";
import API from "../../utils/API"; 

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
      <h1>Prompts</h1>
      <form>
        <fieldset disabled>
          <div class="form-group">
            <label for="prompts">Prompts</label>
            <div>
                {prompts && prompts.map(prompt => {
                  return (
                    <div>{prompt.message_text}</div>
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

export default Prompts;
<h1>Prompts</h1>;
