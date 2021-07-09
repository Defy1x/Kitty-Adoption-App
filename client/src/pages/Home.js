import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { Link } from "react-router-dom";
import API from '../utils/API';

const Home = () => {
  const { logout } = useAuthContext();

  const [results, setResults] = useState([])

  useEffect(() => {
    // call on api to get Kitties
    // setResults with data
    API.getKitties()
    .then(response => {
      setResults(response.data)
    })
  }, [])

  const handleLogout = async () => {
    try {
      await API.signOutUser();

      logout();
    } catch (err) {
      console.log( err);
    }
  }

  const topThreeCats = results.slice(Math.max(results.length - 3,0))

  return(
  <div>
    <h1>HELLO this is the home page</h1>
    <Link to='/'>View Recent Kitties</Link>
    <Link to='/search'>Find A Kitty</Link>
    <Link to='/postkitty'>Post A Kitty</Link>
    <Link to='/userprofile'>View My Profile</Link>
    <button onClick={ handleLogout }>Logout</button>

    <ul className="list-group search-results">
      {topThreeCats.map(result => (
        <li key={result.id} className="list-group-item">
          <Link to={`/kittyprofile/${result.id}`}>{result.kittyName}</Link>
          <img alt="kitty" src={result.kittyPicture} className="img-fluid" />
        </li>
      ))}
    </ul>
  </div>
);
}

export default Home;
