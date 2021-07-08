import React from 'react';
import { Link } from "react-router-dom";
import { useAuthContext } from '../contexts/AuthContext';

const UserProfile = () => {
  const { logout } = useAuthContext();
  return(
  <div>
    <h1>HELLO this is the User Profile page</h1>
    <Link to='/'>View Recent Kitties</Link>
    <Link to='/search'>Find A Kitty</Link>
    <Link to='/postkitty'>Post A Kitty</Link>
    <Link to='/userprofile'>View My Profile</Link>
    <button onClick={ logout }>Logout</button>
  </div>
);
}

export default UserProfile;
