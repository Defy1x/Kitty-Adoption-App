import React from 'react';
import "./style.css";

const SearchImage = ()=> {

  return(
  <img className="SearchImage" src={`${ process.env.PUBLIC_URL }/images/search-cat.svg`} alt="search-cat"/>
  )
}
export default SearchImage;
