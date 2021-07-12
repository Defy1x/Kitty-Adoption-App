import React from 'react';
import "./style.css";

const GetStarted = ()=> {

  return(
  <img className="GetStartedBtn" src={`${ process.env.PUBLIC_URL }/images/get-Started-Btn.svg`} alt="Get-Started" width="300"/>
  )
}
export default GetStarted;
