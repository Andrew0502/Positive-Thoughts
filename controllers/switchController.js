import React from "react";
import { db } from "../models/UserModel";
import thoughtJob from "../server";

function offOn() {
  this.setState({ message_on: !this.state.message_on });
  // if(db.User.find(onclick) === true) {
  if (db.User.message_on === false) {
    this.state = { message_on: false };
    thoughtJob.stop();
    console.log("Off");
  } else {
    this.state = { message_on: true};
    thoughtJob.start();
    console.log("On");
  }
}

export default switchController;

// constructor(props) {
//     super(props);
//     this.off = this.off.bind(this);

// import React, { useState } from 'react';

// function offOn() {
//   const [count, setCount] = useState(0);
//   return (
//     <button onClick={() => setCount(1)}>
//       Click me!
//     </button>
//   );
// }

// export default App;
