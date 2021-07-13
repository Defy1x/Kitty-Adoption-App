import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { Link } from "react-router-dom";
import HomeKitty from '../components/HomeKitty/HomeKitty';
import API from '../utils/API';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../components/Main/Main';
import HomeLogo from '../components/Logo/HomeLogo/HomeLogo';
import Nav from '../components/Nav/Nav';


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


return (
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
      <h2 className="HomeTitle">Recently Posted Kitties </h2>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
        <div className="homeFlexContainer">
          <ul className="list-group home-results">
            {topThreeCats.map(cat => (
            <HomeKitty cat={cat}/>
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
export default Home;
