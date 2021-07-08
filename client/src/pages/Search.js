import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { useAuthContext } from '../contexts/AuthContext';
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";

class Search extends Component {
  state = {
    search: "",
    locations: ["New York", "Atlanta", "Chicago", "Los Angeles", "San Francisco"],
    results: [],
    error: ""
  };

  // When the component mounts, get a list of all available base breeds and update this.state.breeds
  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
  };
  render() {
  return(
  <div>
    <h1>HELLO this is the Search page</h1>
    <Link to='/'>View Recent Kitties</Link>
    <Link to='/search'>Find A Kitty</Link>
    <Link to='/postkitty'>Post A Kitty</Link>
    <Link to='/userprofile'>View My Profile</Link>

            <h1 className="text-center">Find the purrfect kitty by city</h1>
            <SearchForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
              locations={this.state.breeds}
            />
            <SearchResults results={this.state.results} />

  </div>
);
}
}

export default Search;
