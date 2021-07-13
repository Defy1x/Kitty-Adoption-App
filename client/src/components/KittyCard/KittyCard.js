import React from 'react';
import { Link } from "react-router-dom";
import Heart from '../Heart/Heart';
import "./style.css";

const KittyCard = ({cat, setAddFavorites, setRemoveFavorites}) => {
  return(
  <li key={cat.id} className="list-group-item">
    <Link to={`/kittyprofile/${cat.id}`}><img className="HomeKittyImg" alt="kitty" src={cat.kittyPicture} /></Link>
    <Heart kittyId = {cat.id} setAddFavorites={setAddFavorites} setRemoveFavorites={setRemoveFavorites} />
    <Link to={`/kittyprofile/${cat.id}`}><h4 className="HomeKittyDesc">{cat.kittyName}, {cat.kittyLocation}</h4></Link>
  </li>
);
}

export default KittyCard;
