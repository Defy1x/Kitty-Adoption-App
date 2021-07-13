import React, { useState, useEffect } from "react";
import  { useParams, useHistory, Link } from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext';
import KittyCard from '../components/KittyCard/KittyCard';
import API from '../utils/API';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../components/Main/Main';
import HomeLogo from '../components/Logo/HomeLogo/HomeLogo';
import Nav from '../components/Nav/Nav';

function SearchResults(props) {

  const { logout, user, login } = useAuthContext();

  const { location } = useParams()
  const history = useHistory()
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

  useEffect(() => {
    // call on api to get Kitties
    // setResults with data
    API.getKittiesByLocation(location)
    .then(response => {
      setResults(response.data)
    })
  }, [])

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
      <h2 className="HomeTitle">Search Results: </h2>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
        <div className="searchFlexContainer">
          <ul className="list-group search-results">
            {results.map(result => (
              <KittyCard cat={result} setAddFavorites={setAddFavorites} setRemoveFavorites={setRemoveFavorites}/>
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
export default SearchResults;
