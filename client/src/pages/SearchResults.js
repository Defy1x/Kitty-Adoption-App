// import React from 'react';
// import SingleKitty from '../components/SingleKitty/SingleKitty';
// import { useAuthContext } from '../contexts/AuthContext';
//
// const array = [{
//   kittyName: "Wesker",
//   kittyAge: 7
// }]
//
// const SearchResults = () => {
//   const { logout } = useAuthContext();
//   return(
//   <div>
//   {array.map(kitty => {
//     return <SingleKitty kittyName={kitty.kittyName} kittyAge={kitty.kittyAge}/>
//   })}
//
//   </div>
// );
// }
//
// export default SearchResults;

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
          <Link to={`/kittyprofile/${result.id}`}>View Recent Kitties</Link>
          <img alt="kitty" src={result.kittyPicture} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
