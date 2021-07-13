import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useAuthContext } from '../contexts/AuthContext';
import API from '../utils/API';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Main from '../components/Main/Main';
import HomeLogo from '../components/Logo/HomeLogo/HomeLogo';
import KittyForm from '../components/PostForm/KittyForm';
import PostImage from '../components/PostImage/PostImage';

const Post = () => {
  const { logout, user, login } = useAuthContext();

  const widget = window.cloudinary.createUploadWidget({
      cloudName: process.env.REACT_APP_CLOUD_NAME,
      uploadPreset: process.env.REACT_APP_UPLOAD_PRESET
      }, (error, result) => {
      if (!error && result && result.event === "success") {
      console.log('Done! Here is the image info: ', result.info);
      }
    }
  )
  const showWidget=(e, widget)=>{
    e.preventDefault()
    widget.open()
  }

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
      <h1 className="PostTitle">Post a Kitty</h1>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={3}>
        <PostImage/>
        <button className="uploadBtn" onClick={(e)=>showWidget(e, widget)}>Upload Cat's Photo</button>
      </Grid>
        <Grid item xs={12} sm={9}>
         <KittyForm/>
        </Grid>
      </Grid>
      </main>
    </Container>
  </React.Fragment>
);
}
export default Post;
