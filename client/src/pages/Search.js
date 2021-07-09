import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useAuthContext } from '../contexts/AuthContext';
import SearchForm from "../components/SearchForm/SearchForm";
import SearchResults from "../components/SearchResults/SearchResults";

function Search() {

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

  return (
    <div>
      <h1>HELLO this is the Search page</h1>
      <Link to='/'>View Recent Kitties</Link>
      <Link to='/search'>Find A Kitty</Link>
      <Link to='/postkitty'>Post A Kitty</Link>
      <Link to='/userprofile'>View My Profile</Link>

              <h1 className="text-center">Find the purrfect kitty by city</h1>
              <SearchForm
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
                search={searchTerm}
              />

    </div>
);
}

export default Search;
