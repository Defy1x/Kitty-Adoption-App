import axios from "axios";

export default {
  getKitties: function() {
    // return axios.get("http://localhost:8080/api/regions");
    return axios.get("/api/kitty");
  },

  getKitty: function() {
    // return axios.get("http://localhost:8080/api/regions");
    return axios.get("/api/kitty/${kittyId}");
  },

  getUsers: function() {
    // return axios.get("http://localhost:3001/api/user");
    return axios.get("/api/user");
  },

  getUser: function() {
    // return axios.get("http://localhost:8080/api/regions");
    return axios.get("/api/user/${userId}");
  },

};

// import axios from "axios";
//
// // Change this later once we get out of development
// const baseURL = "http://localhost:3001";
//
// export const postLogin = async loginData => {
//     try {
//         const user = await axios.post(`${baseURL}/api/users/login`, loginData);
//         return user.data;
//     } catch (error) {
//         console.log("Error with login request to API!", error);
//     }
// };
//
// export const createLogin = async newUserData => {
//     try {
//         const newUser = await axios.post(`${baseURL}/api/users/`, newUserData);
//         console.log("Successfully POSTED:", newUser);
//         return newUser.data;
//     } catch (error) {
//         console.log("Error with create login request to API!", error);
//     }
// };
//
// export const postLogout = async () => {
//     try {
//         const logout = await axios.post(`${baseURL}/api/users/logout`);
//         console.log("Successfully logged out:", logout);
//     } catch (error) {
//         console.log("Error with logout request to API!", error);
//     }
// };
//
// export const postNewPost = async formData => {
//     try {
//         const newPost = await axios.post(`${baseURL}/api/posts`, formData);
//         console.log("Successfully POSTED:", newPost);
//     } catch (error) {
//         console.log("Error with POST request to API!", error);
//     }
// };
//
// export const getPosts = async () => {
//     try {
//         const posts = await axios.get(`${baseURL}/api/posts`);
//         return posts.data;
//     } catch (error) {
//         console.log("Error with GET request to API!", error);
//     }
// };
//
// export const getSinglePost = async postId => {
//     try {
//         const singlePost = await axios.get(`${baseURL}/api/posts/post/${postId}`);
//         return singlePost.data;
//     } catch (error) {
//         console.log("Error with GET request to API!", error);
//     }
// };
//
// export const getUserPosts = async userId => {
//     try {
//         const userPosts = await axios.get(`${baseURL}/api/posts/user/${userId}`);
//         return userPosts.data;
//     } catch (error) {
//         console.log("Error with GET request to API!", error);
//     }
// };
//
// export const updatePost = async (postId, updatedData) => {
//     try {
//         const updatedPost = await axios.put(`${baseURL}/api/posts/${postId}`, updatedData);
//         return updatedPost.data;
//     } catch (error) {
//         console.log("Error with PUT request to API!", error);
//
//     }
// };
//
// export const deletePost = async postId => {
//     try {
//         const deletedPost = await axios.delete(`${baseURL}/api/posts/${postId}`);
//         return deletedPost.data;
//     } catch (error) {
//         console.log("Error with DELETE request to API!", error);
//
//     }
// };
//
// export const putComment = async commentData => {
//     try {
//         const newComment = await axios.put(`${baseURL}/api/comment/create`, commentData);
//         return newComment.data;
//     } catch (error) {
//         console.log("Error with PUT request to API!", error);
//     }
// };
//
// export const deleteComment = async commentData => {
//     try {
//         const deletedComment = await axios.put(`${baseURL}/api/comment/delete`, commentData);
//         return deletedComment.data;
//     } catch (error) {
//         console.log("Error with DELETE request to API!", error);
//     }
// };
//
// export const searchPosts = async (queryType, queryData) => {
//     try {
//         const searchResults = await axios.get(`${baseURL}/api/search/${queryType}/${queryData}`);
//         return searchResults.data;
//     } catch (error) {
//         console.log("Error with GET request to API!", error);
//     }
// };
