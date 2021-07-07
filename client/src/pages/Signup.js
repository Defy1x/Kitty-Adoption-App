import React, { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';

const Signup = () => {
  const { login } = useAuthContext();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const response = { id: 1, email, username };
    // make our api call ans save the result to response

    login( response );
  }

  return (
    <div>
      <form>
        <input type="text" value={ username } onChange={ e => setUsername(e.target.value) } />
        <input type="text" value={ email } onChange={ e => setEmail(e.target.value) } />
        <input type="password" value={ password } onChange={ e => setPassword(e.target.value) } />
        <button onClick={ handleSubmit }>Submit</button>
      </form>
    </div>
  );
};

export default Signup;