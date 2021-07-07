import React from 'react';
import SingleKitty from '../components/SingleKitty/SingleKitty';
import { useAuthContext } from '../contexts/AuthContext';

const array = [{
  kittyName: "Wesker",
  kittyAge: 7
}]

const SearchResults = () => {
  const { logout } = useAuthContext();
  return(
  <div>
  {array.map(kitty => {
    return <SingleKitty kittyName={kitty.kittyName} kittyAge={kitty.kittyAge}/>
  })}

  </div>
);
}

export default SearchResults;
