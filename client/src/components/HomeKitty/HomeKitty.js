import React from 'react';
import { Link } from "react-router-dom";
import Heart from '../Heart/Heart';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import "./style.css";

const HomeKitty = ({cat}) => {
  return(
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={4} sm={10}   direction="column"
          justifyContent="center"
          alignItems="center">
          <li key={cat.id} className="kitty-results">
          <Link to={`/kittyprofile/${cat.id}`}><img className="HomeKittyImg" alt="kitty" src={cat.kittyPicture}/></Link>
            <Link to={`/kittyprofile/${cat.id}`}><button className="kittyBtn">See {cat.kittyName}'s Profile</button></Link>
          </li>
        </Grid>
        <Grid item xs={4} sm={2}>
          <Heart kittyId={cat.id}/>
        </Grid>
      </Grid>
    </Container>
);
}



export default HomeKitty;
