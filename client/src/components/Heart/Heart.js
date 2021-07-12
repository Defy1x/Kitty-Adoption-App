import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import API from '../../utils/API';
import "./style.css";

const Heart=({kittyId, setAddFavorites, setRemoveFavorites})=> {

const { user } = useAuthContext();
const [favorites, setFavorites] = useState(false);

const [userFavorite, setUserFavorite] = useState({})

useEffect(() => {
  console.log(user)
 const foundKitty=user?.favoriteKitties?.filter(kitty => kittyId === kitty.id)
 if (foundKitty && foundKitty?.length > 0) {
   setFavorites(true);
   setUserFavorite(foundKitty[0])
 }
}, [user])

const toggleFavorite=()=> {
  if (favorites){
    const favId = userFavorite.userKitty.id;
    API.removeFavoriteKitty(favId)
    .then(response => setRemoveFavorites(true))
  }
  else {
    API.addFavoriteKitty( user.id, kittyId)
    .then(response => setAddFavorites(true))
  }
}

return (
<>
  {favorites ? <FavoriteIcon onClick={toggleFavorite}/> : <FavoriteBorderIcon onClick={toggleFavorite}/>}
</>
  )
}

export default Heart;
