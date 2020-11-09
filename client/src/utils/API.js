// API methods to go to the backend.
// import AXIOS and install it on front-end too
// return axios.post

// module.exports = whatever

import axios from "axios";

export default {
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
};
