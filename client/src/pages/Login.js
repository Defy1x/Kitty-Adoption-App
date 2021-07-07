import React, { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';

const Login = () => {
  const { login } = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    // const response = { id: 1, email, username: 'Cas' };
    // // make our api call ans save the result to response

    // login( response );
    login({email, password})
  }

  return (
    <div>
      <form>
        <input type="text" value={ email } onChange={ e => setEmail(e.target.value) } />
        <input type="password" value={ password } onChange={ e => setPassword(e.target.value) } />
        <button onClick={ handleSubmit }>Submit</button>
      </form>
    </div>
  );
};

export default Login;
