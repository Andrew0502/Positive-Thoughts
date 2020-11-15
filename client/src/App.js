import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import About from "./pages/About/About.jsx";
import Hotlines from "./pages/Hotlines/Hotlines.jsx";
import HotlinesHelp from "./pages/Hotlines/HotlinesAlt.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Prompts from "./pages/Prompts/Prompts.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Edit from "./pages/Edit/Edit.jsx";
import "./Background.css";

function App() {
  useEffect(() => {
    console.log("Make an API call");
    axios
      .get("/api/config")
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/hotlines" component={Hotlines} />
            <Route exact path="/hotlines-help" component={HotlinesHelp} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/edit" component={Edit} />
            <Route exact path="/prompts" component={Prompts} />
            <Route exact path="/" component={SignIn} />
            <Route exact path="/sign-up" component={SignUp} />
          </Switch>
        </div>
      </Router>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
    </div>
  );
}

export default App;
