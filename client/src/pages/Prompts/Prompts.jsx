import React from "react";
import Navbar from "../../components/Navbar";

const Prompts = () => {
  return (
    <div>
      <Navbar />
      <h1>Prompts</h1>
      <form>
        <fieldset disabled>
          <div class="form-group">
            <label for="prompts">Prompts</label>
            <textarea
              class="form-control"
              id="prompts"
              placeholder="prompts"
              rows="3"
            ></textarea>
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
