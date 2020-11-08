import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import About from "./pages/About/About.jsx";
import Hotlines from "./pages/Hotlines/Hotlines.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Prompts from "./pages/Prompts/Prompts.jsx";
import SignIn from "./pages/SignIn/SignIn.jsx";
import SignUp from "./pages/SignUp/SignUp.jsx";
import Navbar from "./components/Navbar.jsx";

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
    <>
   
<Router>
<Navbar/>
    <div>
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/hotlines" component={Hotlines} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/prompts" component={Prompts} />
        <Route exact path="/" component={SignIn} />
        <Route exact path="/sign-up" component={SignUp} />
      </Switch>
    </div>
</Router>
    </>
  );
}

export default App;
