import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import API from '../../utils/API';
import "./style.css";

const Heart=({ kittyId })=> {

const { user, setFavoriteKitties } = useAuthContext();
const [ isFavorite, setIsFavorite ] = useState(false)

useEffect(() => {
 const isFavoriteKitty = user?.favoriteKitties?.some(kitty => kittyId === kitty.id);
}, [ user ])

const unfavorite=()=> {
   setIsFavorite( false );
  API.removeFavoriteKitty(user.id, kittyId)
    .then(response => {
      API.getFavoriteKitties(user.id)
      .then(response => {
        setFavoriteKitties(response.data);
      })
    })
}

const favorite = () => {
   setIsFavorite( true );
  API.addFavoriteKitty(user.id, kittyId)
    .then(response => {
      API.getFavoriteKitties(user.id)
      .then(response => {
        setFavoriteKitties(response.data);
      })
    })
}

return (
<>
  {isFavorite ? <FavoriteIcon onClick={unfavorite}/> : <FavoriteBorderIcon onClick={favorite}/>}
</>
  )
}

export default Heart;
