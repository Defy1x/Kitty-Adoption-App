import React, { useState } from 'react';
import SignupForm from '../components/Signup/Signup';
import { useAuthContext } from '../contexts/AuthContext';

const Signup = () => {
  const { signup } = useAuthContext();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const response = { id: 1, email, username: 'Cas' };
    // // make our api call ans save the result to response

    // login( response );
    signup({email, password, username})
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
