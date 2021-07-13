import React, { useState, useEffect } from "react";
import  { useParams, useHistory, Link } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext';
import KittyProfileCard from '../components/KittyProfileCard/KittyProfileCard';
import API from '../utils/API';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../components/Main/Main';
import HomeLogo from '../components/Logo/HomeLogo/HomeLogo';
import Nav from '../components/Nav/Nav';
import Button from '@material-ui/core/Button';


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
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={7}>
          <Link to='/'><HomeLogo/></Link>
        </Grid>
            <Grid item xs={12} sm={5}>
            <Nav/>
          </Grid>
        </Grid>
          <button onClick={ logout }>Logout</button>
        <h2 className="HomeTitle">My Posted Kitties</h2>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
    <ul className="list-group search-results">
      {results.kitty_owner?.map(result => (
        <li key={result.id} className="list-group-item">

          <Link to={`/kittyprofile/${result.id}`}>{result.kittyName}</Link>
          <img alt="kitty" src={result.kittyPicture} className="img-fluid" />
          <Button onClick={()=> deleteKitty(result.id)}>Delete</Button>
        </li>
      ))}
    </ul>
    <h2 className="HomeTitle">My Favorite Kitties</h2>
    <div className="searchFlexContainer">
    <ul className="list-group search-results">
      {results.favoriteKitties?.map(result => (
        <li key={result.id} className="list-group-item">
          <KittyProfileCard cat={result} setAddFavorites={setAddFavorites} setRemoveFavorites={setRemoveFavorites}/>
        </li>
      ))}
      </ul>
    </div>
    </Grid>
  </Grid>
  </main>
</Container>
</React.Fragment>
);
}
export default UserProfile;
