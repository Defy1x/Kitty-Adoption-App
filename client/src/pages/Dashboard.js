import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';

const Dashboard = () => {
  const { logout } = useAuthContext();

  return (
    <div>
      <h1>Hey There!</h1>
      <button onClick={ logout }>Logout</button>
    </div>
  );
};

export default Dashboard;
