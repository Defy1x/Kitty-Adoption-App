import React from 'react';
import { Link } from "react-router-dom";
import { useAuthContext } from '../contexts/AuthContext';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../components/Main/Main';
import HomeLogo from '../components/Logo/HomeLogo/HomeLogo';
import LandingImage from '../components/LandingImage/LandingImage';
import GetStarted from '../components/GetStarted/GetStarted';


const Landing = () => {
  const { login } = useAuthContext();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
        <HomeLogo/>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
          <LandingImage/>
        </Grid>
          <Grid item xs={12} sm={6}>
            <h1 className="LandingTitle">Find Your Furever Home With Us</h1>
            <p className="LandingText">Adopt a cat close to you or post a furry friend for someone else to love. We work with local shelters to help you find the perfect kitty. </p>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={9}>
              <Link to='/signup'><GetStarted/></Link>
              <Link to='/login'><p className="LandingLink">Already have an account? Sign in.</p></Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
export default Landing;
