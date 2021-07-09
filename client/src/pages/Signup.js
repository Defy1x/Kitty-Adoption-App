import React, { useState } from 'react';
import SignupForm from '../components/Signup/Signup';
import { useAuthContext } from '../contexts/AuthContext';

import api from "../utils/API";

const Signup = () => {
  const { login } = useAuthContext();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const response = { id: 1, email, username: 'Cas' };
    // // make our api call ans save the result to response
    try {
      const {data} = await api.signUpUser({email, password, username});
      login(data);
    }catch(err){
        console.log("Error with create signup request to API!", err);
    }
  }

  return (
    <div>
      <form>
        <input type="text" value={ username } placeholder="username" onChange={ e => setUsername(e.target.value) } />
        <input type="text" value={ email } placeholder="email" onChange={ e => setEmail(e.target.value) } />
        <input type="password" value={ password } placeholder ="password" onChange={ e => setPassword(e.target.value) } />
        <button onClick={ handleSubmit }>Submit</button>
      </form>
      <SignupForm/>
    </div>
  );
};

export default Signup;
