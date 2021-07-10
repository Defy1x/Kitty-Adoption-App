import React from 'react';
import { Link } from "react-router-dom";
import Heart from '../Heart/Heart';

const SingleKitty = ({cat}) => {
  return(
  <li key={cat.id} className="list-group-item">
    <Link to={`/kittyprofile/${cat.id}`}>{cat.kittyName}</Link>
    <img alt="kitty" src={cat.kittyPicture} className="img-fluid" />
    <Heart kittyId = {cat.id}/>
  </li>
);
}

export default SingleKitty;
