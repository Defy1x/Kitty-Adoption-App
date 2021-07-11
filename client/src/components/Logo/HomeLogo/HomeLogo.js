import React from 'react';
import "./style.css";

const HomeLogo = ()=> {

  return(
  <img className="HomeLogo" src={`${ process.env.PUBLIC_URL }/images/zen-cat-home.svg`} alt="logo" width="300"/>
  )
}
export default HomeLogo;
