import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { Link } from "react-router-dom";
import API from '../utils/API';



const Home = () => {
  const { logout } = useAuthContext();

  const handleLogout = async () => {
    try {
      await API.signOutUser();

      logout();
    } catch (err) {
      console.log( err);
    }
  }
  return(
  <div>
    <h1>HELLO this is the home page</h1>
    <Link to='/'>View Recent Kitties</Link>
    <Link to='/search'>Find A Kitty</Link>
    <Link to='/postkitty'>Post A Kitty</Link>
    <Link to='/userprofile'>View My Profile</Link>
    <button onClick={ handleLogout }>Logout</button>
  </div>
);
}

export default Home;
