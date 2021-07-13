import React from 'react';
import { Link } from "react-router-dom";
import Heart from '../Heart/Heart';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "./style.css";

const KittyCard = ({cat, setAddFavorites, setRemoveFavorites}) => {
  return(
    <Container maxWidth="lg" className="KittyContainer">
      <Grid container spacing={5}>
        <Grid item xs={12} sm={3}>
          <li key={cat.id} className="kitty-results">
          <Link to={`/kittyprofile/${cat.id}`}><img className="KittyCardImg" alt="kitty" src={cat.kittyPicture} /></Link>
            <Link to={`/kittyprofile/${cat.id}`}><button className="uploadBtn">Read More!</button></Link>
          </li>
        </Grid>
        <Grid item xs={12} sm={4}>
          <h4 className="KittyCardDescTop">Kitty's Name: {cat.kittyName}</h4>
          <h4 className="KittyCardDesc">Breed: {cat.kittyBreed}</h4>
          <h4 className="KittyCardDesc">Color: {cat.kittyColor}</h4>
          <h4 className="KittyCardDesc">Sex: {cat.kittyGender}</h4>
        </Grid>
        <Grid item xs={12} sm={3}>
          <h4 className="KittyCardDescTop">Location: {cat.kittyLocation}</h4>
          <h4 className="KittyCardDesc">Weight: {cat.kittyWeight}</h4>
          <h4 className="KittyCardDesc">Personality: {cat.kittyPersonality}</h4>
          <h4 className="KittyCardDesc">Age: {cat.kittyAge}</h4>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Heart kittyId = {cat.id} setAddFavorites={setAddFavorites} setRemoveFavorites={setRemoveFavorites} />
        </Grid>
      </Grid>
    </Container>
);
}

export default KittyCard;
