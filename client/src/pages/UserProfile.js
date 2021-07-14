import React, { useState, useEffect } from "react";
import  { useParams, useHistory, Link } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext';
import KittyProfileCard from '../components/KittyProfileCard/KittyProfileCard';
import KittyDeleteCard from '../components/KittyDeleteCard/KittyDeleteCard';
import API from '../utils/API';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../components/Main/Main';
import HomeLogo from '../components/Logo/HomeLogo/HomeLogo';
import Nav from '../components/Nav/Nav';
import Button from '@material-ui/core/Button';


const UserProfile = () => {
  const { logout, login, user } = useAuthContext();

const deleteKitty=(kittyId)=>{
  API.deleteKitty(kittyId)
  .then(response => {
    console.log(response)
    if (response.data === 1) {
      console.log("in here")
      const newKittyArray = user.kitty_owner.filter(kitty => kitty.id !== kittyId)
      API.getUser(user.id)
      .then(response => {
        login(response.data)
      })
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
        <h2 className="UserTitle"><button className="logOutBtn" onClick={ logout }>Logout of {user.username}'s Account</button></h2>

        <Grid container spacing={0}>
          <Grid item xs={12} sm={12}>
            <h2 className="HomeTitle">My Posted Kitties</h2>
            {user.kitty_owner?.length > 0 ? (
              <ul className="list-group search-results">
                {user.kitty_owner?.map(result => (
              <li key={result.id} className="list-group-item">
                  <KittyDeleteCard cat={result} deleteKitty={deleteKitty}/>
                  </li>
                ))}
              </ul>
            ): <h3 className="ResultsText">No kitties to display! Post some kitties for adoption!</h3>
          }

        <h2 className="HomeTitle">My Favorite Kitties</h2>
        {user.favoriteKitties?.length > 0 ? (
          <div className="searchFlexContainer">
          <ul className="list-group search-results">
            {user.favoriteKitties?.map(result => (
              <li key={result.id} className="list-group-item">
                <KittyProfileCard cat={result}/>
              </li>
            ))}
            </ul>
        </div>
      ) : <h2 className="ResultsText">No favorite kitties to display</h2>
        }
    </Grid>
  </Grid>
  </main>
</Container>
</React.Fragment>
);
}
export default UserProfile;
