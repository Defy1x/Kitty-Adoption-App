import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { Link } from "react-router-dom";
import HomeKitty from '../components/HomeKitty/HomeKitty';
import Switch from '@material-ui/core/Switch';
import API from '../utils/API';

const Home = () => {
  const { logout, user, login } = useAuthContext();

  const [addFavorites, setAddFavorites] = useState(false);
  const [removeFavorites, setRemoveFavorites] = useState(false);
  const [results, setResults] = useState([])

  useEffect(() => {
    // call on api to get Kitties
    // setResults with data
    API.getKitties()
    .then(response => {
      setResults(response.data)
      console.log(response.data)
    })

    API.getUser()
    .then(response => {
      login(response.data)
    })

    if(addFavorites){
      setAddFavorites(false);
    }

    if(removeFavorites){
      setRemoveFavorites(false);
    }
  }, [addFavorites, removeFavorites])

  const handleLogout = async () => {
    try {
      await API.signOutUser();

      logout();
    } catch (err) {
      console.log( err);
    }
  }

 //  const handleChange = (event) => {
 //   setState({ ...state, [event.target.name]: event.target.checked });
 // };

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
      {topThreeCats.map(cat => (
      <HomeKitty cat={cat} setAddFavorites={setAddFavorites} setRemoveFavorites={setRemoveFavorites}/>
      ))}
    </ul>
  </div>
);
}

export default Home;
