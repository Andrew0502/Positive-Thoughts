// API methods to go to the backend.
// import AXIOS and install it on front-end too
// return axios.post

// module.exports = whatever

import axios from "axios";

export default {

    getUser: function(id) {
    return axios.get("/api/user/" + id);
  },

    login: function(email) {
      return axios.post("/api/user/login", email)
    },

    signup: function(userData) {
      return axios.post("/api/user/sign-up", userData)
    },

    editUser: function(id) {
      return axios.put("/api/user/" + id);
    }
}
