import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';



const Home = () => {
  const { logout } = useAuthContext();
  return(
  <div>
    <h1>HELLO this is the home page</h1>
    <button onClick={ logout }>Logout</button>
  </div>
);
}

export default Home;
