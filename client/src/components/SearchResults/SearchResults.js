import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import "./style.css";
import API from '../../utils/API';

function SearchResults(props) {

  const { location } = useParams()

  const [results, setResults] = useState([])

  useEffect(() => {
    // call on api to get Kitties
    // setResults with data
    API.getKittiesByLocation()
    .then(response => {
      setResults(response.data)
    })
  }, [])

  return (
    <ul className="list-group search-results">
      {results.map(result => (
        <li key={result.id} className="list-group-item">
          <img alt="kitty" src={result} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
