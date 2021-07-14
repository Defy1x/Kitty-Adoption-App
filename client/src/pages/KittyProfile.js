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


const KittyProfile = () => {

  const { id } = useParams()
  const [results, setResults] = useState({})
  const { logout, user, login } = useAuthContext();


    const history = useHistory()

  useEffect(() => {
    // call on api to get Kitties
    // setResults with data
    API.getKitty(id)
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
      <h2 className="HomeTitle"><button className="backBtn" onClick={() => history.goBack()}>Back to Previous Page</button></h2>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
        <div className="searchFlexContainer">
          <ul className="search-results">
            <KittyProfileCard cat={results}/>
          </ul>
        </div>
        </Grid>
      </Grid>
      </main>
    </Container>
  </React.Fragment>
);
}
export default KittyProfile;
