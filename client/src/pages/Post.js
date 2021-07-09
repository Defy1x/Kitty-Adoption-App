import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { useAuthContext } from '../contexts/AuthContext';
import KittyForm from '../components/PostForm/KittyForm';

const Post = () => {


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
  const { logout } = useAuthContext();
  return(
  <div>
    <h1>HELLO this is the Post page</h1>
    <Link to='/'>View Recent Kitties</Link>
    <Link to='/search'>Find A Kitty</Link>
    <Link to='/postkitty'>Post A Kitty</Link>
    <Link to='/userprofile'>View My Profile</Link>
    <button onClick={ logout }>Logout</button>
    <Button onClick={(e)=>showWidget(e, widget)}>Upload a picture</Button>
    <KittyForm/>
  </div>
);
}

export default Post;
