import React from 'react';
import "./style.css";

const LandingImage = ()=> {

  return(
    <object classname="LandingImage" type="image/svg+xml" data={`${ process.env.PUBLIC_URL }/images/landing-cat.svg`}></object>
  )
}
export default LandingImage;
