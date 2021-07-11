import React from 'react';
import { Link } from "react-router-dom";
import { useAuthContext } from '../contexts/AuthContext';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from '../components/Header/Header';
import MainFeaturedPost from '../components/MainFeaturedPost/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost/FeaturedPost';
import Main from '../components/Main/Main';
import Sidebar from '../components/Sidebar/Sidebar';
import Footer from '../components/Footer/Footer';
import HomeLogo from '../components/Logo/HomeLogo/HomeLogo';
import LandingImage from '../components/LandingImage/LandingImage';
import GetStarted from '../components/GetStarted/GetStarted';
import post1 from '../components/Blog/blog-post.1.md';
import post2 from '../components/Blog/blog-post.2.md';
import post3 from '../components/Blog/blog-post.3.md';

const Landing = () => {
  const { login } = useAuthContext();

const sections = [
  { title: 'Technology', url: '#' },
  { title: 'Design', url: '#' },
  { title: 'Culture', url: '#' },
  { title: 'Business', url: '#' },
  { title: 'Politics', url: '#' },
  { title: 'Opinion', url: '#' },
  { title: 'Science', url: '#' },
  { title: 'Health', url: '#' },
  { title: 'Style', url: '#' },
  { title: 'Travel', url: '#' },
];

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageText: 'Image Text',
  },
];

const posts = [post1, post2, post3];

const sidebar = {
  title: 'About',
  description:
    'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
  archives: [
    { title: 'March 2020', url: '#' },
    { title: 'February 2020', url: '#' },
    { title: 'January 2020', url: '#' },
    { title: 'November 1999', url: '#' },
    { title: 'October 1999', url: '#' },
    { title: 'September 1999', url: '#' },
    { title: 'August 1999', url: '#' },
    { title: 'July 1999', url: '#' },
    { title: 'June 1999', url: '#' },
    { title: 'May 1999', url: '#' },
    { title: 'April 1999', url: '#' },
  ],
  social: [
    { name: 'GitHub', icon: GitHubIcon },
    { name: 'Twitter', icon: TwitterIcon },
    { name: 'Facebook', icon: FacebookIcon },
  ],
};

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
              <Grid item xs={12} sm={8}>
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
