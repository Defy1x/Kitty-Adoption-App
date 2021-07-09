import React, { useState, useEffect } from "react";
import  { useParams, useHistory, Link } from 'react-router-dom'
import API from '../utils/API';

const KittyProfile = () => {
  const { id } = useParams()
  const [results, setResults] = useState([])

  useEffect(() => {
    // call on api to get Kitties
    // setResults with data
    API.getKitty(id)
    .then(response => {
      setResults(response.data)
    })
  }, [])

return (
  <p>{results.kittyName}</p>
)
}

export default KittyProfile;
