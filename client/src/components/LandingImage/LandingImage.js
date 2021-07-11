import React from 'react';
import "./style.css";

const LandingImage = ()=> {

  return(
  <img className="LandingImage" src={`${ process.env.PUBLIC_URL }/images/landing-cat.svg`} alt="landing-cat" width="500"/>
  )
}
export default LandingImage;
