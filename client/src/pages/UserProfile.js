import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import API from '../utils/API';
import Heart from '../components/Heart/Heart'
import { useAuthContext } from '../contexts/AuthContext';

const UserProfile = () => {
  const { logout, user } = useAuthContext();

  const [results, setResults] = useState([])
  const [addFavorites, setAddFavorites] = useState(false);
  const [removeFavorites, setRemoveFavorites] = useState(false);

  useEffect(() => {
    console.log(user)
    // call on api to get Kitties
    // setResults with data
    API.getUser(user.id)
    .then(response => {
      setResults(response.data)
      console.log(response.data)
    })
  }, [])

const deleteKitty=(kittyId)=>{
  API.deleteKitty(kittyId)
  .then(response => {
    console.log(response)
    if (response.data === 1) {
      console.log("in here")
      const newKittyArray = results.kitty_owner.filter(kitty => kitty.id !== kittyId)
      setResults({...results, kitty_owner: newKittyArray})
    }
  })
}



  return(
  <div>
    <h1>HELLO this is the User Profile page</h1>
    <Link to='/'>View Recent Kitties</Link>
    <Link to='/search'>Find A Kitty</Link>
    <Link to='/postkitty'>Post A Kitty</Link>
    <Link to='/userprofile'>View My Profile</Link>
    <button onClick={ logout }>Logout</button>
    <h2>My Posted Kitties</h2>
    <ul className="list-group search-results">
      {results.kitty_owner?.map(result => (
        <li key={result.id} className="list-group-item">

          <Link to={`/kittyprofile/${result.id}`}>{result.kittyName}</Link>
          <img alt="kitty" src={result.kittyPicture} className="img-fluid" />
          <Button onClick={()=> deleteKitty(result.id)}>Delete</Button>
        </li>
      ))}
    </ul>
    <h2>My Favorite Kitties</h2>
    <ul className="list-group search-results">
      {results.favoriteKitties?.map(result => (
        <li key={result.id} className="list-group-item">

          <Link to={`/kittyprofile/${result.id}`}>{result.kittyName}</Link>
          <img alt="kitty" src={result.kittyPicture} className="img-fluid" />
          <Heart kittyId={result.id} setAddFavorites={setAddFavorites} setRemoveFavorites={setRemoveFavorites}/>
        </li>
      ))}
    </ul>
  </div>
);
}

export default UserProfile;
