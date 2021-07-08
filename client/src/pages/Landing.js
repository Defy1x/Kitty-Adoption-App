import React from 'react';
import { Link } from "react-router-dom";
import { useAuthContext } from '../contexts/AuthContext';

const Landing = () => {
  const { login } = useAuthContext();

  return(
  <div>
    <h1>HELLO this is the Landing page</h1>
    <Link to='/login'>Login</Link>
    <Link to='/signup'>Signup</Link>
  </div>
);
}
export default Landing;
