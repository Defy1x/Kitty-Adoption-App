import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useAuthContext } from '../contexts/AuthContext';
import API from '../utils/API';
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../components/Main/Main';
import HomeLogo from '../components/Logo/HomeLogo/HomeLogo';
import SearchImage from '../components/SearchImage/SearchImage';


function Search() {
  const { logout, user, login } = useAuthContext();

  const [searchTerm, setSearchTerm] = useState("")
  const history = useHistory()
  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    history.push(`/searchresults/${searchTerm}`)
  };

  const handleLogout = async () => {
    try {
      await API.signOutUser();

      logout();
    } catch (err) {
      console.log( err);
    }
  }

return (
  <React.Fragment>
    <CssBaseline />
    <Container maxWidth="lg">
      <main>
      <Link to='/'><HomeLogo/></Link>
      <Link to='/search'>Find A Kitty</Link>
      <Link to='/postkitty'>Post A Kitty</Link>
      <Link to='/userprofile'>View My Profile</Link>
      <button onClick={ handleLogout }>Logout</button>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <SearchImage/>
      </Grid>
        <Grid item xs={12} sm={6}>
          <h1 className="SearchTitle">Find the Purrfect Kitty by City</h1>
          <SearchForm
            handleFormSubmit={handleFormSubmit}
            handleInputChange={handleInputChange}
            search={searchTerm}
          />
        </Grid>
      </Grid>
      </main>
    </Container>
  </React.Fragment>
);
}
export default Search;
