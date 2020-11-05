import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/about" component={about} />
          <Route exact path="/daily-prompts" component={Prompts} />
          <Route exact path="/hotlines" component={Hotlines} />
          <Route exact path="/" component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
