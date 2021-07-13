import React, { useState } from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import api from "../utils/API";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import HomeLogo from '../components/Logo/HomeLogo/HomeLogo';


const Login = () => {

  const { login } = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const {data} = await api.loginUser({email, password});

      login(data)
    } catch(err){
        console.log("Error with create login request to API!", err);
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
          <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          >
            <Link to='/'><HomeLogo/></Link>
          </Grid>
        <Typography>
          <h1 className="welcomeText">Welcome Back</h1>
        </Typography>
        <form>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={ email }
            onChange={ e => setEmail(e.target.value) }
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            value={ password }
            onChange={ e => setPassword(e.target.value) }
            type="password"
            name="password"
            label="Password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={ handleSubmit }
          >
            Sign in
          </Button>
        </form>
      <Link to='/signup'><p className="SignupLink">Don't have an account? Sign up.</p></Link>
      </div>
    </Container>
  );
}

export default Login;
