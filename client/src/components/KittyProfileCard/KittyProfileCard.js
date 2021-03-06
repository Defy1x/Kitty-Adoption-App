import React from 'react';
import { Link } from "react-router-dom";
import Heart from '../Heart/Heart';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "./style.css";

const KittyProfileCard = ({cat}) => {

  const openEmail = () =>{
    window.open(`mailto:admin@zencat.com?subject=${encodeURIComponent(`I am in interested in adopting ${cat.kittyName}!`)}`)
  }

  return(
    <Container maxWidth="lg" className="KittyContainer">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={3}   direction="column"
          justifyContent="center"
          alignItems="center">
          <li key={cat.id} className="kitty-results">
          <Link to={`/kittyprofile/${cat.id}`}><img className="KittyCardImg" alt="kitty" src={cat.kittyPicture} /></Link>
            <button className="kittyBtn" onClick={openEmail}>Adopt {cat.kittyName}!</button>
          </li>
          </Grid>
          <Grid item xs={12} sm={4}>
            <h4 className="KittyCardDescTop">Kitty's Name: {cat.kittyName}</h4>
            <h4 className="KittyCardDesc">Breed: {cat.kittyBreed}</h4>
            <h4 className="KittyCardDesc">Color: {cat.kittyColor}</h4>
            <h4 className="KittyCardDesc">Sex: {cat.kittyGender}</h4>
            <h4 className="KittyCardDesc">Good with Pets: {cat.kittyPets}</h4>
          </Grid>
          <Grid item xs={12} sm={3}>
            <h4 className="KittyCardDescTop">Location: {cat.kittyLocation}</h4>
            <h4 className="KittyCardDesc">Weight: {cat.kittyWeight}</h4>
            <h4 className="KittyCardDesc">Personality: {cat.kittyPersonality}</h4>
            <h4 className="KittyCardDesc">Age: {cat.kittyAge}</h4>
            <h4 className="KittyCardDesc">Good with Kids: {cat.kittyKids}</h4>
          </Grid>
          <Grid item xs={12} sm={2}>
            <Heart kittyId={cat.id} />
          </Grid>
        </Grid>
        <Grid container spacing={0}
          direction="row"
          justifyContent="flex-end"
          alignItems="flex-start">
          <Grid item xs={12} sm={9}>
            <h4 className="KittyCardDescStory">Kitty's Description:</h4>
          <h4 className="KittyCardDescStory">{cat.kittyStory}</h4>
          </Grid>
        </Grid>
    </Container>
);
}

export default KittyProfileCard;
