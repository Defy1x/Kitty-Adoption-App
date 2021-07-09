import React, { useState } from 'react';
import Signin from '../components/Signin/Signin';
import { useAuthContext } from '../contexts/AuthContext';
import api from "../utils/API";

const Login = () => {
  const { login } = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const response = { id: 1, email, username: 'Cas' };
    // // make our api call ans save the result to response
    try {
      const {data} = await api.loginUser({email, password});

      login(data)
    } catch(err){
        console.log("Error with create login request to API!", err);
    }
  }

  return (
    <div>
      <form>
        <input type="text" value={ email } placeholder="Your email" onChange={ e => setEmail(e.target.value) } />
        <input type="password" value={ password } placeholder="Your Password" onChange={ e => setPassword(e.target.value) } />
        <button onClick={ handleSubmit }>Submit</button>
      </form>
      <Signin/>
    </div>
  );
};

export default Login;
