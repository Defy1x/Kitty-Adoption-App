import axios from "axios";

export default {
  getKitties: async()=> {
    return axios.get("/api/kitty");
  },

  getKitty: async()=>{
    return axios.get("/api/kitty/${kittyId}");
  },

  getUsers: async()=> {
    return axios.get("/api/user");
  },

  getUser: async()=> {
    return axios.get("/api/user/${userId}");
  },

  checkAuth: async() => {
    return axios.get('/api/user/checkAuth');
  },

  loginUser: async(userData) =>{
    return axios.post('/api/user/login', userData)
  },

  signUpUser: async(userData)=>{
    return axios.post('/api/user', userData)
  },

  signOutUser:()=> {
    return axios.get('http://localhost:3001/api/user/logout')
  }
};
