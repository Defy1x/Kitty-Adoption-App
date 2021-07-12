import React from 'react';
import { Link } from "react-router-dom";
import Heart from '../Heart/Heart';

const HomeKitty = ({cat, setAddFavorites, setRemoveFavorites}) => {
  return(
  <li key={cat.id} className="list-group-item">
    <Heart kittyId = {cat.id} setAddFavorites={setAddFavorites} setRemoveFavorites={setRemoveFavorites} />
    <Link to={`/kittyprofile/${cat.id}`}><img alt="kitty" src={cat.kittyPicture} className="img-fluid" /></Link>
    <h4>{cat.kittyName}, {cat.kittyLocation}</h4>
  </li>
);
}

export default HomeKitty;
