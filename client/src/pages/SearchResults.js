import React, { useState, useEffect } from "react";
import  { useParams, useHistory, Link } from 'react-router-dom'
// import "./style.css";
import API from '../utils/API';

function SearchResults(props) {

  const { location } = useParams()
  const history = useHistory()
  const [results, setResults] = useState([])

  useEffect(() => {
    // call on api to get Kitties
    // setResults with data
    API.getKittiesByLocation(location)
    .then(response => {
      setResults(response.data)
    })
  }, [])


  return (
    <ul className="list-group search-results">
      {results.map(result => (
        <li key={result.id} className="list-group-item">
          <h1>{result.kittyName}</h1>
          <Link to={`/kittyprofile/${result.id}`}><p>{results.kittyName}</p></Link>
          <img alt="kitty" src={result.kittyPicture} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
