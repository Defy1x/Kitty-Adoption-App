import axios from "axios";

export default {
  getKitties: async()=> {
    return axios.get("/api/kitty");
  },

  getKitty: async(kittyId)=>{
    return axios.get(`/api/kitty/id/${kittyId}`);
  },

  postKitty: async(kittyData)=>{
    return axios.post('/api/kitty', kittyData);
  },

  getKittiesByLocation: async(location) => {
    return axios.get(`/api/kitty/location/${location}`)
  },

  getUsers: async()=> {
    return axios.get("/api/user");
  },

  getUser: async(userId)=> {
    return axios.get(`/api/user/${userId}`);
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
    return axios.post('/api/user/logout')
  }
};
